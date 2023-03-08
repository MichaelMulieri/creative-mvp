import { mockData } from "../../../mockData";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { id } = useParams();

  const project = mockData?.projects[id ?? ""];

  return project ? (
    <>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </>
  ) : (
    <p>Project not found.</p>
  );
};

export default ProjectPage;
