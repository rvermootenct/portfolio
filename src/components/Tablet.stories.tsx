import type { Meta, StoryObj } from '@storybook/react';

import Tablet from './Tablet';

const meta: Meta<typeof Tablet> = {
  component: Tablet,
};

export default meta;
type Story = StoryObj<typeof Tablet>;

export const Primary: Story = {
  args: {
    info:{
        image: '/work/nona.png',
        subtitle: 'subtitle',
        title: 'title',
        description: 'description',
        skills: [
          { id: 1, name: 'React', image: '/skills/react.png' },
          { id: 2, name: 'Next.js', image: '/skills/next-js.png' },
          { id: 3, name: 'Supabase', image: '/skills/supabase.png' },
          { id: 4, name: 'Stripe', image: '/skills/stripe.png' },
          { id: 5, name: 'Github', image: '/skills/github.png' },
          { id: 6, name: 'Node.js', image: '/skills/node-js.png' },
          { id: 7, name: 'AWS', image: '/skills/aws.png' }
        ],
        blurb: [`burb1`,`burb2`]
      }
    }
  }
