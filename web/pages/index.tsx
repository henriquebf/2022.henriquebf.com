import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/sections/Header';
import Intro from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Timeline from '@/components/sections/Timeline';
import Availability from '@/components/sections/Availability';
import Footer from '@/components/sections/Footer';

const Home: NextPage = () => {
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
      <Availability />
      <Footer />
    </>
  );
};

export default Home;
