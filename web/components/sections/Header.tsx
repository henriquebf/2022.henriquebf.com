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

  const hideHeader = (e: any) => {
    e.preventDefault();
    const target = e.target.href?.split('#')[1] ?? '';
    const element = document.getElementById(target);
    element?.scrollIntoView();
    setTimeout(() => setShowHeader(false), 50);
  };

  return (
    <header id="header" className={classNames([showHeader ? 'show' : 'hide'])}>
      <Container>
        <nav>
          <a href="#about" onClick={hideHeader}>
            About
          </a>
          <div> &middot; </div>
          <a href="#projects" onClick={hideHeader}>
            Personal Projects
          </a>
          <div> &middot; </div>
          <a href="#timeline" onClick={hideHeader}>
            Career Timeline
          </a>
        </nav>
      </Container>
      <style jsx>{`
        #header {
          display: none;
          width: 100%;
          height: 65px;
          z-index: ${zIndexes.header};
          opacity: 1;
          transition: opacity 0.25s;
          color: ${colors.light.text_primary_color};
          background-image: linear-gradient(
            to bottom,
            ${colors.light.bg_primary_gradient}
          );
        }

        @media (prefers-color-scheme: dark) {
          #header {
            text-transform: uppercase;
            color: ${colors.dark.text_primary_color};
            background-image: linear-gradient(
              to bottom,
              ${colors.dark.bg_primary_gradient}
            );
          }
        }

        nav {
          width: 100%;
          display: flex;
          gap: 10px;
          padding: 20px 0;
          color: ${colors.light.border_highlight_color};
        }

        a {
          color: ${colors.light.text_primary_color};
        }

        @media (prefers-color-scheme: dark) {
          nav {
            color: ${colors.dark.border_highlight_color};
          }

          a {
            color: ${colors.dark.text_primary_color};
          }
        }

        @media (min-width: ${sizes.container}) {
          #header {
            display: block;
            position: fixed;
          }

          #header.hide {
            opacity: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
