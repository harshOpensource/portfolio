import PageTitle from "@/components/projects/page-title";
import ProjectCards from "@/components/projects/project-cards";
import { projectsData } from "@/config/projects";

const title = "Projects";
const description = "The list of my projects.";

type ProjectsPageProps = {
  params: Record<string, never>;
  searchParams: Record<string, never>;
};

function ProjectsPage() {
  return (
    <div className="mb-16">
      <PageTitle
        title="Projects"
        description="The list of my projects. Everything was made with ❤️."
      />
      <ProjectCards projects={projectsData} />
    </div>
  );
}

export default ProjectsPage;
