import { PROJECTS, SKILLS } from '@/types/constants'

const projects = [
  {
    title: PROJECTS.SARB,
    image: PROJECTS.SARB,
    blurb: ['The South African Reserve Bank (SARB) is the central bank of South Africa. We were contracted to create a React Native application for a test product. The project demanded stringent adherence to non-disclosure agreements (NDAs) due to its sensitive nature.'],
    skills: [
      SKILLS.REACT_NATIVE,
      SKILLS.TYPESCRIPT,
      SKILLS.POSTGRES,
      SKILLS.CIRCLECI,
      SKILLS.REDUX,
      SKILLS.JEST,
      SKILLS.NODEJS,
      SKILLS.AWS,
      SKILLS.RAMDA,
    ],
    subtitle: 'www.resbank.co.za',
  },
  {
    title: PROJECTS.FERREMUNDO,
    image: PROJECTS.FERREMUNDO,
    blurb: ['Ferremundo is a commercial seller to hardware stores. We built an innovative online group-buying ecommerce platform to allow different hardware stores to bulk purchase together. The application is currently being used in South America.'],
    skills: [
      SKILLS.REACT_NATIVE,
      SKILLS.JAVASCRIPT,
      SKILLS.POSTGRES,
      SKILLS.CIRCLECI,
      SKILLS.REDUX,
      SKILLS.JEST,
    ],
    subtitle: 'www.ferremundo.com',
  },
  {
    title: PROJECTS.RMB,
    image: PROJECTS.RMB,
    blurb: ['Rand National Bank is a large corporate and investment bank. We developed a sophisticated in-house pricing calculator to streamline internal processes. While not responsible for the underlying calculations, we designed and implemented a user-friendly interface (UI) to facilitate efficient utilization of the pricing algorithms for loan approvals. By using redux and react, we were able to create a highly responsive and intuitive UI with a single source of truth.'],
    skills: [
      SKILLS.REACT,
      SKILLS.TYPESCRIPT,
      SKILLS.POSTGRES,
      SKILLS.CIRCLECI,
      SKILLS.REDUX,
      SKILLS.JEST,
    ],
    subtitle: 'www.rmb.co.za',
  },
  {
    title: PROJECTS.MEDIA24,
    image: PROJECTS.MEDIA24,
    blurb: ['News24 is one of the largest news outlets in South Africa. After a failed attempt at implementing a user commenting system we were contracted to add a commenting system using an LLM for comment filtering. Additionally, I collaborated on the development of the subscription service for the News24 mobile application, enabling users to access premium content and personalized features. Both features are still in use today.'],
    skills: [
      SKILLS.REACT_NATIVE,
      SKILLS.JAVASCRIPT,
      SKILLS.HEROKU,
      SKILLS.POSTGRES,
      SKILLS.CIRCLECI,
      SKILLS.REDUX,
      SKILLS.JEST,
    ],
    subtitle: 'www.media24.com',
  },
  {
    title: PROJECTS.CIVIC,
    image: PROJECTS.CIVIC,
    blurb: ['Civic is a provider of identity and access management solutions. I contributed to the development of a cryptocurrency wallet application by building intuitive and user-friendly UI components and integrating them with the backend system. I utilized React Native and TypeScript to create cross-platform UI components. I integrated the UI components with the backend infrastructure, enabling users to securely manage their cryptocurrency assets'],
    skills: [
      SKILLS.REACT_NATIVE,
      SKILLS.TYPESCRIPT,
      SKILLS.AWS,
      SKILLS.NODEJS,
    ],
    subtitle: 'http://www.civic.com',
  },
  {
    title: PROJECTS.QUICKET,
    image: PROJECTS.QUICKET,
    blurb: ['Quicket is a fast and effective online ticketing service for events of all sizes. Within minutes anyone can create an event profile and start selling tickets though their secure online payment gateway. We built a react native application for them using firebase to provide extensive offline capabilities (with later syncing) as many events in South Africa are at locations without cellphone reception. The application launched successfully at a large event and has served many thousands of event goers over the years.'],
    skills: [
      SKILLS.REACT_NATIVE,
      SKILLS.JAVASCRIPT,
      SKILLS.MONGODB,
      SKILLS.CIRCLECI,
      SKILLS.REDUX,
      SKILLS.JEST,
    ],
    subtitle: 'www.quicket.co.za',
  },
]

export default projects
