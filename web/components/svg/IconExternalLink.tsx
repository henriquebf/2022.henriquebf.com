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
        id="icon-external-link"
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
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
      <style jsx>{`
        #icon-external-link {
          stroke: ${colors.light.text_primary_color};
        }

        #icon-external-link:hover {
          stroke: ${colors.light.text_active_color};
        }

        @media (prefers-color-scheme: dark) {
          #icon-external-link {
            stroke: ${colors.dark.text_primary_color};
          }

          #icon-external-link:hover {
            stroke: ${colors.dark.text_active_color};
          }
        }
      `}</style>
    </>
  );
};

export default Svg;
