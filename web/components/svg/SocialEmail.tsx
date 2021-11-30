import type { NextPage } from 'next';
import React from 'react';

type Props = {
  color: string;
  size: number;
};

const Svg: NextPage<Props> = ({ color, size }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="${size}" height="${size}" viewBox="0, 0, 100, 100"><circle cx="50" cy="50" r="50" fill="${color}" mask="url(#emailMask)"></circle><mask id="emailMask"><rect x="0" y="0" width="100" height="100" fill="white" /><g id="Layer_1" transform="translate(10, 10) scale(2.5 2.5)"><path stroke="black" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h22a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" fill="white" /><path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l11.862 8.212a2 2 0 002.276 0L29 9" /></g></mask></svg>`,
      }}
    />
  );
};

export default Svg;
