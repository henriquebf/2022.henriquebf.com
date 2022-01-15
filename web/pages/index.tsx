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
  const title = 'Henrique Ferreira - Fullstack Developer';
  const description =
    'About me, Projects & Interest, Career Timeline and Availability';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/meta-opengraph.jpg" />
        <link rel="icon" href="/favicon.png" />
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
