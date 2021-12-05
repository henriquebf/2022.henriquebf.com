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
        <circle cx="50" cy="50" r="50" mask="url(#instagramMask)"></circle>
        <mask id="instagramMask">
          <rect x="0" y="0" width="100" height="100" fill="white" />
          <g transform="translate(10, 10) scale(0.8 0.8)">
            <path
              d="M76.925,85 L23.076,85 C18.617,85 15,81.38 15,76.92 L15,23.07 C15,18.61 18.617,15 23.076,15 L76.925,15 C81.385,15 85,18.61 85,23.07 L85,76.92 C85,81.38 81.385,85 76.925,85 M49.999,36.53 C42.565,36.53 36.538,42.56 36.538,49.99 C36.538,57.43 42.565,63.46 49.999,63.46 C57.434,63.46 63.462,57.43 63.462,49.99 C63.462,42.56 57.434,36.53 49.999,36.53 M76.925,25.76 C76.925,24.28 75.719,23.07 74.229,23.07 L66.155,23.07 C64.667,23.07 63.462,24.28 63.462,25.76 L63.462,33.84 C63.462,35.33 64.667,36.53 66.155,36.53 L74.229,36.53 C75.719,36.53 76.925,35.33 76.925,33.84 L76.925,25.76 z M76.925,44.61 L70.831,44.61 C71.274,46.33 71.537,48.13 71.537,49.99 C71.537,61.89 61.895,71.53 49.999,71.53 C38.105,71.53 28.462,61.89 28.462,49.99 C28.462,48.13 28.726,46.33 29.169,44.61 L23.076,44.61 L23.076,74.23 C23.076,75.71 24.281,76.92 25.77,76.92 L74.229,76.92 C75.719,76.92 76.925,75.71 76.925,74.23 L76.925,44.61"
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
