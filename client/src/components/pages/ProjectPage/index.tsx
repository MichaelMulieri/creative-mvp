import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProject, saveProject } from "../../../http";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    const getProject = async () => {
      const project = await fetchProject(id as string);

      setProject(project);
      setContent(project.content);
    };

    getProject();
  }, [id]);

  const handleChangeContent = (value: string) => {
    setContent(value);
  };

  const handleSaveProject = async () => {
    const response = await saveProject({ ...project, content });

    if (response.success) {
      setProject({ ...project, content });
      alert("project saved");
    }
  };

  return project ? (
    <>
      <p>{id}</p>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <TextField
        multiline
        label="Project Content"
        variant="filled"
        fullWidth
        minRows={20}
        value={content}
        onChange={(event) => handleChangeContent(event.target.value)}
      />
      <Button onClick={handleSaveProject} variant="outlined" type="submit">
        Save Project
      </Button>
    </>
  ) : (
    <p>Project not found.</p>
  );
};

export default ProjectPage;
