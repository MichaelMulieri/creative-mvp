import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProject } from "../../../http";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const getProject = async () => {
      const project = await fetchProject(id as string);

      setProject(project);
    };

    getProject();
  }, [id]);

  return project ? (
    <>
      <p>{id}</p>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>{project.content}</p>
    </>
  ) : (
    <p>Project not found.</p>
  );
};

export default ProjectPage;
