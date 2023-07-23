import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import { addIdea } from "../../../http";
import { saveIdea } from "../../../http";

const IdeaActionDial = ({ idea }: any) => {
  const handleAddToIdeas = async () => {
    const ideaData = {
      id: Date.now().toString(),
      text: idea,
    };

    const response = await addIdea(ideaData);

    if (response.success === true) {
      alert("Idea added.");
    }
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      //   sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction
        icon={<EmojiObjectsIcon />}
        tooltipTitle="Save to ideas"
        onClick={handleAddToIdeas}
      />
    </SpeedDial>
  );
};

export default IdeaActionDial;
