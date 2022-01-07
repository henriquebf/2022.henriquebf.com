import type { NextPage } from 'next';
import zIndexes from '@/config/zIndexes.json';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import Container from '@/components/layout/Container';

const Availability: NextPage = () => {
  return (
    <section id="availability">
      <Container>
        <div className="content">
          <h2>Availability</h2>
          <div className="wrapper"></div>
        </div>
      </Container>
      <style jsx>{`
        #availability {
          position: relative;
          z-index: ${zIndexes.section};
          background-color: ${colors.light.bg_secondary_color};
          border-bottom: 1px solid ${colors.light.border_discreet_color};
        }

        .content {
          padding: 20px 0;
        }

        .wrapper,
        .availability {
          display: grid;
          grid-template-columns: 100%;
        }

        @media (prefers-color-scheme: dark) {
          #availability {
            background-color: ${colors.dark.bg_secondary_color};
            border-bottom: 1px solid ${colors.dark.border_discreet_color};
          }
        }

        @media (min-width: ${sizes.container}) {
          .wrapper {
            grid-template-columns: 66% 33%;
          }

          .availability {
            grid-template-columns: 50% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default Availability;
