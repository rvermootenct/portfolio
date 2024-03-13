const data = [
  {
    title: "SARB",
    image: "/projects/sarb.png",
    blurb: ["In house application"],
    skills: [
      { id: 1, name: "React Native", image: "/skills/react-native.png" },
      { id: 2, name: "typescript", image: "/skills/typescript.png" },
      { id: 4, name: "postgres", image: "/skills/postgresql.png" },
      { id: 5, name: "circleCI", image: "/skills/ci.png" },
      { id: 6, name: "redux", image: "/skills/redux.png" },
      { id: 7, name: "jest", image: "/skills/jest.png" },
      { id: 8, name: "node", image: "/skills/node-js.png" },
      { id: 9, name: "aws", image: "/skills/aws.png" },
      { id: 10, name: "ramda", image: "/skills/ramda.png" },
    ],
    subtitle: "www.resbank.co.za",
  },
  {
    title: "Ferremundo",
    image: "/projects/ferremundo.png",
    blurb: ["Online group buying ecommerce platform for the construction industry."],
    skills: [
      { id: 1, name: "React Native", image: "/skills/react-native.png" },
      { id: 2, name: "javascript", image: "/skills/typescript.png" },
      { id: 4, name: "postgres", image: "/skills/postgresql.png" },
      { id: 5, name: "circleCI", image: "/skills/ci.png" },
      { id: 6, name: "redux", image: "/skills/redux.png" },
      { id: 7, name: "jest", image: "/skills/jest.png" },
    ],
    subtitle: "www.ferremundo.com",
  },
  {
    title: "RMB",
    image: "/projects/rmb.png",
    blurb: ["In house pricing calculator used for internal processes."],
    skills: [
      { id: 1, name: "React", image: "/skills/react-native.png" },
      { id: 2, name: "typescript", image: "/skills/typescript.png" },
      { id: 4, name: "postgres", image: "/skills/postgresql.png" },
      { id: 5, name: "circleCI", image: "/skills/ci.png" },
      { id: 6, name: "redux", image: "/skills/redux.png" },
      { id: 7, name: "jest", image: "/skills/jest.png" },
    ],
    subtitle: "www.rmb.co.za",
  },
  {
    title: "Media24",
    image: "/projects/media24.png",
    blurb: ["Integrate commenting and filtering of comments using a third party LLM service"],
    skills: [
      { id: 1, name: "React Native", image: "/skills/react-native.png" },
      { id: 2, name: "javascript", image: "/skills/javascript.png" },
      { id: 3, name: "heroku", image: "/skills/heroku.png" },
      { id: 4, name: "postgres", image: "/skills/postgresql.png" },
      { id: 5, name: "circleCI", image: "/skills/ci.png" },
      { id: 6, name: "redux", image: "/skills/redux.png" },
      { id: 7, name: "jest", image: "/skills/jest.png" },
    ],
    subtitle: "www.media24.com",
  },
  {
    title: "BALNS",
    image: "/projects/balns.png",
    blurb: ["Cryto Wallet"],
    skills: [
      { id: 1, name: "reactNative", image: "/skills/react-native.png" },
      { id: 2, name: "typescript", image: "/skills/typescript.png" },
      { id: 3, name: "aws", image: "/skills/aws.png" },
      { id: 4, name: "node", image: "/skills/node-js.png" },
      { id: 5, name: "circleCI", image: "/skills/ci.png" },
      { id: 6, name: "redux", image: "/skills/redux.png"}
    ],
    subtitle: "https://balns.io",
  },
  {
    title: "Metaphorical Therapy",
    image: "/projects/mt.png",
    blurb: ["A mobile app focused on mental health. Also had a CMS for the admin to manage the content."],
    skills: [
      { id: 1, name: "reactNative", image: "/skills/react-native.png" },
      { id: 2, name: "typescript", image: "/skills/typescript.png" },
      { id: 3, name: "aws", image: "/skills/aws.png" },
      { id: 4, name: "nextjs", image: "/skills/next-js.png" },
      { id: 4, name: "node", image: "/skills/node-js.png" },
      { id: 5, name: "circleCI", image: "/skills/ci.png" }
    ],
    subtitle: " https://metaphoricaltherapy.com",
  },
  {
    title: "Civic",
    image: "/projects/civic.png",
    blurb: ["Worked on crypto wallet app"],
    skills: [
      { id: 1, name: "reactNative", image: "/skills/react-native.png" },
      { id: 4, name: "typescript", image: "/skills/typescript.png" },
      { id: 2, name: "aws", image: "/skills/aws.png" },
      { id: 3, name: "node", image: "/skills/node-js.png" },
    ],
    subtitle: "http://www.civic.com",
  },
  {
    title: "Quicket",
    image: "/projects/quicket.png",
    blurb: ["Ticket checkout system with offline capabilities"],
    skills: [
      { id: 1, name: "React Native", image: "/skills/react-native.png" },
      { id: 2, name: "javascript", image: "/skills/typescript.png" },
      { id: 4, name: "mongoDB", image: "/skills/mongodb.png" },
      { id: 5, name: "circleCI", image: "/skills/ci.png" },
      { id: 6, name: "redux", image: "/skills/redux.png" },
      { id: 7, name: "jest", image: "/skills/jest.png" },
    ],
    subtitle: "www.quicket.co.za",
  },
  {
    title: "Rekindle English",
    image: "/projects/rekindle.png",
    blurb: ["A web app for teaching students English. Included study material and quizes. It had a CMS for the admin to manage the content."],
    skills: [
      { id: 1, name: "reactNative", image: "/skills/react-native.png" },
      { id: 2, name: "typescript", image: "/skills/typescript.png" },
      { id: 3, name: "aws", image: "/skills/aws.png" },
      { id: 4, name: "nextjs", image: "/skills/next-js.png" },
      { id: 4, name: "node", image: "/skills/node-js.png" },
      { id: 5, name: "circleCI", image: "/skills/ci.png" }
    ],
    subtitle: " https://www.english.co.za/",
  },
  {
    title: "Trippmatch",
    image: "/projects/trippmatch.png",
    blurb: ["A web app for travellers who know what type of holiday they are looking for, buy not where to go for holiday. It matches them up with the possible trip options and allows the user to read other people's experiences of the destination."],
    skills: [
      { id: 1, name: "Ruby on Rails", image: "/skills/rails.png" },
      { id: 2, name: "javascript", image: "/skills/javascript.png" },
      { id: 3, name: "heroku", image: "/skills/heroku.png" },
      { id: 4, name: "postgres", image: "/skills/postgresql.png" },
      { id: 5, name: "circleCI", image: "/skills/ci.png" }
    ],
    subtitle: "https://www.trippmatch.com",
  },

  {
    title: "Lancewood",
    image: "/projects/lancewood.png",
    blurb: ["A website about cheese with recipes 🧀"],
    skills: [
      { id: 1, name: "Ruby on Rails", image: "/skills/rails.png" },
      { id: 2, name: "javascript", image: "/skills/javascript.png" },
      { id: 3, name: "heroku", image: "/skills/heroku.png" },
      { id: 4, name: "postgres", image: "/skills/postgresql.png" },
      { id: 5, name: "circleCI", image: "/skills/ci.png" }
    ],
    subtitle: "https://www.lancewood.co.za",
  },
];

export default data;
