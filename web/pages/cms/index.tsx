import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '@/components/layout/Container';
import ConnectWithStrava from '@/components/buttons/ConnectWithStrava';

const AdminIndex: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <h1>CMS</h1>
          <div>
            <ConnectWithStrava />
          </div>
        </Container>
      </main>
    </div>
  );
};

export default AdminIndex;
