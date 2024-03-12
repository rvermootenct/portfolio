import titleToIcon, { IconName } from "@/utils/icons"
import Heading from "./Heading"
import data from "@/data/externalLinks"
import Link from "next/link"

const ExternalLinks = () => {
  return (
    <section className="border-t py-7 border-zinc-100 dark:border-zinc-800">
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
              <span>{link.name}</span>
            </Link>
          )
        })
        }
      </div>
    </section>
  )
}

export default ExternalLinks
