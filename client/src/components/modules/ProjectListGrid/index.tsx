// import type { Project } from "../../../mockData";
// maps through projects, renders a new
// ProjectCard component for each project
import ProjectGridCard from "../ProjectGridCard";
import styles from "./ProjectListGrid.module.css";

const ProjectListGrid = ({ projects, children }: any) => {
  return (
    <>
      {children}
      <div className={styles.gridContainer}>
        {projects.map((project: any) => (
          <ProjectGridCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectListGrid;
