import type { NextPage } from 'next';
import React from 'react';
import colors from '@/config/colors.json';

const Svg: NextPage = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        stroke-Linecap="round"
        stroke-Linejoin="round"
        className="feather feather-external-link"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
      <style jsx>{`
        @media (prefers-color-scheme: dark) {
        }
      `}</style>
    </>
  );
};

export default Svg;
