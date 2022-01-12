import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { withSessionSsr } from '@/lib/session';
import Availability, { AvailabilityRecord } from '@/models/Availability';
import Goal, { GoalRecord } from '@/models/Goal';

type Props = { goal: GoalRecord; availabilities: AvailabilityRecord[] };

const AdminSettings: NextPage<Props> = ({ goal, availabilities }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Head>
        <title>CMS - Settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <h1>Settings</h1>
          <h2>Goal in {currentYear}</h2>
          <table>
            <tr>
              <td>
                <b>Total:</b>
              </td>
              <td>{goal.total} m</td>
            </tr>
            <tr>
              <td>
                <b>Distance:</b>
              </td>
              <td>{goal.distance} m</td>
            </tr>
          </table>
          <h2>Availability</h2>
          <table>
            {availabilities.map((a) => (
              <tr>
                <td>
                  <b>
                    {a.year}.{a.month}
                  </b>
                </td>
                <td>{a.unavailableDays}</td>
              </tr>
            ))}
          </table>
          <h3>Actions</h3>
          <footer>
            <Link href={`/api/logout`}>logout</Link>
          </footer>
        </Container>
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
