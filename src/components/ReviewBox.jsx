import React from "react";

const ReviewBox = () => {
  return (
    <div className="mx-auto flex flex-col justify-center bg-rating text-primaryText p-10 w-full md:w-[600px] lg:ml-8 rounded-lg font-serif">
      <h1 className="text-xl pl-10">
        How would you rate your service with us?
      </h1>
      <ul className="flex flex-wrap justify-center   pt-4">
        <li className="">
          <button className="bg-background w-10 h-10  mr-2 rounded-full font-sans">
            1
          </button>
        </li>

        <li>
          <button className="bg-background w-10 h-10  mr-2 rounded-full font-sans">
            2
          </button>
        </li>
        <li>
          <button className="bg-background w-10 h-10  mr-2 rounded-full font-sans">
            3
          </button>
        </li>
        <li>
          <button className="bg-background w-10 h-10  mr-2 rounded-full font-sans">
            4
          </button>
        </li>
        <li>
          <button className="bg-background w-10 h-10  mr-2 rounded-full font-sans">
            5
          </button>
        </li>
        <li>
          <button className="bg-background w-10 h-10  mr-2 rounded-full font-sans">
            6
          </button>
        </li>
        <li>
          <button className="bg-background w-10 h-10  mr-2 rounded-full font-sans">
            7
          </button>
        </li>
        <li>
          <button className="bg-background w-10 h-10  mr-2 rounded-full font-sans">
            8
          </button>
        </li>
        <li>
          <button className="bg-background w-10 h-10  mr-2 rounded-full font-sans">
            9
          </button>
        </li>
        <li>
          <button className="bg-background w-10 h-10  mr-2 rounded-full font-sans">
            10
          </button>
        </li>
      </ul>
      <div className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="Write a review"
          className="w-96 py-3 mt-4 rounded-md pl-8"
        />
        <button className=" w-14 h-10 md:h-12 mt-4 bg-background rounded-md font-sans">
          Send
        </button>
      </div>
    </div>
  );
};

export default ReviewBox;
