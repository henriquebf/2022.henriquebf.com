import axios from 'axios';
import stravaSettings from '@/services/strava/settings.json';

export const verifyToken = 'fZOC25d2zR73mFRiYEmB';
const envStravaSettings = stravaSettings[process.env.NODE_ENV];

type Body = {
  client_id: string;
  client_secret: string;
  callback_url: string;
  verify_token: string;
};

const postPushSubscriptions = async (): Promise<any> => {
  try {
    const body: Body = {
      client_id: envStravaSettings.clientId,
      client_secret: process.env.STRAVA_CLIENT_SECRET || '',
      callback_url: 'https://henriquebf.com/api/push',
      verify_token: verifyToken,
    };

    const res = await axios.post(
      `https://www.strava.com/api/v3/push_subscriptions`,
      body
    );
    return res.data;
  } catch (err: any) {
    throw new Error(`postPushSubscriptions: ${err.message}`);
  }
};

export default postPushSubscriptions;
