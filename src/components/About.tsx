import Heading from './Heading'
import data from '@/data/about'
import SectionWrapper from './SectionWrapper'
import formatWithLineBreaks from '@/utils/text'

const About = () => {

  return (
    <SectionWrapper>
      <Heading>About</Heading>
      <p className='text-base md:text-lg font-semibold text-black dark:text-zinc-400'>
        {formatWithLineBreaks(data.bio)}
      </p>
    </SectionWrapper>
  )
}

export default About