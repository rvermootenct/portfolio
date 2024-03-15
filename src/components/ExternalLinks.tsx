import titleToIcon, { IconName } from '@/utils/icons'
import data from '@/data/externalLinks'
import Link from 'next/link'
import Heading from './Heading'
import SectionWrapper from './SectionWrapper'

function ExternalLinks() {
  return (
    <SectionWrapper>
      <Heading> External Links </Heading>
      <div className="flex flex-wrap items-center gap-5">
        {data.map((link) => {
          const Icon = titleToIcon({ title: link.name as IconName, style: { size: 20 } })
          return (
            <Link
              href={link.destination}
              key={link.name}
              target="_blank"
              className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2"
            >
              {Icon}
              <div className="text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">{link.name}</div>
            </Link>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default ExternalLinks
