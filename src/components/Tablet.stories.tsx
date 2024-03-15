import type { Meta, StoryObj } from '@storybook/react'

import { SKILLS } from '@/types/constants'
import Tablet from './Tablet'

const meta: Meta<typeof Tablet> = {
  component: Tablet,
}

export default meta
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
        SKILLS.AWS,
      ],
      blurb: ['burb1', 'burb2'],
    },
  },
}
