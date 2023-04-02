import WordladderGridCard from "../WordladderGridCard";
import styles from "./WordladderListGrid.module.css";

const WordladderListGrid = ({ wordladders, children }: any) => {
  return (
    <>
      {children}
      <div className={styles.gridContainer}>
        {wordladders.map((wordladder: any) => (
          <WordladderGridCard key={wordladder.id} wordladder={wordladder} />
        ))}
      </div>
    </>
  );
};

export default WordladderListGrid;
