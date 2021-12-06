import type { NextPage } from 'next';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import IconExternalLink from '@/components/svg/IconExternalLink';
import IconGithub from '@/components/svg/IconGithub';

type Item = {
  title: string;
  description: string;
  github?: string;
  link?: string;
};

type Props = {
  item: Item;
};

const ProjectItem: NextPage<Props> = ({ item }) => {
  return (
    <div className="project-item">
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <div className="icons">
        <div>
          <IconGithub size="20px" />
        </div>
        <div>
          <IconExternalLink size="20px" />
        </div>
      </div>
      <style jsx>{`
        p {
          color: ${colors.light.text_secondary_color};
        }

        .icons {
          display: flex;
          gap: 10px;
        }

        @media (min-width: ${sizes.container}) {
        }

        @media (prefers-color-scheme: dark) {
          p {
            color: ${colors.dark.text_secondary_color};
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectItem;
