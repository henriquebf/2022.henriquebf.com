import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/sections/Header';
import Intro from '@/components/sections/Intro';
import Current from '@/components/sections/Current';
import Timeline from '@/components/sections/Timeline';
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
      <Current />
      <Timeline />
      <Footer />
    </>
  );
};

export default Home;
