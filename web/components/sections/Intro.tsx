import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import colors from '@/config/colors.json';
import zIndexes from '@/config/zIndexes.json';
import { classnames } from '@/helpers/classnameHelper';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Container from '@/components/layout/Container';
import Logo from '@/components/svg/Logo';
import SocialGithub from '@/components/svg/SocialGithub';
import SocialInstagram from '@/components/svg/SocialInstagram';
import SocialLinkedin from '@/components/svg/SocialLinkedin';
import SocialStrava from '@/components/svg/SocialStrava';
import SocialEmail from '@/components/svg/SocialEmail';

const content = {
  title: '',
  description: '',
};

const Intro: NextPage = () => {
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
    <section id="introduction">
      <div className={classnames(['content', showIntro ? 'show' : 'hide'])}>
        <div className={classnames(['scale', showIntro ? 'show' : 'hide'])}>
          <Container>
            <Logo className="logo" color="#aaa" />
            <h1>
              Hi, I'm <b>Henrique Ferreira</b>
            </h1>
            <h3>
              A <b>Road Cycling</b> addicted and <b>Fullstack Developer</b> with
              large expertise using React based frameworks, building e-commerces
              and applications for Web, Desktop and Mobile from scratch to large
              scale production environments.
            </h3>
            <div>
              <div className="social">
                <SocialGithub size={40} color="#aaa" />
              </div>
              <div className="social">
                <SocialLinkedin size={40} color="#aaa" />
              </div>
              <div className="social">
                <SocialInstagram size={40} color="#aaa" />
              </div>
              <div className="social">
                <SocialStrava size={40} color="#aaa" />
              </div>
              <div className="social">
                <SocialEmail size={40} color="#aaa" />
              </div>
            </div>
          </Container>
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
          color: ${colors.light.base_text_primary_color};
          background-color: ${colors.light.base_bg_primary_color};
          border-bottom: 1px solid ${colors.light.base_border_color};
        }

        @media (prefers-color-scheme: dark) {
          #introduction {
            color: ${colors.dark.base_text_primary_color};
            background-color: ${colors.dark.base_bg_primary_color};
            border-bottom: 1px solid ${colors.dark.base_border_color};
          }
        }

        h1,
        h3 {
          color: ${colors.light.base_text_secondary_color};
        }

        a,
        b {
          color: ${colors.light.base_text_active_color};
        }

        @media (prefers-color-scheme: dark) {
          h1,
          h3 {
            color: ${colors.dark.base_text_secondary_color};
          }

          a,
          b {
            color: ${colors.dark.base_text_active_color};
          }
        }

        .content {
          position: absolute;
          top: 50%;
          width: 100%;
          height: 327px;
          transform: translateY(-50%);
          opacity: 1;
          transition: opacity 0.25s;
        }

        .scale {
          transform: scale(1);
          transition: transform 0.25s;
        }

        .social {
          float: left;
          margin: 0 10px 0 0;
          cursor: pointer;
        }

        @media (min-width: 1200px) {
          .content {
            position: fixed;
          }

          .content.hide {
            opacity: 0;
          }

          .scale.hide {
            transform: scale(0.95);
          }
        }

        .caret {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 10px;
          border-top-color: ${colors.light.base_text_secondary_color};
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid ${colors.light.base_text_secondary_color};
          cursor: pointer;
          opacity: 1;
          transition: opacity 0.25s;
        }

        @media (prefers-color-scheme: dark) {
          .caret {
            border-top-color: ${colors.dark.base_text_secondary_color};
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid ${colors.dark.base_text_secondary_color};
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

export default Intro;
