import type { Meta, StoryObj } from '@storybook/react';

import Tablet from './Tablet';
import { SKILLS } from '@/types/constants';

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
          SKILLS.REACT,
          SKILLS.NEXTJS,
          SKILLS.SUPABASE,
          SKILLS.AWS
        ],
        blurb: [`burb1`,`burb2`]
      }
    }
  }
