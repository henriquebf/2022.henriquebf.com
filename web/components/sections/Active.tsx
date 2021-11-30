import type { NextPage } from 'next';
import zIndexes from '@/config/zIndexes.json';
import colors from '@/config/colors.json';
import Container from '@/components/layout/Container';

const Active: NextPage = () => {
  return (
    <section id="active">
      <Container>[ACTIVE PROJECTS]</Container>
      <style jsx>{`
        #active {
          position: relative;
          z-index: ${zIndexes.section};
          background-color: ${colors.light.base_bg_secondary_color};
        }

        @media (prefers-color-scheme: dark) {
          #active {
            background-color: ${colors.dark.base_bg_secondary_color};
          }
        }
      `}</style>
    </section>
  );
};

export default Active;
