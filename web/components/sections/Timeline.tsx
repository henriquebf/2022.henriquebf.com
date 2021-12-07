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
    bullets: ['Typescript', 'React', 'Electron', 'React Native'],
    thumb: 'tempo',
    link: {
      text: `Visit Tempo website`,
      url: `https://yourtempo.co`,
    },
  },
  {
    time: `2015 - 2019`,
    duration: `5 years`,
    title: `Pillar GmbH`,
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
    bullets: ['ES6+', 'React', 'Node', 'MongoDB', 'Docker'],
    thumb: 'pillar',
    link: {
      text: `Visit Pillar website`,
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
    bullets: [`Angular`, `Rails`, `Node`, `Socket.IO`],
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
    bullets: [`Angular`, `Node`, `CoffeeScript`, `Rails`, `PHP`],
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
    bullets: [`Rails`, `Spree`, `Angular`, `JQuery`, `PHP`, `HTML5`],
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
    bullets: [`PHP`, `Zend`, `MySQL`],
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
    bullets: [`Javascript`, `PHP`, `MySQL`, `SQLite`, `C++`],
  },
  {
    time: `2001 - 2002`,
    duration: `1 year`,
    title: `Versão Brasileira Ltda.`,
    location: `Belo Horizonte, Brazil`,
    position: `Intern`,
    description: `Hired as an intern, I was able to play my first role as a developer of a catalogue CD-ROM for my city, having a great support from the database provider.`,
    bullets: [`Javascript`, `Lightbase`],
  },
  {
    time: `1999 - 2001`,
    duration: `1 year`,
    title: `Multiline Ltda.`,
    location: `Belo Horizonte, Brazil`,
    position: `Intern`,
    description: `In my first internship, I assisted other developers in some tasks, mainly related to Linux and network.`,
    bullets: [`Linux`],
  },
];

const Timeline: NextPage = () => {
  return (
    <section id="timeline">
      <Container>
        <div className="content">
          <h2>Career Timeline</h2>
          <p>
            Having originally graduated as a{' '}
            <b>Control and Automation Engineer</b> in late 2003, I have always
            followed the path of Software Development since the early stages of
            my career. It has started in Brazil and grew internationally in the
            United Kingdom and Germany.
          </p>
          <p>
            At this current moment, I have planned a{' '}
            <b>parental leave until second quarter of 2022</b>. In case of any
            interest to discuss future collaboration, please feel free to reach
            me on{' '}
            <a href="mailto:contact@henriquebf.com">contact@henriquebf.com</a>{' '}
            or any other channel provided in this website.
          </p>
          <div className="timeline-top"></div>
          <div className="wrapper">
            <div className="timeline-dummy" />
            <div className="timeline-center first" />
            <div className="timeline-dummy" />
          </div>
          {timelineItems.map((item, i) => {
            if (i % 2 === 0) {
              return (
                <div key={i} className="wrapper">
                  <TimelineItem item={item} direction="left" />
                  <div className="timeline-center middle" />
                  <div className="timeline-dummy" />
                </div>
              );
            } else {
              return (
                <div key={i} className="wrapper">
                  <div className="timeline-dummy" />
                  <div className="timeline-center middle" />
                  <TimelineItem item={item} direction="right" />
                </div>
              );
            }
          })}
          <div className="wrapper">
            <div className="timeline-dummy" />
            <div className="timeline-center last" />
            <div className="timeline-dummy" />
          </div>
        </div>
      </Container>
      <style jsx>{`
        #timeline {
          position: relative;
          z-index: ${zIndexes.section};
          background-color: ${colors.light.bg_secondary_color};
          border-bottom: 1px solid ${colors.light.border_discreet_color};
        }

        .content {
          padding: 20px 0;
        }

        .timeline-top {
          display: none;
        }

        .wrapper {
          display: grid;
          grid-template-columns: 100%;
        }

        p {
          font-size: 1.17em;
          color: ${colors.light.text_secondary_color};
        }

        a,
        b {
          font-weight: 500;
          color: ${colors.light.text_primary_color};
        }

        @media (prefers-color-scheme: dark) {
          p {
            color: ${colors.dark.text_secondary_color};
          }

          a,
          b {
            color: ${colors.dark.text_primary_color};
          }
        }

        .timeline-center {
          display: none;
        }

        .timeline-dummy {
          display: none;
        }

        @media (min-width: ${sizes.container}) {
          .timeline-top {
            display: block;
            width: 100px;
            height: 2px;
            margin: 0 auto;
            background-image: linear-gradient(
              to right,
              ${colors.light.border_highlight_color},
              ${colors.light.border_highlight_color},
              ${colors.light.border_highlight_color}
            );
          }

          .wrapper {
            grid-template-columns: 50% 1px 50%;
          }

          .timeline-center {
            display: block;
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
          }

          .timeline-center:after {
            content: '';
            position: absolute;
            width: 2px;
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -1px;
          }

          .timeline-center.middle:after {
            background-color: ${colors.light.border_highlight_color};
          }

          .timeline-center.first,
          .timeline-center.last {
            height: 60px;
          }

          .timeline-center.first:after {
            background-color: ${colors.light.border_highlight_color};
          }

          .timeline-center.last:after {
            background-image: linear-gradient(
              to bottom,
              ${colors.light.border_highlight_color},
              rgba(0, 0, 0, 0)
            );
          }

          .timeline-dummy {
            display: block;
          }
        }

        @media (prefers-color-scheme: dark) {
          #timeline {
            background-color: ${colors.dark.bg_secondary_color};
            border-bottom: 1px solid ${colors.dark.border_discreet_color};
          }

          .timeline-center.middle:after {
            background-color: ${colors.dark.border_highlight_color};
          }

          .timeline-center.first:after {
            background-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0),
                ${colors.dark.border_highlight_color}
              )
              1 100%;
          }

          .timeline-center.last:after {
            background-image: linear-gradient(
                to bottom,
                ${colors.dark.border_highlight_color},
                rgba(0, 0, 0, 0)
              )
              1 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
