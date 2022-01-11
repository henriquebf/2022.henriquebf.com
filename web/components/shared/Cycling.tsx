import type { NextPage } from 'next';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import { getSchedule } from '@/helpers/cyclingHelper';
import { GoalRecord } from '@/models/Goal';

type Props = {
  goal: GoalRecord;
};

const Cycling: NextPage<Props> = ({ goal }) => {
  const { total, distance } = goal;
  const progress = (Math.ceil(distance * 100) / total).toFixed(1);
  const schedule = getSchedule(total, distance);
  const currentYear = new Date().getFullYear();

  return (
    <div className="project-item">
      <h4>Cycling Goal for {currentYear}</h4>
      <p>
        I have completed <b>{Math.ceil(distance / 1000)} km</b> of my{' '}
        <b>{Math.ceil(total / 1000)} km</b> yearly goal. This is a progress of{' '}
        <b>{progress}%</b> or <b>{Math.abs(Math.ceil(schedule / 1000))} km</b>{' '}
        {schedule > 0 ? 'ahead of' : 'behing'} schedule.
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
          background-image: linear-gradient(
            to right,
            ${colors.light.progress_complete},
            ${colors.light.progress_complete} ${progress}%,
            ${colors.light.progress_remaining} ${progress + 1}%,
            ${colors.light.progress_remaining}
          );
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
            background-image: linear-gradient(
              to right,
              ${colors.light.progress_complete},
              ${colors.light.progress_complete} ${progress}%,
              ${colors.light.progress_remaining} ${progress + 1}%,
              ${colors.light.progress_remaining}
            );
          }
        }
      `}</style>
    </div>
  );
};

export default Cycling;
