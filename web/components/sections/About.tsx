import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import zIndexes from '@/config/zIndexes.json';
import { classNames } from '@/helpers/classnameHelper';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Container from '@/components/layout/Container';
import SocialIcons from '@/components/shared/SocialIcons';

const About: NextPage = () => {
  const scrollPosition = useScrollPosition();

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (scrollPosition > 150) {
      setShowIntro(false);
    } else {
      setShowIntro(true);
    }
  }, [scrollPosition, setShowIntro]);

  const _handleCaretClick = () => {};

  return (
    <section id="about">
      <div className={classNames(['content', showIntro ? 'show' : 'hide'])}>
        <Container>
          <div className="wrapper">
            <div className={classNames(['scale', showIntro ? 'show' : 'hide'])}>
              <div className="avatar" />
              <h1>
                I am <b>Henrique Ferreira</b>
              </h1>
              <h3>
                A <b>Road Cycling</b> enthusiast and <b>Fullstack Developer</b>{' '}
                specialist on React based frameworks.
              </h3>
              <h3>
                20+ years experience building e-commerces and applications for
                Web, Desktop and Mobile.
              </h3>
              <div className="social-icons">
                <SocialIcons />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div
        className={classNames(['caret', showIntro ? 'show' : 'hide'])}
        onClick={_handleCaretClick}
      />
      <style jsx>{`
        #about {
          position: relative;
          display: flex;
          align-items: center;
          z-index: ${zIndexes.section};
          height: 100vh;
          color: ${colors.light.text_primary_color};
          background-color: ${colors.light.bg_primary_color};
          border-bottom: 1px solid ${colors.light.border_discreet_color};
        }

        @media (prefers-color-scheme: dark) {
          #about {
            color: ${colors.dark.text_primary_color};
            background-color: ${colors.dark.bg_primary_color};
            border-bottom: 1px solid ${colors.dark.border_discreet_color};
          }
        }

        h1,
        h3 {
          font-weight: 400;
          color: ${colors.light.text_secondary_color};
        }

        a,
        b {
          font-weight: 500;
          color: ${colors.light.text_primary_color};
        }

        @media (prefers-color-scheme: dark) {
          h1,
          h3 {
            color: ${colors.dark.text_secondary_color};
          }

          a,
          b {
            color: ${colors.dark.text_primary_color};
          }
        }

        .content {
          width: 100%;
          opacity: 1;
          transition: opacity 0.25s;
        }

        .wrapper {
          display: grid;
          grid-template-columns: 100%;
        }

        .scale {
          transform: scale(1);
          transition: transform 0.25s;
        }

        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 50px;
          background-image: url('avatar.jpg');
          background-size: cover;
          border: 2px solid ${colors.light.border_highlight_color};
          background-color: ${colors.light.border_discreet_color};
        }

        @media (prefers-color-scheme: dark) {
          .avatar {
            border: 2px solid ${colors.dark.border_highlight_color};
            background-color: ${colors.dark.border_discreet_color};
          }
        }

        .social-icons {
          padding-top: 10px;
        }

        @media (min-width: ${sizes.container}) {
          .content {
            position: fixed;
          }

          .wrapper {
            grid-template-columns: 50% 50%;
          }

          .content.hide {
            opacity: 0;
          }

          .scale.hide {
            transform: scale(0.95);
          }
        }

        .caret {
          display: none;
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 10px;
          border-top-color: ${colors.light.text_secondary_color};
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid ${colors.light.text_secondary_color};
          cursor: pointer;
          opacity: 1;
          transition: opacity 0.25s;
        }

        @media (prefers-color-scheme: dark) {
          .caret {
            border-top-color: ${colors.dark.text_secondary_color};
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid ${colors.dark.text_secondary_color};
          }
        }

        @media (min-width: ${sizes.container}) {
          .caret {
            display: block;
          }
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

export default About;
