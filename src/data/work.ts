import { SKILLS, WORK } from "@/types/constants"

const data = [
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
        Worked on a greenfields project implementing a video calling service.
        The app at a high level is a marketplace for vetted chanellers and people looking for their services
        to find each other and use the service to have a video conference.
        The app utilised webRTC through a third party service called 100ms to build the application.
      `,
      `
        Helping prepare for product launch and upkeep of a number of existing products.
        Was able to work with a small team from the Netherlands and learn about the Tezos ecosystem.
      `
    ]
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
      SKILLS.DOCKER
    ],
    blurb: [
      `
        Responsible for working within the online section of the business. Worked with teams on invoices,
        link to pay, and admin portal. I also led a team creating an online store product.
        Responsible for working with other developers and ensuring that code is of a high standard with good test coverage.
      `
    ]
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
        One thing I greatly enjoyed during my time with the subtitle was having the opportunity to work with and to mentor more junior people on my team.
      `
    ]
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
      SKILLS.SENTRY
    ],
    blurb: [
      `
        Responsible for upkeep and feature development of a large app that allows small shop owners to create their
        own online shop in the South African market, much like shopify.
      `
    ]
  },
  {
    image: WORK.SFL,
    subtitle: WORK.SFL,
    title: 'Field Data Manager',
    type: 'Full-time',
    description: 'In Office - Jan 2014 - JUL 2017',
    skills: [
      SKILLS.RUBY,
      SKILLS.RUBY_ON_RAILS,
      SKILLS.POSTGRES,
      SKILLS.HEROKU
    ],
    blurb: [
      `
        Responsible for creation and management of Data collection applications for monitoring and evaluation purposes of the programs the organization was running.
      `
    ]
  },
]

export default data
