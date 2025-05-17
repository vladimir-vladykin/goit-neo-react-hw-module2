import "./App.css";
import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const SAVED_FEEDBACK_KEY = "saved_feedback";

function App() {
  // init feedback state
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem(SAVED_FEEDBACK_KEY);

    if (savedFeedback) {
      return JSON.parse(savedFeedback);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  // save feedback state in local storage when its updated
  useEffect(() => {
    window.localStorage.setItem(SAVED_FEEDBACK_KEY, JSON.stringify(feedback));
  }, [feedback]);

  // callback for updating feedback state
  const updateFeedback = (feedbackType) => {
    if (feedbackType === "good")
      setFeedback({
        ...feedback,
        good: feedback.good + 1,
      });
    if (feedbackType === "neutral")
      setFeedback({
        ...feedback,
        neutral: feedback.neutral + 1,
      });
    if (feedbackType === "bad")
      setFeedback({
        ...feedback,
        bad: feedback.bad + 1,
      });
    if (feedbackType === "reset")
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0,
      });
  };

  // render app
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  return (
    <>
      <Description />
      <Options totalFeedback={totalFeedback} onRatingUpdate={updateFeedback} />

      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
