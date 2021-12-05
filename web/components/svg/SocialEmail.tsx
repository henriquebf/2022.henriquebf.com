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
        <circle cx="50" cy="50" r="50" mask="url(#emailMask)"></circle>
        <mask id="emailMask">
          <rect x="0" y="0" width="100" height="100" fill="white" />
          <g transform="translate(10, 10) scale(2.5 2.5)">
            <path
              stroke="black"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 9a2 2 0 012-2h22a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              fill="white"
            />
            <path
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 9l11.862 8.212a2 2 0 002.276 0L29 9"
            />
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
