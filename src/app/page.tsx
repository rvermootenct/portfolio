import ExternalLinks from "@/components/ExternalLinks";
import Header from "@/components/Header";
import About from "@/components/About"

export default function Home() {
  return (
    <main className="max-w-screen-xl w-full mx-auto px-4">
      <div className="mt-20">
        <Header />
        <ExternalLinks />
        <About />
      </div>
   </main>
  )
}
 