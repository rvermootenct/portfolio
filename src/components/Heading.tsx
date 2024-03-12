import { ReactNode } from "react";

const Heading = ({ children }: {children: ReactNode}) => {
  return <section>
    <h3 >{children} </h3>
  </section>
}
export default Heading
