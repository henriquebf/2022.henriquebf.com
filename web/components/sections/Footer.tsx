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
          <div className="email">
            <a href="mailto:contact@henriquebf.com">contact@henriquebf.com</a>
          </div>
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
          color: ${colors.light.text_primary_color};
        }

        .email {
          display: none;
        }

        .social {
          width: 190px;
          margin: 0 auto;
        }

        @media (prefers-color-scheme: dark) {
          #footer {
            color: ${colors.dark.text_primary_color};
          }
        }

        @media (min-width: ${sizes.container}) {
          .wrapper {
            display: flex;
            justify-content: space-between;
            grid-template-columns: 50% 50%;
          }

          .email {
            display: block;
          }
        }
      `}</style>
    </section>
  );
};

export default Footer;
