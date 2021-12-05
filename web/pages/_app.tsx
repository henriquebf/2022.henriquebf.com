import type { AppProps } from 'next/app';
import colors from '@/config/colors.json';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="app">
      <Component {...pageProps} />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:100,200,300,400,500,600,700,800|Saira:100,200,300,400,500,600,700,800');

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
          font-family: 'Saira', Helvetica;
          font-size: 16px;
          font-weight: normal;
          line-height: 1.5;
          color: ${colors.light.text_primary_color};
          background-color: ${colors.light.bg_primary_color};
        }

        @media (prefers-color-scheme: dark) {
          html {
            color: ${colors.dark.text_primary_color};
            background-color: ${colors.dark.bg_primary_color};
          }
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        h1,
        h2,
        h3 {
          font-weight: 500;
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
