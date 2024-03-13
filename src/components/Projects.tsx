import data from '@/data/projects'
import Heading from './Heading'
import SectionWrapper from './SectionWrapper'
import Tablet from './Tablet/Tablet'

const Projects = () => {
  return (
    <SectionWrapper>
      <Heading> Projects </Heading>
      {data.map((project, key) => (
        <Tablet info={project} key={key} />
      ))}
    </SectionWrapper>
  )
}

export default Projects
