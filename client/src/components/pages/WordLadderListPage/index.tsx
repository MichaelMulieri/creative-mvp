import { mockData } from "../../../mockData";
import { useState } from "react";
import WordladderListGrid from "../../modules/WordladderListGrid";
import WordladderListTable from "../../modules/WordladderListTable/WordladderListTable";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";

interface WordladderListPageProps {
  handleWordladderGridToggle: any;
  isWordladderGrid: boolean;
}

const WordladderListPage = (props: WordladderListPageProps) => {
  const wordladderList = Object.values(mockData.wordladders);
  const [isWordladderGrid, setIsWordladderGrid] = useState(true);

  const handleWordladderGridToggle = () => {
    setIsWordladderGrid((currentIsWordladderGrid) => !currentIsWordladderGrid);
  };

  const label = isWordladderGrid ? "Table" : "Grid";

  return (
    <>
      <Link to="new">Create new word ladder</Link>
      <FormGroup>
        <FormControlLabel
          control={<Switch onChange={handleWordladderGridToggle} />}
          label={label}
        />
      </FormGroup>
      {props.isWordladderGrid ? (
        <WordladderListGrid wordladders={wordladderList} />
      ) : (
        <WordladderListTable />
      )}
    </>
  );
};

export default WordladderListPage;
