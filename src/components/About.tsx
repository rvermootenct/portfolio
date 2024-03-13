import Heading from './Heading'
import data from '@/data/about'
import SectionWrapper from './SectionWrapper'
import formatWithLineBreaks from '@/utils/text'

const About = () => {

  return (
    <SectionWrapper>
      <Heading>About</Heading>
      <h3 className="text-xl md:text-2xl fond-semibold capitalize text-black dark:text-white">
        {data.heading}
      </h3>
      <p className='mt-3 text-base md:text-lg font-semibold text-black dark:text-zinc-400'>
        {formatWithLineBreaks(data.bio)}
      </p>
    </SectionWrapper>
  )
}

export default About