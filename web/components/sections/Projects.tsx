import type { NextPage } from 'next';
import zIndexes from '@/config/zIndexes.json';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import Container from '@/components/layout/Container';
import ProjectItem from '@/components/shared/ProjectItem';
import CyclingGoals from '@/components/shared/CyclingGoals';

const projects = [
  {
    title: `Troffee Cycling Club`,
    description: `Website including my personal reports about most of the best road cycling experiences around the world.`,
    github: `https://github.com/henriquebf/troffee`,
    link: `https://trofee.cc`,
  },
  {
    title: `PDF Scan Match`,
    description: `Simple Mac OS application to organise scanned PDF documents in order to match the front and back of each page. `,
    github: `https://github.com/henriquebf/pdf-scan-match`,
    link: `https://pdf-scan-match.henriquebf.com`,
  },
  {
    title: `Gear Alert`,
    description: `Experimental web application that connects to strava accounts and keep maintenance track of your cycling gear.`,
    github: `https://github.com/henriquebf/gearalert.henriquebf.com`,
    link: `https://gearalert.henriquebf.com`,
  },
];

const Projects: NextPage = () => {
  return (
    <section id="projects">
      <Container>
        <div className="content">
          <h2>Personal Projects</h2>
          <div className="wrapper">
            <div className="projects">
              {projects.map((item, i) => (
                <ProjectItem key={i} item={item} />
              ))}
            </div>
            <div className="goals">
              <CyclingGoals />
            </div>
          </div>
        </div>
      </Container>
      <style jsx>{`
        #projects {
          position: relative;
          z-index: ${zIndexes.section};
          background-color: ${colors.light.bg_secondary_color};
        }

        .content {
          padding: 20px 0;
          border-bottom: 1px solid ${colors.light.border_discreet_color};
        }

        .wrapper,
        .projects {
          display: grid;
          grid-template-columns: 100%;
        }

        @media (prefers-color-scheme: dark) {
          #projects {
            background-color: ${colors.dark.bg_secondary_color};
          }

          .content {
            border-bottom: 1px solid ${colors.dark.border_discreet_color};
          }
        }

        @media (min-width: ${sizes.container}) {
          .wrapper {
            grid-template-columns: 66% 33%;
          }

          .projects {
            grid-template-columns: 50% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
