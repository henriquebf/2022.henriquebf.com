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
  position: string;
  description: string;
  highlights?: string[];
  links?: Link[];
  bullets: string[];
};

type Props = {
  item: TimelineItem;
};

const TimelineItem: NextPage<Props> = ({ item }) => {
  return (
    <div className="timeline-item">
      {item.time} ({item.duration})<br />
      {item.title}
      <br />
      {item.position}
      <br />
      {item.description}
      <br />
      {item.highlights && (
        <ul>
          {item.highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {item.links && (
        <ul>
          {item.links.map((item, i) => (
            <li key={i}>
              {item.text} {item.url}
            </li>
          ))}
        </ul>
      )}
      <ul>
        {item.bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <style jsx>{`
        .timeline-item {
        }

        @media (prefers-color-scheme: dark) {
          .timeline-item {
          }
        }
      `}</style>
    </div>
  );
};

export default TimelineItem;
