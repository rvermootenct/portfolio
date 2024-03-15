import {
  MISC, PROJECTS, SKILLS, WORK,
} from '@/types/constants'

type Dictionary<Value> = {
  [key: string]: Value;
}

const imageDictionary: Readonly<Dictionary<string>> = {
  // Skills
  [SKILLS.ANGULAR]:         '/skills/angularjs.png',
  [SKILLS.AWS]:             '/skills/aws.png',
  [SKILLS.BOOTSTRAP]:       '/skills/bootsrap.png',
  [SKILLS.CIRCLECI]:        '/skills/ci.png',
  [SKILLS.CPP]:             '/skills/cplusplus.png',
  [SKILLS.DOCKER]:          '/skills/docker.png',
  [SKILLS.ETHEREUM]:        '/skills/ethereum.png',
  [SKILLS.EXPRESS]:         '/skills/express.png',
  [SKILLS.FIGMA]:           '/skills/figma.png',
  [SKILLS.GITHUB]:          '/skills/github.png',
  [SKILLS.GRAPHQL]:         '/skills/graphql.png',
  [SKILLS.HEROKU]:          '/skills/heroku.png',
  [SKILLS.JAVASCRIPT]:      '/skills/javascript.png',
  [SKILLS.JEST]:            '/skills/js.png',
  [SKILLS.LAUNCHDARKLY]:    '/skills/launch-darkly.png',
  [SKILLS.MONGODB]:         '/skills/mongodb.png',
  [SKILLS.NEXTJS]:          '/skills/next-js.png',
  [SKILLS.NODEJS]:          '/skills/node-js.png',
  [SKILLS.POSTGRES]:        '/skills/postgresql.png',
  [SKILLS.RAILS]:           '/skills/rails.png',
  [SKILLS.RAMDA]:           '/skills/ramda.png',
  [SKILLS.REACT]:           '/skills/react.png',
  [SKILLS.REACT_NATIVE]:    '/skills/react-native.png',
  [SKILLS.REDUX]:           '/skills/redux.png',
  [SKILLS.RUBY]:            '/skills/rb.png',
  [SKILLS.RUBY_ON_RAILS]:   '/skills/ror.png',
  [SKILLS.SENTRY]:          '/skills/sentry.png',
  [SKILLS.SUPABASE]:        '/skills/supabase.png',
  [SKILLS.STRIPE]:          '/skills/stripe.png',
  [SKILLS.TAILWIND]:        '/skills/tailwind.png',
  [SKILLS.TYPESCRIPT]:      '/skills/typescript.png',

  // Work
  [WORK.FREELANCE]:         '/work/freelance.png',
  [WORK.NONA]:              '/work/nona.png',
  [WORK.SFL]:               '/work/sfl.png',
  [WORK.SHOPSTAR]:          '/work/shopstar.png',
  [WORK.YOCO]:              '/work/yoco.png',

  // Projects
  [PROJECTS.BALNS]:         '/projects/balns.png',
  [PROJECTS.CIVIC]:         '/projects/civic.png',
  [PROJECTS.FERREMUNDO]:    '/projects/ferremundo.png',
  [PROJECTS.LANCEWOOD]:     '/projects/lancewood.png',
  [PROJECTS.MEDIA24]:       '/projects/media24.png',
  [PROJECTS.MT]:            '/projects/mt.png',
  [PROJECTS.QUICKET]:       '/projects/quicket.png',
  [PROJECTS.REKINDLE]:      '/projects/rekindle.png',
  [PROJECTS.RMB]:           '/projects/rmb.png',
  [PROJECTS.SARB]:          '/projects/sarb.png',
  [PROJECTS.TRIPPMATCH]:    '/projects/trippmatch.png',

  // MISC
  [MISC.PROFILE]:           '/images/profile.jpeg',
}

export const getImagePath = (imageName: string) => imageDictionary[imageName]
