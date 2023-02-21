// import type { Project } from "../../../mockData";
// maps through projects, renders a new
// ProjectCard component for each project
import ProjectGridCard from "../ProjectGridCard";

const ProjectListGrid = ({ projects, children }: any) => {
  return (
    <>
      {children}
      {projects.map((project: any) => (
        <ProjectGridCard project={project} />
      ))}
    </>
  );
};

export default ProjectListGrid;
