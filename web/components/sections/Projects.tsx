import type { NextPage } from 'next';
import zIndexes from '@/config/zIndexes.json';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import Container from '@/components/layout/Container';
import ProjectItem from '@/components/shared/ProjectItem';
import CyclingGoals from '@/components/shared/CyclingGoals';

const projects = [
  {
    title: `Troffee`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis, urna at facilisis commodo, nisi orci scelerisque nisi, at lacinia risus nisi at arcu.`,
    link: `https://trofee.cc`,
  },
  {
    title: `PDF Wrapper`,
    description: `Nam semper semper dolor, a pharetra odio pulvinar sed. Integer porttitor nisi iaculis elit mollis feugiat. Donec et ullamcorper felis.`,
    github: `https://github.com`,
  },
  {
    title: `Gear Alert`,
    description: `Suspendisse nibh ipsum, venenatis ac sapien vitae, iaculis posuere neque. Donec lectus ante, tempus ac sagittis eget, tincidunt non justo.`,
    github: `https://github.com`,
    link: `https://gearalert.henriquebf.com`,
  },
];

const Projects: NextPage = () => {
  return (
    <section id="active">
      <Container>
        <div className="content">
          <h2>Active Projects</h2>
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
        #active {
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
          #active {
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
