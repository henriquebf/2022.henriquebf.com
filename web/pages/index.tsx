import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import Header from '@/components/sections/Header';
import Intro from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Timeline from '@/components/sections/Timeline';
import Availability from '@/components/sections/Availability';
import Footer from '@/components/sections/Footer';

type Props = {
  settings?: string;
};

const Home: NextPage<Props> = ({ settings }) => {
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
      <Projects />
      <Timeline />
      <Availability settings={settings} />
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const settings = process.env.SETTINGS_AVAILABILITY;
  console.log(`1 settings:${settings}`);
  return { props: { settings } };
};

export default Home;
