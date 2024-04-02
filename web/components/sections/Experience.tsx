import type { NextPage } from 'next';
import zIndexes from '@/config/zIndexes.json';
import colors from '@/config/colors.json';
import sizes from '@/config/sizes.json';
import Container from '@/components/layout/Container';
import ExperienceItem from '@/components/shared/ExperienceItem';

const experienceItems = [
  {
    time: `2022 - 2024`,
    duration: `2 years`,
    title: `Framer B.V.`,
    location: `Amsterdam, The Netherlands (Remote)`,
    position: `Product Engineer`,
    description: [
      `Collaborated with product designers making sure to provide the best user experience on subscribing/upgrading plans, implementing upsells for new features, and improving flows to reduce customer support.`,
      `Iterated in both front and backend stack, taking full ownership of features like Project Permissions, allowing for more nuanced control over permissions for editors within each project.`,
    ],
    highlights: [
      `Project Permissions`,
      `Free Worskpace Plan`,
      `Upsells`,
      `Stripe Checkout`,
      `Tree Shaking`,
      `SSG`,
    ],
    bullets: ['Typescript', 'React', 'Microservices', 'GOLANG'],
    thumb: 'experience-thumb-framer.svg',
    link: {
      text: `Visit Framer website`,
      url: `https://framer.com`,
    },
  },
  {
    time: `2020 - 2021`,
    duration: `2 years`,
    title: `Tempo GmbH`,
    location: `Berlin, Germany`,
    position: `Co-founder & CTO`,
    description: [
      `Development of an Email client for OSX and mobile using Typescript (mostly). Designing the architecture from MVP state to production and leading a young and remote team of developers.`,
      `Beyond the technical duties, there was a lot of management for a multi-national business setup, accounting, investment contracts, payroll and last but not least, the business liquidation.`,
    ],
    bullets: ['Typescript', 'React + Redux', 'Electron', 'React Native'],
    thumb: 'experience-thumb-tempo.svg',
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
      `Co-founded a creative development studio with Onno Schwanen and implemented applications, websites and e-commerce solutions - aiming to deliver the best possible user experience.`,
      `Our portfolio includes projects for Google, Zalando, Hyper Island, several MVPs for startups and consultancy work for agencies in Europe and North America.`,
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
    thumb: 'experience-thumb-pillar.svg',
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
      `I was hired as a freelancer for a brazilian based agency. I also took the opportunity during this period to learn React and become an earlier adopter for future projects.`,
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
      `Worked as backend developer and actively assisted the frontend functionalities for a small but ambitious creative studio based in Berlin: Building web applications, campaigns and websites.`,
      `Some of the clients I have collaborated were Nokia, the danish clothing brand Joha and the insurance companies ASE and Danica Pension. I have also implemented the MVP of Bacon de Czar's own product.`,
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
      `Being the first hire of the company, I have pushed my skills to new standards, taking a lot of ownership and delivering front- and backend for important projects.`,
      `The main highlights were the implementation of two e-commerce platforms: One for the swiss shoe brand On and a bespoke solution for the british company Surface View.`,
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
      `I have collaborated on a friend’s project by implementing a marketplace platform for mining sites and equipments, as an opportunity to showcase my work for new hires in the United Kingdom.`,
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
      `In my first internship, I assisted other engineers in some tasks, mainly related to a lightweight Linux distribution for Terminals and network setup for cisco routers.`,
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
    bullets: [`CIM`, `C++`, `Electronics`, `Robotics`, `PID`],
  },
];

const Experience: NextPage = () => {
  return (
    <section id="experience">
      <Container>
        <div className="content">
          <h2>Experience</h2>
          <p>
            As a versatile software engineer, I specialize in crafting top-notch
            products, focused on delivering exceptional user experience with
            optimal performance. My expertise spans across web, mobile, and
            desktop platforms, enabling me to develop world-class software
            solutions. In addition to my technical prowess, I bring valuable
            experience in managing businesses and growing an engineering team.
          </p>
          <div className="experience-top"></div>
          <div className="wrapper">
            <div className="experience-dummy" />
            <div className="experience-center first" />
            <div className="experience-dummy" />
          </div>
          {experienceItems.map((item, i) => {
            if (i % 2 === 0) {
              return (
                <div key={i} className="wrapper">
                  <ExperienceItem item={item} direction="left" />
                  <div className="experience-center middle" />
                  <div className="experience-dummy" />
                </div>
              );
            } else {
              return (
                <div key={i} className="wrapper">
                  <div className="experience-dummy" />
                  <div className="experience-center middle" />
                  <ExperienceItem item={item} direction="right" />
                </div>
              );
            }
          })}
        </div>
      </Container>
      <style jsx>{`
        #experience {
          position: relative;
          z-index: ${zIndexes.section};
          background-color: ${colors.light.bg_secondary_color};
        }

        .content {
          padding: 20px 0 60px 0;
          border-bottom: 1px solid ${colors.light.border_discreet_color};
        }

        @media (prefers-color-scheme: dark) {
          #experience {
            background-color: ${colors.dark.bg_secondary_color};
          }

          .content {
            border-bottom: 1px solid ${colors.dark.border_discreet_color};
          }
        }

        .experience-top {
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

        .experience-center {
          display: none;
        }

        .experience-dummy {
          display: none;
        }

        @media (min-width: ${sizes.container}) {
          .experience-top {
            display: block;
            width: 100px;
            height: 1px;
            margin: 0 auto;
            background-color: ${colors.light.border_highlight_color};
          }

          .wrapper {
            grid-template-columns: 50% 1px 50%;
          }

          .experience-center {
            display: block;
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
          }

          .experience-center:after {
            content: '';
            position: absolute;
            width: 1px;
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -1px;
          }

          .experience-center.middle:after {
            background-color: ${colors.light.border_highlight_color};
          }

          .experience-center.first,
          .experience-center.last {
            height: 60px;
          }

          .experience-center.first:after {
            background-color: ${colors.light.border_highlight_color};
          }

          .experience-dummy {
            display: block;
          }

          @media (prefers-color-scheme: dark) {
            .experience-top {
              background-color: ${colors.dark.border_highlight_color};
            }

            .experience-center.middle:after {
              background-color: ${colors.dark.border_highlight_color};
            }

            .experience-center.first:after {
              background-color: ${colors.dark.border_highlight_color};
            }
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
