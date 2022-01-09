import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import Header from '@/components/sections/Header';
import Intro from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Timeline from '@/components/sections/Timeline';
import Availability from '@/components/sections/Availability';
import Footer from '@/components/sections/Footer';
import { SettingsAvailability } from '@/types/SettingsTypes';
import { CyclingGoal } from '@/types/CyclingTypes';

type Props = {
  settingsAvailability: SettingsAvailability;
  cyclingGoal: CyclingGoal;
};

const Home: NextPage<Props> = ({ settingsAvailability, cyclingGoal }) => {
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
      <Intro />
      <Projects cyclingGoal={cyclingGoal} />
      <Timeline />
      <Availability settingsAvailability={settingsAvailability} />
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const settingsAvailability: SettingsAvailability =
    process.env.SETTINGS_AVAILABILITY || '';
  const cyclingGoal: CyclingGoal = {
    total: process.env.CYCLING_YEARLY
      ? parseInt(process.env.CYCLING_YEARLY)
      : 10000,
    complete: process.env.CYCLING_COMPLETE
      ? parseInt(process.env.CYCLING_COMPLETE)
      : 0,
  };

  return { props: { settingsAvailability, cyclingGoal } };
};

export default Home;
