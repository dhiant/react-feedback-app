import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback}) => {
  if (feedback.length === 0 || !feedback) {
    return (
      <p className="text-center text-4xl font-serif pt-10 text-primaryText">
        No Feedback
      </p>
    );
  }
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} />
      ))}
    </div>
  );
};

export default FeedbackList;
