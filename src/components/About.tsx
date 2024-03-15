import data from '@/data/about'
import { formatWithLineBreaks } from '@/utils/text'
import Heading from './Heading'
import SectionWrapper from './SectionWrapper'

function About() {
  return (
    <SectionWrapper>
      <Heading>About</Heading>
      <p className="text-base md:text-lg font-semibold text-black dark:text-zinc-400">
        {formatWithLineBreaks(data.bio)}
      </p>
    </SectionWrapper>
  )
}

export default About
