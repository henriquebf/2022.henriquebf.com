import type { NextPage } from 'next';
import React from 'react';
import sizes from '@/config/sizes.json';

type Props = {
  children: React.ReactNode;
};

const Container: NextPage<Props> = ({ children }) => {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          margin: 0 20px;
        }

        @media (min-width: ${sizes.container}) {
          .container {
            width: ${sizes.container};
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Container;
