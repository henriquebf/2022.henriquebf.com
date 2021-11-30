import type { NextPage } from 'next';
import zIndexes from '@/config/zIndexes.json';
import colors from '@/config/colors.json';
import Container from '@/components/layout/Container';

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

        @media (prefers-color-scheme: dark) {
          #footer {
          }
        }
      `}</style>
    </section>
  );
};

export default Footer;
