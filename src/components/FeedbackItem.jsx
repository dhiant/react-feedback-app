import React from "react";

import { IoClose } from "react-icons/io5";

const FeedbackItem = ({ item, closeFeedback }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-red-400 w-96 text-white m-12 rounded-lg p-10 relative font-sans">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          blanditiis officiis consectetur facere a velit voluptates voluptatibus
          repudiandae accusantium, minima tenetur ea totam vitae doloremque rem
          ab, labore laborum debitis.
        </p>
        <div className="text-white  bg-rose-400 absolute left-[-1rem] top-[-1rem] p-3 rounded-full">
          {item.rating}
        </div>
        <button
          onClick={() => closeFeedback(item.id)}
          className="absolute top-[.8em] right-3 "
        >
          {" "}
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default FeedbackItem;
