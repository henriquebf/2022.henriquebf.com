import type { NextPage } from 'next';
import { useState } from 'react';
import zIndexes from '@/config/zIndexes.json';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import Container from '@/components/layout/Container';
import SocialIcons from '@/components/shared/SocialIcons';
import IconCopyClipboard from '@/components/svg/IconCopyClipboard';
import { classNames } from '@/helpers/classnameHelper';

const Footer: NextPage = () => {
  const emailAddress = 'contact@henriquebf.com';
  const [hasCopied, setCopied] = useState(false);
  const [isFading, setFading] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    if (hasCopied) return;
    // show fading "copied" message
    setCopied(true);
    setTimeout(() => {
      setFading(true);
    }, 1000);
    // reset
    setTimeout(() => {
      setCopied(false);
      setFading(false);
    }, 2000);
  };

  return (
    <section id="footer">
      <Container>
        <div className="wrapper">
          <div className="email">
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            <div className="icon" onClick={copyToClipboard}>
              <IconCopyClipboard size="20px" />
            </div>
            {hasCopied && (
              <span
                className={classNames(['copied', isFading ? 'fading' : ''])}
              >
                saved in clipboard
              </span>
            )}
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
            height: 30px;
          }

          .icon {
            display: inline-block;
            cursor: pointer;
            width: 20px;
            height: 20px;
            margin-top: -4px;
            margin-left: 10px;
            vertical-align: middle;
          }

          .copied {
            margin-left: 10px;
            color: ${colors.light.text_secondary_color};
            opacity: 1;
            transition: opacity 1s;
          }

          .fading {
            opacity: 0;
          }

          @media (prefers-color-scheme: dark) {
            .copied {
              color: ${colors.dark.text_secondary_color};
            }
          }
        }
      `}</style>
    </section>
  );
};

export default Footer;
