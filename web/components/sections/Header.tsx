import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import zIndexes from '@/config/zIndexes.json';
import colors from '@/config/colors.json';
import { classnames } from '@/helpers/classnameHelper';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Container from '@/components/layout/Container';

const Header: NextPage = () => {
  const scrollPosition = useScrollPosition();

  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (scrollPosition > 150) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  }, [scrollPosition, setShowHeader]);

  return (
    <section id="header">
      <Container>
        <div className={classnames(['content', showHeader ? 'show' : 'hide'])}>
          ABOUT | ACTIVE PROJECTS | PAST EXPERIENCE
        </div>
      </Container>
      <style jsx>{`
        #header {
          position: absolute;
          width: 100%;
          height: 65px;
          z-index: ${zIndexes.header};
          color: ${colors.light.base_text_primary_color};
          background-image: linear-gradient(
            to bottom,
            ${colors.light.base_bg_primary_gradient}
          );
        }

        @media (prefers-color-scheme: dark) {
          #header {
            color: ${colors.dark.base_text_primary_color};

            background-image: linear-gradient(
              to bottom,
              ${colors.dark.base_bg_primary_gradient}
            );
          }
        }

        .content {
          top: 20px;
          position: absolute;
          opacity: 1;
          transition: opacity 0.25s;
        }

        @media (min-width: 1200px) {
          #header {
            position: fixed;
          }

          .content.hide {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Header;
