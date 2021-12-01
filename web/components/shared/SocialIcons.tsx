import type { NextPage } from 'next';
import SocialGithub from '@/components/svg/SocialGithub';
import SocialInstagram from '@/components/svg/SocialInstagram';
import SocialLinkedin from '@/components/svg/SocialLinkedin';
import SocialStrava from '@/components/svg/SocialStrava';
import SocialEmail from '@/components/svg/SocialEmail';

const SocialIcons: NextPage = () => {
  const size = '30px';
  return (
    <div className="social-icons">
      <div>
        <a
          href="https://github.com/henriquebf/"
          rel="noreferrer"
          target="_blank"
        >
          <SocialGithub size={size} />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/henrique-ferreira-21985b1b/"
          rel="noreferrer"
          target="_blank"
        >
          <SocialLinkedin size={size} />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/henriquebf/"
          rel="noreferrer"
          target="_blank"
        >
          <SocialInstagram size={size} />
        </a>
      </div>
      <div>
        <a
          href="https://www.strava.com/athletes/2498325"
          rel="noreferrer"
          target="_blank"
        >
          <SocialStrava size={size} />
        </a>
      </div>
      <div>
        <a href="mailto:henriquebf@gmail.com" rel="noreferrer" target="_blank">
          <SocialEmail size={size} />
        </a>
      </div>
      <style jsx>{`
        .social-icons {
          line-height: ${size};
          height: ${size};
          overflow: hidden;
        }

        .social-icons > div {
          float: left;
          margin: 0 10px 0 0;
        }

        .social-icons > div:last-child {
          float: left;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default SocialIcons;
