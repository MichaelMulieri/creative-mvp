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

const ProjectListPage = (props: ProjectListPageProps) => {
  const [projects, setProjects] = useState<any>(null);

  useEffect(() => {
    const getProjects = async () => {
      const projects = await fetchProjects();

      setProjects(Object.values(projects));
    };

    getProjects();
  }, []);

  const label = props.isGrid ? "Table" : "Grid";

  return !projects ? (
    <p>"Projects Loading"</p>
  ) : (
    <>
      <Link to="new">Create new project</Link>
      <FormGroup>
        <FormControlLabel
          control={<Switch onChange={props.handleGridToggle} />}
          label={label}
        />
      </FormGroup>
      {props.isGrid ? (
        <ProjectListGrid projects={projects} />
      ) : (
        <ProjectListTable projects={projects} />
      )}
    </>
  );
};

export default ProjectListPage;
