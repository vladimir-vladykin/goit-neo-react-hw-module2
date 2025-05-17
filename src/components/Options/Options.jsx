import styles from "./Options.module.css";

const Options = ({ totalFeedback, onRatingUpdate }) => {
  return (
    <div className={styles.options}>
      <button onClick={() => onRatingUpdate("good")}>Good</button>
      <button onClick={() => onRatingUpdate("neutral")}>Neutral</button>
      <button onClick={() => onRatingUpdate("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={() => onRatingUpdate("reset")}>Reset</button>
      )}
    </div>
  );
};

export default Options;
