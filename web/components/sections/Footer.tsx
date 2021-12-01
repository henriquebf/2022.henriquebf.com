import type { NextPage } from 'next';
import zIndexes from '@/config/zIndexes.json';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import Container from '@/components/layout/Container';
import SocialIcons from '@/components/shared/SocialIcons';

const Footer: NextPage = () => {
  return (
    <section id="footer">
      <Container>
        <div className="wrapper">
          <div className="last-update">LAST UPDATE: DECEMBER 2021</div>
          <div>
            <div className="social">
              <SocialIcons />
            </div>
          </div>
        </div>
      </Container>
      <style jsx>{`
        #footer {
          position: relative;
          z-index: ${zIndexes.section};
          padding: 20px 0;
          line-height: 30px;
          color: ${colors.light.base_text_secondary_color};
        }

        .wrapper {
          display: grid;
          grid-template-columns: 100%;
        }

        .last-update {
          display: none;
        }

        .social {
          width: 190px;
          margin: 0 auto;
        }

        @media (prefers-color-scheme: dark) {
          #footer {
            color: ${colors.dark.base_text_secondary_color};
          }
        }

        @media (min-width: ${sizes.container}) {
          .wrapper {
            grid-template-columns: 50% 50%;
          }

          .last-update {
            display: block;
          }

          .social {
            float: right;
          }
        }
      `}</style>
    </section>
  );
};

export default Footer;
