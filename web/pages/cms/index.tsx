import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
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
          <footer>
            <Link href={`/`}>home</Link>
          </footer>
        </Container>
      </main>
    </div>
  );
};

export default AdminIndex;
