import { mockData } from "../../../mockData";
import ProjectListGrid from "../../modules/ProjectListGrid";

const ProjectListPage = () => {
  const projectList = Object.values(mockData.projects);

  return (
    <ProjectListGrid projects={projectList}>
      Project List Page Place Holder
    </ProjectListGrid>
  );

  // return <ProjectListGrid projects={projectsList} />

  // eventually:
  // return isProjectGird ? <ProjectListGrid projects={projectsList} /> : <ProjectListTable projects={projectsList} />
};

export default ProjectListPage;
