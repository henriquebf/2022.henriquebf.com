import type { NextPage } from 'next';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import { getHours } from '@/helpers/calendarHelper';
import { classNames } from '@/helpers/utilsHelper';
import { AvailabilityRecord } from '@/models/Availability';

type Props = {
  name: string;
  year: number;
  availabilities: AvailabilityRecord[];
};

const Month: NextPage<Props> = ({ name, year, availabilities }) => {
  const hours = getHours(name, year, availabilities);

  return (
    <div className="month">
      <div className="calendar">
        {name} {year}
      </div>

      {hours > 0 && (
        <div
          className={classNames([
            'info',
            'hours',
            hours < 64 ? 'warning' : undefined,
          ])}
        >
          {`${hours}h`}
        </div>
      )}

      {hours === 0 && (
        <div className={classNames(['info', 'unavailable'])}>unavailable</div>
      )}

      <style jsx>{`
        .month {
          position: relative;
          width: 165px;
          height: 140px;
          border-radius: 15px;
          padding: 10px;
          margin-bottom: 20px;
          color: ${colors.light.border_highlight_color};
          border: 2px solid ${colors.light.border_highlight_color};
          background-color: ${colors.light.border_discreet_color};
        }

        .hours {
          font-size: 2em;
        }

        .unavailable {
          font-size: 1.2em;
        }

        .calendar {
          position: absolute;
          top: 0px;
          left: 0px;
          padding: 10px;
        }

        .info {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
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
            width: 183px;
            height: 150px;
            margin-bottom: 0;
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
