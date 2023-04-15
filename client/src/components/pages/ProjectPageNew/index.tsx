import { TextField, Button } from "@mui/material";
import { useState, FormEvent } from "react";
import { addProject } from "../../../http";
import { useNavigate } from "react-router-dom";

const ProjectPageNew = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [descValidationError, setDescValidationError] = useState(false);
  const navigate = useNavigate();

  const handleCreateProject = async (e: FormEvent) => {
    e.preventDefault();

    const project = {
      name,
      description: desc,
      createdAt: Date.now(),
      id: Date.now().toString(),
    };

    const response: any = await addProject(project);

    if (response.error === true) {
      alert("there was an error try again");

      return;
    }

    navigate("/projects");
  };

  const handleSetDesc = (e: any) => {
    setDesc(e.target.value);
    if (e.target.value.length > 1000) {
      setDescValidationError(true);
    } else {
      setDescValidationError(false);
    }
  };

  return (
    <>
      <h2>Create New Project</h2>
      <form onSubmit={handleCreateProject}>
        <TextField
          label="Project Name"
          variant="filled"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          multiline
          label="Project Description"
          variant="filled"
          fullWidth
          minRows={10}
          value={desc}
          onChange={handleSetDesc}
          error={descValidationError}
          helperText={
            descValidationError
              ? "Description must be 1,000 character or less."
              : null
          }
        />
        <Button variant="outlined" type="submit">
          Create Project
        </Button>
      </form>
    </>
  );
};

export default ProjectPageNew;
