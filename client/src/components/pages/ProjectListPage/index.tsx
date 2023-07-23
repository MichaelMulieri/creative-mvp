import ProjectListGrid from "../../modules/ProjectListGrid";
import ProjectListTable from "../../modules/ProjectListTable/ProjectListTable";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useEffect, useState } from "react";
import { fetchProjects } from "../../../http";
import { Link } from "react-router-dom";

interface ProjectListPageProps {
  handleGridToggle: any;
  isGrid: boolean;
}

const ProjectListPage = () => {
  const [projects, setProjects] = useState<any>(null);
  const [isGrid, setIsGrid] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      const projectsData = await fetchProjects();

      console.log(projectsData);

      setProjects(Object.values(projectsData || {}));
    };

    getProjects();
  }, []);

  const handleGridToggle = () => {
    setIsGrid((currentIsGrid) => !currentIsGrid);
  };

  // the reason we make a function and then call it in the useEffect above is because you can't
  // make the function passed to useEffect async
  // useEffect(async () => {
  //     const projects = await fetchProjects();

  //     setProjects(Object.values(projects));
  // }, []);

  const label = isGrid ? "Grid" : "Table";

  return !projects ? (
    <p>"Projects Loading"</p>
  ) : (
    <>
      <Link to="new">Create new project</Link>
      <FormGroup>
        <FormControlLabel
          control={<Switch onChange={handleGridToggle} />}
          label={label}
        />
      </FormGroup>
      {isGrid ? (
        <ProjectListGrid projects={projects} />
      ) : (
        <ProjectListTable projects={projects} />
      )}
    </>
  );
};

export default ProjectListPage;
