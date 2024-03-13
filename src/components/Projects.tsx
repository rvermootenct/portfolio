import data from '@/data/projects'
import Heading from './Heading'
import SectionWrapper from './SectionWrapper'
import Image from 'next/image'
import SkillComponent from './SkillComponent'
import Link from 'next/link'

const Projects = () => {
  return (

    <SectionWrapper>
      <Heading> Projects </Heading>
      {data.map(project => (
        <div key={project.id} className='flex flex-wrap gap-5 w-full lg:w-8/12 mb-10'>
          <div className="relative w-full md:w-[120px] pt-[56.25%] md:pt-0 md:h-20 rounded-lg overflow-hidden">
            <Image src={project.image} fill className="w-full h-full absolute top-0 left-0 bottom-0 right-0" alt="project image" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-black dark:text-white leading-[25px]">{project.company}</h2>
            <Link href={project.url} className="text-base font-semibold text-zinc-500 dark:text-zinc-400 mt-2">{project.url}</Link>
            <p className="text-base font-semibold text-black dark:text-white mt-2">{project.description}</p>
            {project.skills && <div className="flex gap-2 flex-wrap my-2">
              {
                project?.skills?.map(
                  skill => (
                    <SkillComponent key={skill.id} skill={skill} />
                  )
                )
              }
            </div>}
          </div>
        </div>
      ))}
    </SectionWrapper>
  )
}

export default Projects
