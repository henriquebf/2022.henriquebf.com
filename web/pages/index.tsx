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

type Props = {
  goal: GoalRecord;
  availabilities: AvailabilityRecord[];
};

const Home: NextPage<Props> = ({ goal, availabilities }) => {
  return (
    <>
      <Head>
        <title>Henrique Ferreira - Fullstack Developer</title>
        <meta
          name="description"
          content="Summary of Experience, Personal Projects and Interests"
        />
        <meta
          property="og:title"
          content="Henrique Ferreira - Fullstack Developer"
        />
        <meta property="og:image" content="/meta-opengraph.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AboutSection />
      <ProjectsSection goal={goal} />
      <TimelineSection />
      <AvailabilitySection availabilities={availabilities} />
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const goal = await Goal.findOne({
    athleteId: Number(process.env.STRAVA_ADMIN_ID),
  });
  const availabilities = await Availability.find({});

  return { props: { goal, availabilities } };
};

export default Home;
