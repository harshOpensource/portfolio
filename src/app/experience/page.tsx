import Experience from "@/components/experience";
import PageTitle from "@/components/projects/page-title";

type Props = {};

const ExperiencePage = (props: Props) => {
  return (
    <div className="mb-16">
      <PageTitle
        title="Experience"
        description="Exploring Professional Journey 🚀"
      />
      <Experience />
    </div>
  );
};

export default ExperiencePage;
