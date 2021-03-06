import { NextApiRequest, NextApiResponse } from 'next';
import Goal from '@/models/Goal';
import { verifyToken } from '@/services/strava/postPushSubscriptions';
import postOAuthToken from 'services/strava/postOAuthToken';
import getAthlete from '@/services/strava/getAthlete';
import getAthleteStats from '@/services/strava/getAthleteStats';

type Data =
  | {}
  | {
      'hub.challenge': string;
    };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Respond to Strava, if confirming subscription
  if (
    req.query?.['hub.verify_token'] === verifyToken &&
    req.query?.['hub.mode'] === 'subscribe' &&
    req.query?.['hub.challenge']
  ) {
    console.log(`api/push: responding hub (${req.query?.['hub.challenge']})`);
    return res
      .status(200)
      .json({ 'hub.challenge': req.query?.['hub.challenge'] });
  }

  // Execute user push
  console.log(`api/push: receiving push for ${req.body.owner_id}...`);

  // Find refresh token
  const goal = await Goal.findOne({ athleteId: req.body.owner_id });
  if (!goal?.refreshToken) {
    throw new Error('api/push: could not find a valid refreshToken!');
  }

  // Update access token
  const data = await postOAuthToken(goal.refreshToken, 'refresh_token');
  if (!data?.access_token) {
    throw new Error('api/push: invalid token response!');
  }

  // Update Goal data
  const athlete = await getAthlete(data.access_token);
  const athleteStats = await getAthleteStats(data.access_token, athlete.id);
  const distance = athleteStats?.ytd_ride_totals?.distance;
  if (distance >= 0) {
    await Goal.save(
      goal ? { ...goal, distance } : { athleteId: athlete.id, distance }
    );
    console.log(`api/push: updated for ${req.body.owner_id}. (${distance}m)`);
  } else {
    console.error(`api/push: invalid distance for ${req.body.owner_id}!`);
  }

  res.status(200).json({});
}
