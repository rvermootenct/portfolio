import titleToIcon, { IconName } from "@/utils/icons"
import Heading from "./Heading"
import data from "@/data/externalLinks"
import Link from "next/link"
import SectionWrapper from "./SectionWrapper"

const ExternalLinks = () => {
  return (
    <SectionWrapper>
      <Heading> External Links </Heading>
      <div className="flex flex-wrap items-center gap-5">
        {data.map(link => {
          const Icon = titleToIcon({ title: link.name as IconName, style: { size: 20 } })
          return (
            <Link
              href={link.destination}
              key={link.id}
              target="_blank"
              className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2"
            >
              {Icon}
              <span className="text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">{link.name}</span>
            </Link>
          )
        })
        }
      </div>
    </SectionWrapper>
  )
}

export default ExternalLinks
