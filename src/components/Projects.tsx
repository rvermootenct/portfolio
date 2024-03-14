import data from '@/data/projects'
import Heading from './Heading'
import SectionWrapper from './SectionWrapper'
import Tablet from './Tablet'

const Projects = () => {
  return (
    <SectionWrapper>
      <Heading> Projects </Heading>
      {data.map((project, i) => (
        <div key={i}>
          <Tablet info={project} />
        </div>
      ))}
    </SectionWrapper>
  )
}

export default Projects
