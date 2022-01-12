import type { NextPage } from 'next';
import zIndexes from '@/config/zIndexes.json';
import colors from '@/config/colors.json';
import Container from '@/components/layout/Container';
import Month from '@/components/shared/Month';
import { getMonth } from '@/helpers/calendarHelper';
import { AvailabilityRecord } from '@/models/Availability';

type Props = {
  availabilities: AvailabilityRecord[];
};

const Availability: NextPage<Props> = ({ availabilities }) => {
  const months = [0, 1, 2, 3, 4, 5].map((n) => getMonth(n));

  return (
    <section id="availability">
      <Container>
        <div className="content">
          <h2>Availability</h2>
          <div className="calendars">
            {months.map(({ name, year }) => (
              <Month
                key={name}
                availabilities={availabilities}
                name={name}
                year={year}
              />
            ))}
          </div>
          <div className="note">
            <p>
              This information is estimated and can be flexible. Please get in
              touch for specific dates and hourly rates.
            </p>
          </div>
        </div>
      </Container>
      <style jsx>{`
        #availability {
          position: relative;
          z-index: ${zIndexes.section};
          background-color: ${colors.light.bg_secondary_color};
          border-bottom: 1px solid ${colors.light.border_discreet_color};
        }

        .content {
          padding: 20px 0;
        }

        .calendars {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .note {
          color: ${colors.light.text_secondary_color};
        }

        @media (prefers-color-scheme: dark) {
          #availability {
            background-color: ${colors.dark.bg_secondary_color};
            border-bottom: 1px solid ${colors.dark.border_discreet_color};
          }

          .note {
            color: ${colors.dark.text_secondary_color};
          }
        }
      `}</style>
    </section>
  );
};

export default Availability;
