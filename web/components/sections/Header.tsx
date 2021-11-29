import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import zIndexes from '@/config/zIndexes.json';
import { classnames } from '@/helpers/classnameHelper';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Container from '@/components/shared/Container';

const Header: NextPage = () => {
  const scrollPosition = useScrollPosition();

  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (scrollPosition > 0) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [scrollPosition, setShowHeader]);

  return (
    <section id="header">
      <Container>
        <div className={classnames(['content', showHeader ? 'hide' : 'show'])}>
          [HEADER]
        </div>
      </Container>
      <style jsx>{`
        #header {
          position: fixed;
          top: 20px;
          width: 100%;
          z-index: ${zIndexes.header};
          color: #fff;
        }

        .content {
          opacity: 1;
          transition: opacity 0.25s;
        }

        @media (min-width: 812px) {
          .content.hide {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Header;
