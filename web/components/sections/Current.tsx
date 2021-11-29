import type { NextPage } from 'next';
import zIndexes from '@/config/zIndexes.json';
import Container from '@/components/shared/Container';

const Current: NextPage = () => {
  return (
    <section id="current">
      <Container>[CURRENT]</Container>
      <style jsx>{`
        #current {
          position: relative;
          z-index: ${zIndexes.section};
        }
      `}</style>
    </section>
  );
};

export default Current;
