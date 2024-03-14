import { PROJECTS, SKILLS } from "@/types/constants";

const data = [
  {
    title: PROJECTS.SARB,
    image: PROJECTS.SARB,
    blurb: ["In house application"],
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
    subtitle: "www.resbank.co.za",
  },
  {
    title: PROJECTS.FERREMUNDO,
    image: PROJECTS.FERREMUNDO,
    blurb: ["Online group buying ecommerce platform for the construction industry."],
    skills: [
      SKILLS.REACT_NATIVE,
      SKILLS.JAVASCRIPT,
      SKILLS.POSTGRES,
      SKILLS.CIRCLECI,
      SKILLS.REDUX,
      SKILLS.JEST,
    ],
    subtitle: "www.ferremundo.com",
  },
  {
    title: PROJECTS.RMB,
    image: PROJECTS.RMB,
    blurb: ["In house pricing calculator used for internal processes."],
    skills: [
      SKILLS.REACT,
      SKILLS.TYPESCRIPT,
      SKILLS.POSTGRES,
      SKILLS.CIRCLECI,
      SKILLS.REDUX,
      SKILLS.JEST,
    ],
    subtitle: "www.rmb.co.za",
  },
  {
    title: PROJECTS.MEDIA24,
    image: PROJECTS.MEDIA24,
    blurb: ["Integrate commenting and filtering of comments using a third party LLM service"],
    skills: [
      SKILLS.REACT_NATIVE,
      SKILLS.JAVASCRIPT, 
      SKILLS.HEROKU,
      SKILLS.POSTGRES,
      SKILLS.CIRCLECI,
      SKILLS.REDUX,
      SKILLS.JEST,
    ],
    subtitle: "www.media24.com",
  },
  {
    title: PROJECTS.BALNS,
    image: PROJECTS.BALNS,
    blurb: ["Cryto Wallet"],
    skills: [
      SKILLS.REACT_NATIVE,
      SKILLS.TYPESCRIPT,
      SKILLS.AWS,
      SKILLS.NODEJS,
      SKILLS.CIRCLECI,
      SKILLS.REDUX,
    ],
    subtitle: "https://balns.io",
  },
  {
    title: PROJECTS.MT,
    image: PROJECTS.MT,
    blurb: ["A mobile app focused on mental health. Also had a CMS for the admin to manage the content."],
    skills: [
      SKILLS.REACT_NATIVE,
      SKILLS.TYPESCRIPT,
      SKILLS.AWS,
      SKILLS.NEXTJS,
      SKILLS.NODEJS,
      SKILLS.CIRCLECI,
    ],
    subtitle: " https://metaphoricaltherapy.com",
  },
  {
    title: PROJECTS.CIVIC,
    image: PROJECTS.CIVIC,
    blurb: ["Worked on crypto wallet app"],
    skills: [
      SKILLS.REACT_NATIVE,
      SKILLS.TYPESCRIPT, 
      SKILLS.AWS,
      SKILLS.NODEJS
    ],
    subtitle: "http://www.civic.com",
  },
  {
    title: PROJECTS.QUICKET,
    image: PROJECTS.QUICKET,
    blurb: ["Ticket checkout system with offline capabilities"],
    skills: [
      SKILLS.REACT_NATIVE,
      SKILLS.JAVASCRIPT,
      SKILLS.MONGODB,
      SKILLS.CIRCLECI,
      SKILLS.REDUX,
      SKILLS.JEST
    ],
    subtitle: "www.quicket.co.za",
  },
  {
    title: PROJECTS.REKINDLE,
    image: PROJECTS.REKINDLE,
    blurb: ["A web app for teaching students English. Included study material and quizes. It had a CMS for the admin to manage the content."],
    skills: [SKILLS.REACT_NATIVE, SKILLS.TYPESCRIPT, SKILLS.AWS, SKILLS.NEXTJS, SKILLS.NODEJS, SKILLS.CIRCLECI],
    subtitle: "https://www.english.co.za/",
  },
  {
    title: PROJECTS.TRIPPMATCH,
    image: PROJECTS.TRIPPMATCH,
    blurb: ["A web app for travellers who know what type of holiday they are looking for, buy not where to go for holiday. It matches them up with the possible trip options and allows the user to read other people's experiences of the destination."],
    skills: [SKILLS.RUBY_ON_RAILS, SKILLS.JAVASCRIPT, SKILLS.HEROKU, SKILLS.POSTGRES, SKILLS.CIRCLECI],
    subtitle: "https://www.trippmatch.com",
  },

  {
    title: PROJECTS.LANCEWOOD,
    image: PROJECTS.LANCEWOOD,
    blurb: ["A website about cheese with recipes 🧀"],
    skills: [SKILLS.RUBY_ON_RAILS,SKILLS.JAVASCRIPT,SKILLS.HEROKU,SKILLS.POSTGRES,SKILLS.CIRCLECI,],
    subtitle: "https://www.lancewood.co.za",
  },
];

export default data;
