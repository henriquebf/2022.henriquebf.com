import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import Header from '@/components/sections/Header';
import AboutSection from '@/components/sections/About';
import ProjectsSection from '@/components/sections/Projects';
import TimelineSection from '@/components/sections/Timeline';
import AvailabilitySection from '@/components/sections/Availability';
import Footer from '@/components/sections/Footer';
import Availability, { AvailabilityRecord } from '@/models/Availability';
import Goal, { GoalRecord } from '@/models/Goal';

type SettingsAvailability = string;

type Props = {
  goal: GoalRecord;
  availabilities: AvailabilityRecord[];
  settingsAvailability: SettingsAvailability;
};

const Home: NextPage<Props> = ({
  goal,
  availabilities,
  settingsAvailability,
}) => {
  return (
    <>
      <Head>
        <title>Henrique Ferreira - Fullstack Developer & Founder</title>
        <meta
          name="description"
          content="Summary of Experience, Side Projects & Personal Interests"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AboutSection />
      <ProjectsSection goal={goal} />
      <TimelineSection />
      <AvailabilitySection
        availabilities={availabilities}
        settingsAvailability={settingsAvailability}
      />
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const settingsAvailability: SettingsAvailability =
    process.env.SETTINGS_AVAILABILITY || '';

  const goal = await Goal.findOne({
    athleteId: Number(process.env.STRAVA_ADMIN_ID),
  });
  const availabilities = await Availability.find({});

  return { props: { goal, availabilities, settingsAvailability } };
};

export default Home;
