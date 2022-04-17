import React from "react";

import { IoClose } from "react-icons/io5";

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="shadow-lg w-[900px] text-primaryText m-3 rounded-lg p-10 relative font-sans bg-feedback">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          blanditiis officiis consectetur facere a velit voluptates voluptatibus
          repudiandae accusantium, minima tenetur ea totam vitae doloremque rem
          ab, labore laborum debitis.
        </p>
        <div className="text-primaryText font-bold bg-rating absolute left-[-1rem] top-[-1rem] p-3 rounded-full">
          {item.rating}
        </div>
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
