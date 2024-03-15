import { About } from "@/components/about-me";
import { Hero } from "@/components/hero";
import { SelectedProjects } from "@/components/projects";
import { projectsData } from "@/config/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SelectedProjects projects={projectsData} />
    </>
  );
}
