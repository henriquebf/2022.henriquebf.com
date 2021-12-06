import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import zIndexes from '@/config/zIndexes.json';
import { classNames } from '@/helpers/classnameHelper';
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
        <div className={classNames(['content', showHeader ? 'show' : 'hide'])}>
          ABOUT | ACTIVE PROJECTS | CAREER TIMELINE
        </div>
      </Container>
      <style jsx>{`
        #header {
          display: none;
          position: absolute;
          width: 100%;
          height: 65px;
          z-index: ${zIndexes.header};
          color: ${colors.light.text_primary_color};
          background-image: linear-gradient(
            to bottom,
            ${colors.light.bg_primary_gradient}
          );
        }

        @media (prefers-color-scheme: dark) {
          #header {
            color: ${colors.dark.text_primary_color};
            background-image: linear-gradient(
              to bottom,
              ${colors.dark.bg_primary_gradient}
            );
          }
        }

        .content {
          top: 20px;
          position: absolute;
          opacity: 1;
          transition: opacity 0.25s;
        }

        .contact {
          float: right;
        }

        @media (min-width: ${sizes.container}) {
          #header {
            display: block;
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
