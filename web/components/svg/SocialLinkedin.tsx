import type { NextPage } from 'next';
import React from 'react';
import colors from '@/config/colors.json';

type Props = {
  size: string;
};

const Svg: NextPage<Props> = ({ size }) => {
  return (
    <>
      <svg x="0" y="0" width={size} height={size} viewBox="0, 0, 100, 100">
        <circle cx="50" cy="50" r="50" mask="url(#LinkedinMask)"></circle>
        <mask id="LinkedinMask">
          <rect x="0" y="0" width="100" height="100" fill="white" />
          <g id="Layer_1" transform="translate(10, 10) scale(0.8 0.8)">
            <path
              d="M15.892,83 L30.895,83 L30.895,37.86 L15.892,37.86 z M23.493,16.11 C18.359,16.11 15,19.48 15,23.9 C15,28.24 18.262,31.71 23.294,31.71 L23.395,31.71 C28.628,31.71 31.883,28.24 31.883,23.9 C31.784,19.48 28.628,16.11 23.493,16.11 z M85,57.12 L85,83 L69.997,83 L69.997,58.85 C69.997,52.78 67.826,48.65 62.396,48.65 C58.25,48.65 55.783,51.44 54.697,54.13 C54.302,55.1 54.2,56.44 54.2,57.79 L54.2,83 L39.194,83 C39.194,83 39.396,42.1 39.194,37.86 L54.2,37.86 L54.2,44.26 C54.17,44.31 54.131,44.36 54.102,44.41 L54.2,44.41 L54.2,44.26 C56.194,41.19 59.754,36.8 67.724,36.8 C77.599,36.8 85,43.26 85,57.12"
              fill="black"
            ></path>
          </g>
        </mask>
      </svg>
      <style jsx>{`
        circle {
          fill: ${colors.light.text_secondary_color};
        }

        circle:hover {
          fill: ${colors.light.text_active_color};
        }

        @media (prefers-color-scheme: dark) {
          circle {
            fill: ${colors.dark.text_secondary_color};
          }

          circle:hover {
            fill: ${colors.dark.text_active_color};
          }
        }
      `}</style>
    </>
  );
};

export default Svg;
