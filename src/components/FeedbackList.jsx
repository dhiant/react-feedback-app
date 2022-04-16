import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, handleDelete }) => {
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
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default FeedbackList;
