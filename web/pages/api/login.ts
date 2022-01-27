// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withSessionRoute } from '@/lib/session';
import Goal from '@/models/Goal';
import postOAuthToken from 'services/strava/postOAuthToken';
import getAthlete from '@/services/strava/getAthlete';
import getAthleteStats from '@/services/strava/getAthleteStats';
import postPushSubscriptions from '@/services/strava/postPushSubscriptions';
import getPushSubscriptions from '@/services/strava/getPushSubscriptions';

export default withSessionRoute(async (req, res) => {
  try {
    if (typeof req.query?.code !== 'string') {
      throw new Error('oauth: code not provided!');
    }

    // Request tokens from Strava
    const data = await postOAuthToken(req.query.code, 'authorization_code');
    if (!data?.athlete?.id || !data?.refresh_token) {
      throw new Error('oauth: invalid token response!');
    }
    const refreshToken = data.refresh_token;

    // Check if strava user has admin credentials
    if (process.env.STRAVA_ADMIN_ID !== String(data.athlete.id)) {
      res.redirect('/cms');
    }

    // Update Goal data
    const athlete = await getAthlete(data.access_token);
    const goal = await Goal.findOne({ athleteId: athlete.id });
    const athleteStats = await getAthleteStats(data.access_token, athlete.id);
    const distance = athleteStats?.ytd_ride_totals?.distance;
    if (distance >= 0) {
      await Goal.save(
        goal
          ? { ...goal, refreshToken, distance }
          : { athleteId: athlete.id, refreshToken, distance }
      );
    }

    // Save session
    req.session.athleteId = String(data.athlete.id);
    await req.session.save();

    // Subscribe to push notifications (async)
    const subscriptions = await getPushSubscriptions();
    if (!subscriptions?.length) {
      const response = await postPushSubscriptions();
      if (!response) {
        console.error('push: could not subscribe!');
      }
    }

    res.redirect('/cms/edit');
  } catch (err) {
    console.error(err);
    req.session.destroy();
    res.redirect('/cms');
  }
});
