import type { NextPage } from 'next';
import Image from 'next/image';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import { classNames } from '@/helpers/utilsHelper';

type Link = {
  text: string;
  url: string;
};

type Item = {
  time: string;
  duration: string;
  title: string;
  location: string;
  position: string;
  description: string[];
  highlights?: string[];
  bullets: string[];
  thumb?: string;
  link?: Link;
};

type Props = {
  direction: 'left' | 'right';
  item: Item;
};

const ExperienceItem: NextPage<Props> = ({ direction, item }) => {
  return (
    <div className="experience-item">
      {item.thumb && (
        <div className={classNames(['thumb', direction])}>
          <Image
            src={`/${item.thumb}`}
            alt={item.title}
            width={540}
            height={250}
          />
        </div>
      )}
      <div className={classNames(['title', direction])}>
        <h3>{item.title}</h3>
      </div>
      <div className={classNames(['position', direction])}>{item.position}</div>
      <div className={classNames(['time', direction])}>
        {item.time} ({item.duration})
      </div>
      {item.description.map((paragraph, i) => (
        <div key={i} className={classNames(['description', direction])}>
          {paragraph}
        </div>
      ))}

      {item.link && (
        <div className={classNames(['link', direction])}>
          <a href={item.link.url} rel="noreferrer" target="_blank">
            {item.link.text}
          </a>
        </div>
      )}
      <ul className={classNames(['bullets', direction])}>
        {item.bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className={classNames(['line', direction])}></div>
      <style jsx>{`
        .thumb {
          display: none;
          width: 540px;
          height: 250px;
          border-radius: 15px;
          overflow: hidden;
          background-color: ${colors.light.border_discreet_color};
          border: 2px solid ${colors.light.border_highlight_color};
        }

        .description {
          color: ${colors.light.text_secondary_color};
        }

        @media (min-width: ${sizes.container}) {
          .thumb {
            display: block;
          }

          .line {
            border-bottom: 1px solid ${colors.light.border_highlight_color};
          }

          .left {
            padding-right: 60px;
          }

          .right {
            padding-left: 60px;
            margin-left: -1px; /* fix: remove 1px gab to the vertical line */
          }

          .thumb,
          .bullets {
            padding: 0;
          }

          .thumb.left,
          .bullets.left {
            margin-right: 60px;
          }

          .thumb.right,
          .bullets.right {
            margin-left: 60px;
          }
        }

        h3 {
          margin-bottom: 0;
        }

        @media (prefers-color-scheme: dark) {
          .thumb {
            background-color: ${colors.dark.border_discreet_color};
            border: 2px solid ${colors.dark.border_highlight_color};
          }

          .description {
            color: ${colors.dark.text_secondary_color};
          }

          @media (min-width: ${sizes.container}) {
            .line {
              border-bottom: 1px solid ${colors.dark.border_highlight_color};
            }
          }
        }

        .description {
          padding-top: 1em;
        }

        .link {
          padding-top: 1em;
        }

        .bullets {
          display: none;
        }

        @media (min-width: ${sizes.container}) {
          .bullets {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 0;
            padding: 0;
            padding-top: 1em;
            height: 32px;
          }

          .bullets.right {
            flex-direction: row-reverse;
          }

          .bullets > li {
            list-style-type: none;
            padding: 0 10px;
            line-height: 30px;
            height: 33px;
            border-radius: 15px;
            text-transform: uppercase;
            color: ${colors.light.border_highlight_color};
            border: 2px solid ${colors.light.border_highlight_color};
            background-color: ${colors.light.bg_secondary_color};
          }
        }

        @media (prefers-color-scheme: dark) {
          .bullets > li {
            color: ${colors.dark.border_highlight_color};
            border: 2px solid ${colors.dark.border_highlight_color};
            background-color: ${colors.dark.bg_secondary_color};
          }
        }
      `}</style>
    </div>
  );
};

export default ExperienceItem;
