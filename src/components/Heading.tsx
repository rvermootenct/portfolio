import { ReactNode } from "react";

const Heading = ({ children }: {children: ReactNode}) => {
  return <section>
    <h3 className="capitalize text-base md:text-lg text-violet-700 dark:text:-zinc-400 font-bold mb-3">
      {children}
    </h3>
  </section>
}
export default Heading
