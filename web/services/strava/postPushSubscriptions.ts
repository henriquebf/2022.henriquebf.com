import axios from 'axios';
import stravaSettings from '@/services/strava/settings.json';

export const verifyToken = 'fZOC25d2zR73mFRiYEmB';

const postPushSubscriptions = async (): Promise<any> => {
  try {
    const envStravaSettings = stravaSettings[process.env.NODE_ENV];
    const res = await axios.post(
      `https://www.strava.com/api/v3/push_subscriptions`,
      {
        params: {
          client_id: envStravaSettings.clientId,
          client_secret: process.env.STRAVA_CLIENT_SECRET,
          callback_url: 'https://henriquebf.com/api/push',
          verify_token: verifyToken,
        },
      }
    );
    return res.data;
  } catch (err: any) {
    return;
  }
};

export default postPushSubscriptions;
