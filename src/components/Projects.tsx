import projects from '@/data/projects'
import Heading from './Heading'
import SectionWrapper from './SectionWrapper'
import Tablet from './Tablet'

function Projects() {
  return (
    <SectionWrapper>
      <Heading> Projects </Heading>
      {projects.map((project) => (
        <Tablet info={project} key={project.title} />
      ))}
    </SectionWrapper>
  )
}

export default Projects
