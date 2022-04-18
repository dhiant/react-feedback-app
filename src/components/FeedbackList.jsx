import React from "react";
import FeedbackItem from "./FeedbackItem";
import Summary from "./Summary";

const FeedbackList = ({ feedback, handleDelete, averageRating }) => {
  if (feedback.length === 0 || !feedback) {
    return (
      <p className="text-center text-4xl font-serif pt-10 text-primaryText">
        No Feedback
      </p>
    );
  }
  return (
    <div>
      <Summary averageRating={averageRating} feedback={feedback} />
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default FeedbackList;
