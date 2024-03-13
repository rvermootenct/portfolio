import ExternalLinks from "@/components/ExternalLinks";
import Header from "@/components/Header";
import About from "@/components/About"
import Skills from "@/components/Skills";
import WorkHistory from "@/components/WorkHistory";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="max-w-screen-xl w-full mx-auto px-4">
      <div className="mt-20">
        <Header />
        <ExternalLinks />
        <About />
        <Skills />
        <WorkHistory />
        <Projects />
      </div>
   </main>
  )
}
 