import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedBackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedBackData);
  const closeFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  let sum = 0;
  feedback.forEach((item) => {
    sum += item.rating;
  });
  const averageRating = feedback.length === 0 ? 0 : sum / feedback.length;
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center gap-x-96">
        <h1 className="text-3xl bg-rose-400 text-white p-2 mt-2 rounded-md">
          {feedback.length} Reviews
        </h1>
        <h1 className="text-3xl translate-x-36 bg-rose-400 text-white p-2 mt-2 rounded-md">
          AverageRating : {averageRating}
        </h1>
      </div>
      <FeedbackList feedback={feedback} closeFeedback={closeFeedback} />
    </div>
  );
}

export default App;
