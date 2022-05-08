import type { NextPage } from 'next';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import { classNames } from '@/helpers/utilsHelper';
import { AvailabilityMonth } from '@/models/Availability';

type Props = {
  name: string;
  year: number;
  availableHours: number;
};

const Month: NextPage<Props> = ({ name, year, availableHours }) => {
  return (
    <div className="month">
      <div className="calendar">
        {name} {year}
      </div>

      {availableHours > 0 && (
        <div
          className={classNames([
            'info',
            'hours',
            availableHours < 64 ? 'warning' : undefined,
          ])}
        >
          {`${availableHours}h`}
        </div>
      )}

      {availableHours === 0 && (
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
