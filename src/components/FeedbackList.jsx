import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, closeFeedback }) => {
  if (feedback.length === 0 || !feedback) {
    return (
      <p className="text-center text-4xl font-serif pt-10 ">No Feedback</p>
    );
  }
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} closeFeedback={closeFeedback} />
      ))}
    </div>
  );
};

export default FeedbackList;
