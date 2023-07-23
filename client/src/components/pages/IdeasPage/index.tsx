import { useEffect, useState } from "react";
import { fetchIdeas } from "../../../http";

const IdeasPage = ({ whatever }: any) => {
  const [ideas, setIdeas] = useState<any[]>([]);

  useEffect(() => {
    const getIdeas = async () => {
      const ideasData = await fetchIdeas();

      setIdeas(Object.values(ideasData));
    };

    getIdeas();
  }, []);

  return (
    <>
      <h2>Ideas Page Place Holder</h2>;
      {ideas.map((idea) => (
        <p>{idea.text}</p>
      ))}
    </>
  );
};

export default IdeasPage;
