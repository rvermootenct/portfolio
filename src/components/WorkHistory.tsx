import Heading from "./Heading"
import SectionWrapper from "./SectionWrapper"
import data from '@/data/work'
import Tablet from "./Tablet"

const WorkHistory = () => {
  return (
    <SectionWrapper>
      <Heading>Work History</Heading>
      {data.map((work, i) => (
        <div key={i}>
          <Tablet info={work} />
        </div>
      ))}
    </SectionWrapper>
  )
}

export default WorkHistory
