import { ReactNode } from "react"

const SectionWrapper = ({ children }: {children: ReactNode }) => {
  return <section className="border-t py-7 border-zinc-100 dark:border-zinc-800">{children}</section>
}

export default SectionWrapper
