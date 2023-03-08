import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const WordladderGridCard = ({ wordladder }: any) => {
  return (
    <Link to={wordladder.id}>
      <Card variant="outlined" sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} gutterBottom>
            {wordladder.name}
          </Typography>
          {/* <Typography sx={{ fontSize: 15 }} gutterBottom>
            {props.description}
          </Typography> */}
        </CardContent>
      </Card>
    </Link>
  );
};

export default WordladderGridCard;
