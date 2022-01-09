import type { NextPage } from 'next';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import { getHours } from '@/helpers/calendarHelper';
import { classNames } from '@/helpers/classnameHelper';

type Props = {
  name: string;
  year: number;
  settings?: string;
};

const Month: NextPage<Props> = ({ name, year, settings }) => {
  const hours = getHours(name, year, settings);

  return (
    <div className="month">
      <div className="calendar">
        {name} {year}
      </div>
      {hours >= 64 && <div className="hours">{hours}h</div>}
      {hours > 0 && hours < 64 && (
        <div className={classNames(['hours', 'warning'])}>{hours}h</div>
      )}
      {hours === 0 && <div className="unavailable">unavailable</div>}

      <style jsx>{`
        .month {
          width: 100%;
          height: 80px;
          padding: 20px;
          border-radius: 15px;
          padding: 10px;
          color: ${colors.light.border_highlight_color};
          border: 2px solid ${colors.light.border_highlight_color};
          background-color: ${colors.light.border_discreet_color};
        }

        .hours {
          text-align: center;
        }

        .unavailable {
          text-align: center;
          color: ${colors.light.text_secondary_color};
        }

        .warning {
          color: orange;
        }

        @media (prefers-color-scheme: dark) {
          .month {
            border: 2px solid ${colors.dark.border_highlight_color};
            background-color: ${colors.dark.border_discreet_color};
          }

          .unavailable {
            color: ${colors.dark.text_secondary_color};
          }
        }

        @media (min-width: ${sizes.container}) {
          .month {
            height: 150px;
          }

          .hours {
            font-size: 2.5em;
          }

          .unavailable {
            font-size: 1.5em;
          }
        }
      `}</style>
    </div>
  );
};

export default Month;
