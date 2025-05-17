const Options = () => {
  return (
    <div>
      <button onClick={() => console.log("good")}>Good</button>
      <button onClick={() => console.log("neutral")}>Neutral</button>
      <button onClick={() => console.log("Bad")}>Bad</button>
      <button onClick={() => console.log("Reset")}>Reset</button>
    </div>
  );
};

export default Options;
