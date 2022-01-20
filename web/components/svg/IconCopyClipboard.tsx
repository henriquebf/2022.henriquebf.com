import type { NextPage } from 'next';
import React from 'react';
import colors from '@/config/colors.json';

type Props = {
  size: string;
};

const Svg: NextPage<Props> = ({ size }) => {
  return (
    <>
      <svg
        id="icon-copy-clipboard"
        x="0"
        y="0"
        width={size}
        height={size}
        viewBox="0, 0, 24, 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M8 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H16C17.1046 21 18 20.1046 18 19V18M8 5C8 6.10457 8.89543 7 10 7H12C13.1046 7 14 6.10457 14 5M8 5C8 3.89543 8.89543 3 10 3H12C13.1046 3 14 3.89543 14 5M14 5H16C17.1046 5 18 5.89543 18 7V10M20 14H10M10 14L13 11M10 14L13 17"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <style jsx>{`
        #icon-copy-clipboard {
          stroke: ${colors.light.text_primary_color};
        }

        #icon-copy-clipboard:hover {
          stroke: ${colors.light.text_active_color};
        }

        @media (prefers-color-scheme: dark) {
          #icon-copy-clipboard {
            stroke: ${colors.dark.text_primary_color};
          }

          #icon-copy-clipboard:hover {
            stroke: ${colors.dark.text_active_color};
          }
        }
      `}</style>
    </>
  );
};

export default Svg;
