import type { NextPage } from 'next';
import Head from 'next/head';
import { withSessionSsr } from '@/lib/session';
import Availability, { AvailabilityRecord } from '@/models/Availability';
import Goal, { GoalRecord } from '@/models/Goal';

type Props = { goal: GoalRecord; availabilities: AvailabilityRecord[] };

const AdminSettings: NextPage<Props> = ({ goal, availabilities }) => {
  return (
    <div>
      <Head>
        <title>Admin - Settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Settings</h1>
        <h2>Goal</h2>
        <div>Total: {goal.total}</div>
        <div>Distance: {goal.distance}</div>
        <h2>Availability</h2>
        <ul>
          {availabilities.map((a) => (
            <ul>{a.id}</ul>
          ))}
        </ul>
        <footer>
          <a href={`/api/logout`}>logout</a>
        </footer>
      </main>
    </div>
  );
};

export const getServerSideProps = withSessionSsr(async function ({
  req,
  res,
}): Promise<{ props: any }> {
  const athleteId = req.session.athleteId;
  if (athleteId !== process.env.STRAVA_ADMIN_ID) {
    res.setHeader('location', '/cms');
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }

  const goal = await Goal.findOne({ athleteId: Number(athleteId) });
  const availabilities = await Availability.find({});

  return {
    props: { goal, availabilities: availabilities },
  };
});

export default AdminSettings;
