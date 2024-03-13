import Heading from "./Heading"
import SectionWrapper from "./SectionWrapper"
import data from '@/data/work'
import Tablet from "./Tablet/Tablet"

const WorkHistory = () => {
  return (
    <SectionWrapper>
      <Heading>Work History</Heading>
      {data.map((work, i) => (
        <Tablet info={work} key={i} />
      ))}
    </SectionWrapper>
  )
}

export default WorkHistory
