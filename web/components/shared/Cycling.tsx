import type { NextPage } from 'next';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import { getSchedule } from '@/helpers/cyclingHelper';
import { CyclingGoal } from '@/types/CyclingTypes';

type Props = {
  cyclingGoal: CyclingGoal;
};

const Cycling: NextPage<Props> = ({ cyclingGoal }) => {
  const { total, complete } = cyclingGoal;
  const progress = Math.ceil(complete * 100) / total;
  const schedule = getSchedule(total, complete);
  const currentYear = new Date().getFullYear();

  return (
    <div className="project-item">
      <h4>Cycling Goal for {currentYear}</h4>
      <p>
        I have completed <b>{complete} km</b> of my <b>{total} km</b> yearly
        goal. This represents a progress of <b>{progress}%</b> which is{' '}
        <b>{Math.abs(schedule)} km</b> {schedule > 0 ? 'ahead of' : 'behing'}{' '}
        schedule.
      </p>
      <div className="progress-bar"></div>
      <style jsx>{`
        p {
          color: ${colors.light.text_secondary_color};
        }

        b {
          color: ${colors.light.text_primary_color};
        }

        .progress-bar {
          width: 100%;
          height: 30px;
          line-height: 30px;
          border-radius: 15px;
          color: ${colors.light.border_highlight_color};
          border: 2px solid ${colors.light.border_highlight_color};
          background-color: ${colors.light.border_discreet_color};
        }

        @media (min-width: ${sizes.container}) {
        }

        @media (prefers-color-scheme: dark) {
          p {
            color: ${colors.dark.text_secondary_color};
          }

          b {
            color: ${colors.dark.text_primary_color};
          }

          .progress-bar {
            color: ${colors.dark.border_highlight_color};
            border: 2px solid ${colors.dark.border_highlight_color};
            background-color: ${colors.dark.border_discreet_color};
          }
        }
      `}</style>
    </div>
  );
};

export default Cycling;
