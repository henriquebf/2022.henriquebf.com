import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import colors from '@/config/colors.json';
import zIndexes from '@/config/zIndexes.json';
import { classnames } from '@/helpers/classnameHelper';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const Intro: NextPage = () => {
  const scrollPosition = useScrollPosition();

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (scrollPosition > 0) {
      setShowIntro(false);
    } else {
      setShowIntro(true);
    }
  }, [scrollPosition, setShowIntro]);

  const _handleCaretClick = () => {};

  return (
    <section id="introduction">
      <div className={classnames(['content', showIntro ? 'show' : 'hide'])}>
        <div className={classnames(['scale', showIntro ? 'show' : 'hide'])}>
          <div
            className="logo"
            dangerouslySetInnerHTML={{
              __html:
                '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="87.887" height="100" viewBox="0, 0, 87.887, 100"><g id="Layer_1" transform="translate(-5.744, -0)"><path d="M49.687,0 C50.505,0 51.314,0.206 52.046,0.629 L91.273,23.19 C92.739,24.036 93.631,25.663 93.631,27.357 L93.631,72.637 C93.631,74.33 92.737,75.878 91.273,76.725 L52.046,99.365 C50.579,100.212 48.796,100.212 47.329,99.365 L8.102,76.725 C6.636,75.878 5.744,74.33 5.744,72.637 L5.744,27.357 C5.744,25.666 6.635,24.036 8.102,23.19 L47.329,0.629 C48.061,0.206 48.87,0 49.687,0 z M85.58,29.78 L67.34,29.78 L67.34,72.5 L73.46,72.5 L73.46,54.26 L84.02,54.26 L84.02,48.5 L73.46,48.5 L73.46,35.54 L85.58,35.54 L85.58,29.78 z M50.72,29.78 L41.78,29.78 L41.78,72.5 L50.12,72.5 Q56.12,72.5 58.85,69.5 Q61.58,66.5 61.58,60.86 L61.58,58.46 Q61.58,55.1 60.56,53.09 Q59.54,51.08 57.38,50.06 Q58.4,49.46 59.18,48.77 Q59.96,48.08 60.5,47.18 Q61.04,46.28 61.31,45.08 Q61.58,43.88 61.58,42.14 L61.58,40.58 Q61.58,38.48 61.01,36.53 Q60.44,34.58 59.12,33.08 Q57.8,31.58 55.73,30.68 Q53.66,29.78 50.72,29.78 z M50.6,52.7 Q52.28,52.7 53.3,53.12 Q54.32,53.54 54.89,54.35 Q55.46,55.16 55.64,56.36 Q55.82,57.56 55.82,59.18 Q55.82,60.74 55.7,62.06 Q55.58,63.38 55.04,64.34 Q54.5,65.3 53.45,65.84 Q52.4,66.38 50.54,66.38 L47.9,66.38 L47.9,52.7 L50.6,52.7 z M50.42,35.54 Q53.48,35.54 54.65,36.98 Q55.82,38.42 55.82,41.3 Q55.82,44.24 54.77,45.77 Q53.72,47.3 50.66,47.3 L47.9,47.3 L47.9,35.54 L50.42,35.54 z M22.34,29.78 L16.22,29.78 L16.22,72.5 L22.34,72.5 L22.34,53.48 L29.9,53.48 L29.9,72.5 L36.02,72.5 L36.02,29.78 L29.9,29.78 L29.9,48.08 L22.34,48.08 L22.34,29.78 z" fill="#FFFFFF"/></g></svg>',
            }}
          />
          <h3>[TITLE]</h3>
          <h5>[SUB-TITLE]</h5>
          <h5>[LOCATION]</h5>
        </div>
      </div>
      <div
        className={classnames(['caret', showIntro ? 'show' : 'hide'])}
        onClick={_handleCaretClick}
      />
      <style jsx>{`
        #introduction {
          position: relative;
          z-index: ${zIndexes.section};
          height: 100vh;
          color: ${colors.base_text_color_inverted};
          background-color: ${colors.base_bg_color_inverted};
          text-align: center;
        }

        a,
        h5 {
          color: ${colors.base_medium_color};
        }

        .content {
          position: absolute;
          top: 50%;
          width: 100%;
          height: 220px;
          transform: translateY(-50%);
          opacity: 1;
          transition: opacity 0.25s;
        }

        .scale {
          transform: scale(1);
          transition: transform 0.25s;
        }

        @media (min-width: 812px) {
          .content {
            position: fixed;
          }

          .content.hide {
            opacity: 0;
          }

          .scale.hide {
            transform: scale(0.9);
          }
        }

        .caret {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 10px;
          border-top-color: rgba(255, 255, 255, 0.85);
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #fff;
          cursor: pointer;
          opacity: 1;
          transition: opacity 0.25s;
        }

        .caret.show {
          opacity: 1;
        }

        .caret.hide {
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Intro;
