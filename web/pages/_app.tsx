import type { AppProps } from 'next/app';
import colors from '@/config/colors.json';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="app">
      <Component {...pageProps} />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Share+Tech+Mono');

        html,
        body {
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          letter-spacing: 0.001em;
        }

        html {
          box-sizing: border-box;
          font-family: 'Share Tech Mono', Helvetica;
          font-size: 16px;
          font-weight: normal;
          line-height: 1.5;
          color: ${colors.light.base_text_primary_color};
          background-color: ${colors.light.base_bg_primary_color};
        }

        @media (prefers-color-scheme: dark) {
          html {
            color: ${colors.dark.base_text_primary_color};
            background-color: ${colors.dark.base_bg_primary_color};
          }
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }

        #app {
          height: 100%;
        }
      `}</style>
    </div>
  );
}

export default MyApp;
