import type { Meta, StoryObj } from '@storybook/react'

import Tablet from './Tablet'

const meta: Meta<typeof Tablet> = {
  component: Tablet,
};

export default meta;
type Story = StoryObj<typeof Tablet>;

export const Primary: Story = {
  args: {
    info:  {
      image: '/work/freelance.png',
      subtitle: 'Freelance',
      title: 'Full Stack Developer',
      description: 'Remote - May 2023 - Present',
      skills: [
        { id: 1, name: 'React', image: '/skills/react.png' },
        { id: 2, name: 'Next.js', image: '/skills/next-js.png' },
        { id: 3, name: 'Supabase', image: '/skills/supabase.png' },
        { id: 4, name: 'Stripe', image: '/skills/stripe.png' },
        { id: 5, name: 'Github', image: '/skills/github.png' },
        { id: 6, name: 'Node.js', image: '/skills/node-js.png' },
        { id: 7, name: 'AWS', image: '/skills/aws.png' }
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
  }
}
