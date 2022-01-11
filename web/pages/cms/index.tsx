import type { NextPage } from 'next';
import Head from 'next/head';
import { withSessionSsr } from '@/lib/session';
import ConnectWithStrava from '@/components/buttons/ConnectWithStrava';
import Availability, { AvailabilityRecord } from '@/models/Availability';
import Goal, { GoalRecord } from '@/models/Goal';

type Props = { goal: GoalRecord; availabilities: AvailabilityRecord[] };

const AdminIndex: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Admin</h1>
        <div>
          <ConnectWithStrava />
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = withSessionSsr(async function ({
  req,
  res,
}): Promise<{ props: any }> {
  const athleteId = req.session.athleteId;
  if (athleteId === process.env.STRAVA_ADMIN_ID) {
    const goal = await Goal.findOne({ athleteId: Number(athleteId) });
    const availabilities = await Availability.find({});

    res.setHeader('location', '/cms/data');
    res.statusCode = 302;
    res.end();
    return { props: { goal, availabilities } };
  }

  return {
    props: {},
  };
});

export default AdminIndex;
