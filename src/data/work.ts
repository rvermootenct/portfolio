import { SKILLS, WORK } from '@/types/constants'

const workHistory = [
  {
    image: WORK.FREELANCE,
    subtitle: WORK.FREELANCE,
    title: 'Full Stack Developer',
    type: 'Full-time',
    description: 'Remote - May 2023 - Present',
    skills: [
      SKILLS.REACT,
      SKILLS.NEXTJS,
      SKILLS.SUPABASE,
      SKILLS.STRIPE,
      SKILLS.GITHUB,
      SKILLS.NODEJS,
      SKILLS.AWS,
    ],
    blurb: [
      `
      Over the past 10 months, I have been freelancing as a full stack developer. In this time, I have built bespoke web applications for clients, either as part of a team or as the sole developer. The projects I have worked on include a video conferencing app, crypto utilities and a cryto portfolio website.
      `,
    ],
  },
  {
    image: WORK.YOCO,
    subtitle: WORK.YOCO,
    title: 'Senior Full Stack Developer',
    type: 'Full-time',
    description: 'Remote - MAR 2022 - NOV 2022',
    skills: [
      SKILLS.REACT,
      SKILLS.NEXTJS,
      SKILLS.REACT_NATIVE,
      SKILLS.REDUX,
      SKILLS.LAUNCHDARKLY,
      SKILLS.GITHUB,
      SKILLS.NODEJS,
      SKILLS.AWS,
      SKILLS.SENTRY,
      SKILLS.DOCKER,
    ],
    blurb: [
      `
        During the time I was at yoco I was responsible for working within the online section of the business.
        I worked on multiple parts of the app including invoices,link to pay, and admin portal.
        I also led a team creating an online store product.
        I really enjoyed working with other developers and ensuring that code is of a high standard with good test coverage.
      `,
    ],
  },
  {
    image: WORK.NONA,
    subtitle: WORK.NONA,
    title: 'Full Stack Developer',
    type: 'Full-time',
    description: 'Remote & Hybrid - JUL 2017 - FEB 2022',
    skills: [
      SKILLS.REACT,
      SKILLS.NEXTJS,
      SKILLS.REACT_NATIVE,
      SKILLS.REDUX,
      SKILLS.LAUNCHDARKLY,
      SKILLS.GITHUB,
      SKILLS.NODEJS,
      SKILLS.AWS,
      SKILLS.SENTRY,
      SKILLS.RUBY,
      SKILLS.RUBY_ON_RAILS,
      SKILLS.DOCKER,
      SKILLS.POSTGRES,
    ],
    blurb: [
      `
        Over the course of my employment at Nona my knowledge of technologies, frameworks and tools
        expanded greatly and I got to work extensively with cloud native platforms such as AWS, practised TDD and BDD,
        utilised CI/CD best practices and helped build out multiple mobile and web based projects.
        One thing I greatly enjoyed during my time with NONA was having the opportunity to work with and to mentor more junior people on my team.
      `,
    ],
  },
  {
    image: WORK.SHOPSTAR,
    subtitle: WORK.SHOPSTAR,
    title: 'Full Stack Developer',
    type: 'Full-time',
    description: 'In Office - Jan 2017 - JUL 2017',
    skills: [
      SKILLS.RUBY,
      SKILLS.RUBY_ON_RAILS,
      SKILLS.POSTGRES,
      SKILLS.HEROKU,
      SKILLS.DOCKER,
      SKILLS.NEXTJS,
      SKILLS.REACT_NATIVE,
      SKILLS.REDUX,
      SKILLS.LAUNCHDARKLY,
      SKILLS.GITHUB,
      SKILLS.NODEJS,
      SKILLS.AWS,
      SKILLS.SENTRY,
    ],
    blurb: [
      `
        I was responsible for upkeep and feature development of a large app that allows small shop owners to create their
        own online shop in the South African market, much like shopify.
      `,
    ],
  },
]

export default workHistory
