import type { NextPage } from 'next';
import zIndexes from '@/config/zIndexes.json';
import Container from '@/components/shared/Container';

const Timeline: NextPage = () => {
  return (
    <section id="timeline">
      <Container>[TIMELINE]</Container>
      <style jsx>{`
        #timeline {
          position: relative;
          z-index: ${zIndexes.section};
        }
      `}</style>
    </section>
  );
};

export default Timeline;
