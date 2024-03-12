import Heading from "./Heading"
import SectionWrapper from "./SectionWrapper"
import data from "@/data/skills"
import SkillComponent from "./SkillComponent"

const Skills = () => {
  return (
    <SectionWrapper>
      <Heading>Skills</Heading>
      <div className="flex flex-wrap items-center gap-5">
        {data.map(skill => (
          <div key={skill.id}> 
            <SkillComponent skill={skill} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Skills
