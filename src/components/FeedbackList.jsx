import React from "react";
import FeedbackItem from "./FeedbackItem";
import Summary from "./Summary";
import { AnimatePresence, motion } from "framer-motion";

const FeedbackList = ({
  feedback,
  handleDelete,
  averageRating,
  handleEdit,
}) => {
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
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
