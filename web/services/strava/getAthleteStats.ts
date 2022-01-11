import axios from 'axios';

type Totals = {
  count: number;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  elevation_gain: number;
};

export type AthleteStatsData = {
  ytd_ride_totals: Totals;
  all_ride_totals: Totals;
  ytd_run_totals: Totals;
  all_run_totals: Totals;
  ytd_swim_totals: Totals;
  all_swim_totals: Totals;
};

const getAthleteStats = async (
  accessToken: string,
  athleteId: number
): Promise<AthleteStatsData> => {
  try {
    const res: any = await axios.get(
      `https://www.strava.com/api/v3/athletes/${athleteId}/stats`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return res?.data || undefined;
  } catch (err: any) {
    throw new Error(`getAthleteStats: ${err.message}`);
  }
};

export default getAthleteStats;
