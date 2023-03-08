import { mockData } from "../../../mockData";
import ProjectListGrid from "../../modules/ProjectListGrid";
import ProjectListTable from "../../modules/ProjectListTable/ProjectListTable";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

interface ProjectListPageProps {
  handleGridToggle: any;
  isGrid: boolean;
}

const ProjectListPage = (props: ProjectListPageProps) => {
  const projectList = Object.values(mockData.projects);
  // const [isGrid, setIsGrid] = useState(true);

  // const handleGridToggle = () => {
  //   setIsGrid((currentIsGrid) => !currentIsGrid);
  // };

  const label = props.isGrid ? "Table" : "Grid";

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={<Switch onChange={props.handleGridToggle} />}
          label={label}
        />
      </FormGroup>
      {props.isGrid ? (
        <ProjectListGrid projects={projectList} />
      ) : (
        <ProjectListTable />
      )}
    </>
  );
};

export default ProjectListPage;
