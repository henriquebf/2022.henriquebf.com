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
  const title = 'Henrique Ferreira';
  const description = 'A Road Cycling enthusiast and Fullstack Developer.';
  const image = 'https://henriquebf.com/meta-opengraph.jpg';
  const icon = 'https://henriquebf.com/favicon.png';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/png" href={icon} />
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
