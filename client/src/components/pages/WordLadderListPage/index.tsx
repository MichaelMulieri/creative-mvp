//@ts-nocheck
import { useState, useEffect } from "react";
import WordladderListGrid from "../../modules/WordladderListGrid";
import WordladderListTable from "../../modules/WordladderListTable/WordladderListTable";
import { fetchWordLadders } from "../../../http";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";

interface WordladderListPageProps {}

// add state to hold word ladder list
// add useEffect to get the wordLadders, sets the word ladder state
// conditionally render loading state or content depending on whether we have wordladders
const WordladderListPage = () => {
  const [isWordladderGrid, setIsWordladderGrid] = useState(true);
  const [wordLadderList, setWordLadderList] = useState<any>(null);

  const handleWordladderGridToggle = () => {
    setIsWordladderGrid((currentIsWordladderGrid) => !currentIsWordladderGrid);
  };

  useEffect(() => {
    const getLadderList = async () => {
      const wordLadderListData = await fetchWordLadders();

      setWordLadderList(Object.values(wordLadderListData));
    };

    getLadderList();
  }, []);

  const label = isWordladderGrid ? "Table" : "Grid";

  return (
    <>
      <Link to="new">Create new word ladder</Link>
      {!wordLadderList || wordLadderList?.length < 1 ? (
        <p>No Word Ladder List Available.</p>
      ) : (
        <>
          <FormGroup>
            <FormControlLabel
              control={<Switch onChange={handleWordladderGridToggle} />}
              label={label}
            />
          </FormGroup>
          {isWordladderGrid ? (
            <WordladderListGrid wordladders={wordLadderList} />
          ) : (
            <WordladderListTable />
          )}
        </>
      )}
    </>
  );
};

export default WordladderListPage;
