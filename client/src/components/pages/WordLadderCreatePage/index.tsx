import { KeyboardEvent, MouseEvent, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import ScrambledWordPairs from "../../modules/ScrambledWordPairs";
import WordLadderForm from "../../modules/WordLadderForm";
import Modal from "../../UIElements/Modal";
import useLocalStorageState from "../../../hooks/useLocalStorageState";
import ProjectPageNew from "../ProjectPageNew";
import { FormEvent } from "react";
import { addProject } from "../../../http";
import { useNavigate } from "react-router-dom";
// import { addWordLadder } from "../../../http";

const WordLadderCreatePage = () => {
  const [scrambledWords, setScrambledWords] = useLocalStorageState(
    "scrambledWords",
    []
  );
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);

  const openCreateProjectModalHandler = () => {
    setShowCreateProjectModal(true);
    console.log(showCreateProjectModal);
  };
  const closeCreateProjectModalHandler = (event: MouseEvent) => {
    setShowCreateProjectModal(false);
  };

  // const [wordPairs, setWordPairs] = useState({});

  const handleReset = (event: MouseEvent | KeyboardEvent) => {
    event.preventDefault();
    setScrambledWords([]);
  };

  return (
    <Box>
      <Modal
        show={showCreateProjectModal}
        onCancel={closeCreateProjectModalHandler}
        footer={
          <Button onClick={closeCreateProjectModalHandler}>CANCEL</Button>
        }
      />
      <Typography variant="h3" component="h1">
        Word Ladder
      </Typography>
      {scrambledWords.length === 0 ? (
        <WordLadderForm setScrambledWords={setScrambledWords} wordAmount={10} />
      ) : (
        <>
          <ScrambledWordPairs theScrambledWords={scrambledWords} />

          <Button variant="outlined" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="outlined" onClick={openCreateProjectModalHandler}>
            Create A Project
          </Button>
        </>
      )}
      {/* <ProjectPageNew scrambledWords={scrambledWords} /> */}
    </Box>
  );
};

export default WordLadderCreatePage;
