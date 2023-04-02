// import type { Project } from "../../../mockData";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ProjectGridCard = ({ project }: any) => {
  console.log("id", project.id);
  return (
    <Link to={project.id.toString()}>
      <Card variant="outlined" sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} gutterBottom>
            {project.name}
          </Typography>
          <Typography sx={{ fontSize: 15 }} gutterBottom>
            {project.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectGridCard;
