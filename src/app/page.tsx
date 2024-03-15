import { About } from "@/components/about-me";
import Education from "@/components/education";
import Experience from "@/components/experience";
import { Hero } from "@/components/hero";
import { SelectedProjects } from "@/components/projects";
import { projectsData } from "@/config/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SelectedProjects projects={projectsData} />
      <div className="text-center font-title text-3xl font-bold sm:text-4xl mb-16">
        Experience
      </div>
      <Experience />
      <div className="text-center font-title text-3xl font-bold sm:text-4xl mb-16 mt-28">
        Education
      </div>
      <Education />
    </>
  );
}
