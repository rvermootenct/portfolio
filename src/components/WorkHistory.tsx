import data from '@/data/work'
import Heading from './Heading'
import SectionWrapper from './SectionWrapper'
import Tablet from './Tablet'

function WorkHistory() {
  return (
    <SectionWrapper>
      <Heading>Work History</Heading>
      {data.map((work) => (
        <div key={work.title}>
          <Tablet info={work} />
        </div>
      ))}
    </SectionWrapper>
  )
}

export default WorkHistory
