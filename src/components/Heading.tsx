import { ReactNode } from "react";

const Heading = ({ children }: {children: ReactNode}) => {
  return <section>
    <h3 className="uppercase text-xl md:text-2xl text-violet-700 dark:text:-zinc-400 font-bold mb-6">
      {children}
    </h3>
  </section>
}
export default Heading
