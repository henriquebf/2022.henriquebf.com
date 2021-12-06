import type { NextPage } from 'next';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';

const ProjectItem: NextPage = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="project-item">
      <h4>Cycling Goals for {currentYear}</h4>
      <p>
        I have completed <b>8562 km</b> of my 10000 km yearly goal. This
        represents a progress of <b>93%</b> and I am <b>253 km</b> behind the
        schedule.
      </p>
      <style jsx>{`
        p {
          color: ${colors.light.text_secondary_color};
        }

        b {
          color: ${colors.light.text_primary_color};
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
        }
      `}</style>
    </div>
  );
};

export default ProjectItem;
