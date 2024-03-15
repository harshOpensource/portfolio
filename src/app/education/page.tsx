import Education from "@/components/education";
import PageTitle from "@/components/projects/page-title";

type Props = {};

const EducationPage = (props: Props) => {
  return (
    <div>
      <PageTitle
        title="Education"
        description="Exploring Data Science and IT Learning Journeys ✨📚"
      />
      <Education />
    </div>
  );
};

export default EducationPage;
