import React from "react";
import { FiEdit } from "react-icons/fi";

import { IoClose } from "react-icons/io5";

const FeedbackItem = ({ item, handleDelete, inputValue }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="shadow-lg w-[900px] text-primaryText m-3 rounded-lg p-10 relative font-sans bg-feedback">
        <p>{item.text}</p>
        <div className="flex items-center justify-center text-primaryText font-bold bg-rating absolute left-[-1rem] top-[-1rem] w-10 h-10 rounded-full">
          {item.rating}
        </div>
        <button className="absolute top-[.8em] right-10">
          <FiEdit />
        </button>
        <button
          onClick={() => handleDelete(item.id)}
          className="absolute top-[.8em] right-3 "
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default FeedbackItem;
