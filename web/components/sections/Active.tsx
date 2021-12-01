import type { NextPage } from 'next';
import zIndexes from '@/config/zIndexes.json';
import colors from '@/config/colors.json';
import Container from '@/components/layout/Container';

const Active: NextPage = () => {
  return (
    <section id="active">
      <Container>
        <div className="content">
          <h2>Active Projects</h2>
          [CURRENT SITUATION]
          <br />
          [WHAT IM LOOKING FOR...]
          <br />
          [GITHUB REPOS]
          <br />
          [STRAVA GOALS]
        </div>
      </Container>
      <style jsx>{`
        #active {
          position: relative;
          z-index: ${zIndexes.section};
          background-color: ${colors.light.base_bg_secondary_color};
        }

        .content {
          padding: 20px 0;
          border-bottom: 1px solid ${colors.light.base_border_color};
        }

        @media (prefers-color-scheme: dark) {
          #active {
            background-color: ${colors.dark.base_bg_secondary_color};
          }

          .content {
            border-bottom: 1px solid ${colors.dark.base_border_color};
          }
        }
      `}</style>
    </section>
  );
};

export default Active;
