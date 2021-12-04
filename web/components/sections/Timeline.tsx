import type { NextPage } from 'next';
import zIndexes from '@/config/zIndexes.json';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import Container from '@/components/layout/Container';
import TimelineItem from '@/components/shared/TimelineItem';

const timelineItems = [
  {
    time: `2020 - 2021`,
    duration: `2 years`,
    title: `Tempo GmbH`,
    location: `Berlin, Germany`,
    position: `Co-founder & CTO`,
    description: `Development of an Email client for OSX and mobile using (mostly) Typescript. Improving the  application from MVP to production state and leading a small team of other 3 senior developers.`,
    bullets: ['TYPESCRIPT', 'REACT', 'ELECTRON', 'REACT NATIVE'],
    thumb: 'tempo',
    link: {
      text: `Download Tempo`,
      url: `https://yourtempo.co`,
    },
  },
  {
    time: `2015 - 2019`,
    duration: `5 years`,
    title: `Pillar GmbH (Berlin)`,
    location: `Berlin, Germany`,
    position: `Co-founder & Fullstack Developer`,
    description: `Co-running a business to implement MVPs, websites and small e-commerces for external clients. Our highest focus was providing the best user experience.`,
    highlights: [
      `Tempo (MVP/desktop application)`,
      `Diggsweep (MVP/web application)`,
      `Hyper Island (web survey)`,
      `Hakro (e-commerce)`,
      `Google Impact (kiosk)`,
      `Zalando (campaign website)`,
      `The Rivalry (website)`,
      `XU Berlin (web survey)`,
      `Fluxdrive (bespoke CMS)`,
    ],
    bullets: ['ES6', 'REACT', 'NODE', 'MONGODB', 'DOCKER'],
    thumb: 'pillar',
    link: {
      text: `See work`,
      url: `https://pillarstudio.com`,
    },
  },
  {
    time: `2014`,
    duration: `5 months`,
    title: `Freelancer`,
    location: `Berlin, Germany`,
    position: `Fullstack Developer`,
    description: `After my previous employer's business shut down, I’ve done some solo work as a freelancer for clients in Brazil and Germany.`,
    highlights: [
      `Apice (MVP/educational game)`,
      `Sabin (website frontend)`,
      `Latin Travel (website)`,
    ],
    bullets: [`ANGULAR`, `RAILS`, `SOCKET.IO`],
    thumb: 'sabin',
  },
  {
    time: `2013 - 2014`,
    duration: `8 months`,
    title: `Bacon de Czar GmbH`,
    location: `Berlin, Germany`,
    position: `Backend Developer`,
    description: `Worked as backend developer and actively assisting the frontend functionalities for a small creative studio based in Berlin, building apps, campaigns and websites.`,
    highlights: [
      `Joha (website)`,
      `Nokia (campaign website)`,
      `ASE (web application)`,
      `Danica Pension (web application)`,
      `Chop Hub (MVP/web application)`,
    ],
    bullets: [`ANGULAR`, `NODE`, `COFFEESCRIPT`, `RAILS`, `PHP`],
    thumb: 'bdc',
  },
  {
    time: `2011 - 2013`,
    duration: `2 years`,
    title: `Made Tech Limited`,
    location: `London, United Kingdom`,
    position: `Fullstack Developer`,
    description: `Being the first hire of the company, I have pushed my skills to new standards, taking a lot of ownership and doing front- and backend for important projects.`,
    highlights: [
      `On-Running (e-commerce)`,
      `Surface view (e-commerce)`,
      `Vertu (website frontend)`,
      `VGL (website frontend)`,
    ],
    bullets: [`RAILS`, `SPREE`, `ANGULAR`, `JQUERY`, `PHP`],
    thumb: 'made',
  },
  {
    time: `2011`,
    duration: `5 months`,
    title: `Freelancer`,
    location: `London, United Kingdom`,
    position: `Fullstack Developer`,
    description: `I have collaborated with a friend’s project by implementing his MVP, with the main benefit of buidling a showcase to potential new hires.`,
    highlights: [`Mineral trade (MVP/web app)`],
    bullets: [`PHP`, `ZEND`, `MYSQL`],
  },
  {
    time: `2002 - 2010`,
    duration: `9 years`,
    title: `Tasco Ltda.`,
    location: `Belo Horizonte, Brazil`,
    position: `Software Developer`,
    description: `Working on a small and young team, I made a big contribution for most company’s products, by building very professional web based user interfaces.`,
    highlights: [
      `Noklink suite (desktop app)`,
      `Tracking box (web application)`,
      `Entertainment-to-Go (kiosk)`,
    ],
    bullets: [`JAVASCRIPT`, `PHP`, `MYSQL`, `SQLITE`, `C++`],
    thumb: 'tasco',
  },
  {
    time: `2001 - 2002`,
    duration: `1 year`,
    title: `Versão Brasileira Ltda.`,
    location: `Belo Horizonte, Brazil`,
    position: `Intern`,
    description: `Hired as an intern, I was able to play my first role as a developer of a catalogue CD-ROM for my city, having a great support from the database provider.`,
    bullets: [`JAVASCRIPT`, `LIGHTBASE`],
    thumb: 'vb',
  },
  {
    time: `1999 - 2001`,
    duration: `1 year`,
    title: `Multiline Ltda.`,
    location: `Belo Horizonte, Brazil`,
    position: `Intern`,
    description: `In my first internship, I assisted other developers in some tasks, mainly related to Linux and network.`,
    bullets: [`LINUX`],
  },
];

const Timeline: NextPage = () => {
  return (
    <section id="timeline">
      <Container>
        <div className="content">
          <h2>Past Experience</h2>
          {timelineItems.map((item, i) => {
            if (i % 2 === 0) {
              return (
                <div key={i} className="wrapper">
                  <TimelineItem item={item} />
                  <div className="timeline-center" />
                  <div className="timeline-dummy" />
                </div>
              );
            } else {
              return (
                <div key={i} className="wrapper">
                  <div className="timeline-dummy" />
                  <div className="timeline-center" />
                  <TimelineItem item={item} />
                </div>
              );
            }
          })}
        </div>
      </Container>
      <style jsx>{`
        #timeline {
          position: relative;
          z-index: ${zIndexes.section};
          background-color: ${colors.light.base_bg_secondary_color};
          border-bottom: 1px solid ${colors.light.base_border_color};
        }

        .content {
          padding: 20px 0;
        }

        .wrapper {
          display: grid;
          grid-template-columns: 100%;
        }

        .timeline-center {
          display: none;
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .timeline-center:after {
          content: '';
          position: absolute;
          width: 6px;
          background-color: ${colors.light.base_border_color};
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -3px;
        }

        .timeline-dummy {
          display: none;
        }

        @media (prefers-color-scheme: dark) {
          #timeline {
            background-color: ${colors.dark.base_bg_secondary_color};
            border-bottom: 1px solid ${colors.dark.base_border_color};
          }

          .timeline-center:after {
            background-color: ${colors.dark.base_border_color};
          }
        }

        @media (min-width: ${sizes.container}) {
          .wrapper {
            grid-template-columns: 45% 10% 45%;
          }

          .timeline-center {
            display: block;
          }

          .timeline-dummy {
            display: block;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
