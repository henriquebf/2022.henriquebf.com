import type { NextPage } from 'next';
import colors from '@/config/colors.json';

type Link = {
  text: string;
  url: string;
};

type TimelineItem = {
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
  item: TimelineItem;
};

const TimelineItem: NextPage<Props> = ({ item }) => {
  return (
    <div className="timeline-item">
      {item.thumb && <div className="thumb"></div>}
      <div className="title">
        <h3>{item.title}</h3> {item.location}
      </div>
      <div className="time">
        {item.time} ({item.duration})
      </div>
      <div className="position">{item.position}</div>
      <div className="description">{item.description}</div>
      {item.link && (
        <div className="link">
          <a href={item.link.url} rel="noreferrer" target="_blank">
            {item.link.text}
          </a>
        </div>
      )}
      <ul className="bullets">
        {item.bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <style jsx>{`
        .thumb {
          width: 540px;
          height: 350px;
          border-radius: 15px;
          background-color: ${colors.light.base_border_color};
        }

        h3 {
          margin-bottom: 0;
        }

        @media (prefers-color-scheme: dark) {
          .thumb {
            background-color: ${colors.dark.base_border_color};
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
        }

        .bullets > li {
          list-style-type: none;
          float: left;
          padding: 0 10px;
          margin-right: 10px;
          line-height: 30px;
          border-radius: 15px;
          color: ${colors.light.base_bg_primary_color};
          border: 1px solid ${colors.light.base_text_secondary_color};
          background-color: ${colors.light.base_text_secondary_color};
        }

        @media (prefers-color-scheme: dark) {
          .bullets > li {
            color: ${colors.dark.base_bg_primary_color};
            border: 1px solid ${colors.dark.base_text_secondary_color};
            background-color: ${colors.dark.base_text_secondary_color};
          }
        }
      `}</style>
    </div>
  );
};

export default TimelineItem;
