import type { NextPage } from 'next';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import { classNames } from '@/helpers/classnameHelper';

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
  description: string;
  highlights?: string[];
  bullets: string[];
  thumb?: string;
  link?: Link;
};

type Props = {
  direction: 'left' | 'right';
  item: Item;
};

const TimelineItem: NextPage<Props> = ({ direction, item }) => {
  return (
    <div className="timeline-item">
      {item.thumb && <div className={classNames(['thumb', direction])}></div>}
      <div className={classNames(['title', direction])}>
        <h3>{item.title}</h3>
      </div>
      <div className={classNames(['position', direction])}>{item.position}</div>
      <div className={classNames(['time', direction])}>
        {item.time} ({item.duration})
      </div>
      <div className={classNames(['description', direction])}>
        {item.description}
      </div>
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
          height: 350px;
          border-radius: 15px;
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
            border-bottom: 2px solid ${colors.light.border_highlight_color};
          }

          .left {
            padding-right: 60px;
          }

          .right {
            padding-left: 60px;
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
          }

          .description {
            color: ${colors.dark.text_secondary_color};
          }

          @media (min-width: ${sizes.container}) {
            .line {
              border-bottom: 2px solid ${colors.dark.border_highlight_color};
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
          margin: 0;
          padding: 0;
          padding-top: 1em;
          height: 32px;
        }

        .bullets > li {
          list-style-type: none;
          float: left;
          padding: 0 10px;
          margin-right: 10px;
          line-height: 30px;
          border-radius: 15px;
          color: ${colors.light.border_highlight_color};
          border: 2px solid ${colors.light.border_highlight_color};
          background-color: ${colors.light.bg_secondary_color};
        }

        @media (min-width: ${sizes.container}) {
          .bullets.right > li {
            float: right;
            margin-right: 0;
            margin-left: 10px;
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

export default TimelineItem;
