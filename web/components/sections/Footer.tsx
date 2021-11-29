import type { NextPage } from 'next';
import zIndexes from '@/config/zIndexes.json';
import Container from '@/components/shared/Container';

const Footer: NextPage = () => {
  return (
    <section id="footer">
      <Container>[FOOTER]</Container>
      <style jsx>{`
        #footer {
          position: relative;
          z-index: ${zIndexes.section};
          height: 220px;
        }
      `}</style>
    </section>
  );
};

export default Footer;
