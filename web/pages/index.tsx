import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import Header from '@/components/sections/Header';
import AboutSection from '@/components/sections/About';
import ProjectsSection from '@/components/sections/Projects';
import ExperienceSection from '@/components/sections/Experience';
import AvailabilitySection from '@/components/sections/Availability';
import Footer from '@/components/sections/Footer';
import Availability, { AvailabilityMonth } from '@/models/Availability';
import Goal, { GoalRecord } from '@/models/Goal';

type Props = {
  goal: GoalRecord;
  availabilityMonths: AvailabilityMonth[];
};

const Home: NextPage<Props> = ({ goal, availabilityMonths }) => {
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
      <ExperienceSection />
      <AvailabilitySection availabilityMonths={availabilityMonths} />
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const goal = await Goal.findOne({
    athleteId: Number(process.env.STRAVA_ADMIN_ID),
  });
  const availabilityMonths = await Availability.findAvailableMonths(6);

  return { props: { goal, availabilityMonths } };
};

export default Home;
