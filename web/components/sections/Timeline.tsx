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
    description: [
      `Development of an Email client for OSX and mobile using (mostly) Typescript. Improving the application from MVP to production state and leading a small team of developers.`,
      `Beyound the technical duties, there was a lot of learning for managing a multi-national business setup, its accounting, investment contracts, payroll and last but not least, the liquidation of the business.`,
    ],
    bullets: ['Typescript', 'React + Redux', 'Electron', 'React Native'],
    thumb: 'timeline-thumb-tempo.svg',
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
    description: [
      `Co-founded a creative development studio with Onno Schwanen and implemented applications, websites and small e-commerce solutions - aiming to deliver the best possible user experience.`,
      `Our portfolio includes projects for Google, Zalando, Hyper Island, MVPs for startups and consultancy work for agencies in Europe and United States of America.`,
    ],
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
    bullets: ['ES6+', 'React + Redux', 'Node', 'MongoDB', 'Docker'],
    thumb: 'timeline-thumb-pillar.svg',
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
    description: [
      `After my previous employer's business shut down, I’ve worked as freelancer mostly for clients in Brazil. I also took the opportunity during this period to learn React as an earlier adopter.`,
      `I have worked on the implementation of a MVP for an education multiplayer board game and the website front-end for Sabin, a holding company of one of largest laboratories in Brazil.`,
    ],
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
    description: [
      `Worked as backend developer and actively assisting the frontend functionalities for a small creative studio based in Berlin, building apps, campaigns and websites.`,
      `Some of the clients I have been involved were Nokia, the danish clothing brand Joha and the insurance companies ASE and Danica Pension. I have also implemented the MVP of Bacon de Czar's own web application.`,
    ],
    highlights: [
      `Joha (website)`,
      `Nokia (campaign website)`,
      `ASE (web application)`,
      `Danica Pension (web application)`,
      `Chop Hub (MVP/web application)`,
    ],
    bullets: [`Angular`, `Node`, `CoffeeScript`, `Rails`, `PHP`],
  },
  {
    time: `2011 - 2013`,
    duration: `2 years`,
    title: `Made Tech Limited`,
    location: `London, United Kingdom`,
    position: `Fullstack Developer`,
    description: [
      `Being the first hire of the company, I have pushed my skills to new standards, taking a lot of ownership and doing front- and backend for important projects.`,
      `The main highlights were the implementation of two e-commerces: One for the swiss shoe brand On and a bespoke platform for the britsh company Surface View.`,
    ],
    highlights: [
      `On-Running (e-commerce)`,
      `Surface view (e-commerce)`,
      `Vertu (website frontend)`,
      `VGL (website frontend)`,
    ],
    bullets: [`Rails`, `Spree`, `Angular`, `JQuery`, `PHP`, `HTML5`],
  },
  {
    time: `2011`,
    duration: `5 months`,
    title: `Freelancer`,
    location: `London, United Kingdom`,
    position: `Fullstack Developer`,
    description: [
      `I have collaborated on a friend’s project by implementing a marketplace platform for mining sites and equipments, as an opportunity to showcase my work for new hires in United Kingdom.`,
    ],
    highlights: [`Mineral trade (MVP/web app)`],
    bullets: [`PHP`, `Zend`, `MySQL`],
  },
  {
    time: `2002 - 2010`,
    duration: `9 years`,
    title: `Tasco Ltda.`,
    location: `Belo Horizonte, Brazil`,
    position: `Software Developer`,
    description: [
      `Working on a small and young team, I made a big contribution for most company’s products, by building very professional web based user interfaces.`,
    ],
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
    description: [
      `Hired as an intern, I was able to play my first role as a developer of a catalogue CD-ROM for my city, having a great support from the database provider.`,
    ],
    bullets: [`Javascript`, `Lightbase`],
  },
  {
    time: `2000 - 2001`,
    duration: `1 year`,
    title: `Multiline Ltda.`,
    location: `Belo Horizonte, Brazil`,
    position: `Intern`,
    description: [
      `In my first internship, I assisted other engineers in some tasks, mainly related to a lightweight Linux distribution for Terminals and network setup for a cisco router.`,
    ],
    bullets: [`Linux`],
  },
  {
    time: `1998 - 2003`,
    duration: `6 years`,
    title: `Pontifícia Universidade Católica de Minas Gerais`,
    location: `Belo Horizonte, Brazil`,
    position: `Bachelor - Control and Automation Engineer`,
    description: [
      `In my graduation thesis I have developed an out-of-the-box implementation of the trajectory generation for a robot of type SCARA. It was visually simulated in a 3D robot plugin for Matlab.`,
    ],
    bullets: [`CIM`, `C++`, `Assembly`, `Eletronics`, `Robotics`, `PID`],
  },
];

const Timeline: NextPage = () => {
  return (
    <section id="timeline">
      <Container>
        <div className="content">
          <h2>Career Timeline</h2>
          <p>
            <b>Current status:</b> Parental leave until April 2022.
          </p>
          <p>
            Do you like my profile and have interest to discuss future
            collaboration? Please don't hesitate to contact me directly via the
            email{' '}
            <a href="mailto:contact@henriquebf.com">contact@henriquebf.com</a>{' '}
            or any of my social channels.
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
        </div>
      </Container>
      <style jsx>{`
        #timeline {
          position: relative;
          z-index: ${zIndexes.section};
          background-color: ${colors.light.bg_secondary_color};
        }

        .content {
          padding: 20px 0 60px 0;
          border-bottom: 1px solid ${colors.light.border_discreet_color};
        }

        @media (prefers-color-scheme: dark) {
          #timeline {
            background-color: ${colors.dark.bg_secondary_color};
          }

          .content {
            border-bottom: 1px solid ${colors.dark.border_discreet_color};
          }
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

        a:hover {
          color: ${colors.light.border_highlight_color};
        }

        @media (prefers-color-scheme: dark) {
          p {
            color: ${colors.dark.text_secondary_color};
          }

          a,
          b {
            color: ${colors.dark.text_primary_color};
          }

          a:hover {
            color: ${colors.dark.border_highlight_color};
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
            height: 1px;
            margin: 0 auto;
            background-color: ${colors.light.border_highlight_color};
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
            width: 1px;
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

          .timeline-dummy {
            display: block;
          }

          @media (prefers-color-scheme: dark) {
            .timeline-top {
              background-color: ${colors.dark.border_highlight_color};
            }

            .timeline-center.middle:after {
              background-color: ${colors.dark.border_highlight_color};
            }

            .timeline-center.first:after {
              background-color: ${colors.dark.border_highlight_color};
            }
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
