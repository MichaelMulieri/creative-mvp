// import type { Project } from "../../../mockData";

const ProjectGridCard = ({ project }: any) => {
  return (
    <div style={{ padding: "30px" }}>
      {project.name}
      {project.description}
    </div>
  );
};

export default ProjectGridCard;
