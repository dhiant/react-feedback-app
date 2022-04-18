import React from "react";

const ReviewBox = ({
  sendInput,
  submitInput,
  sendRating,
  currentRating,
  inputValue,
}) => {
  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="p-2">
      <div className="mx-0 sm:mx-auto  text-center bg-feedback text-primaryText p-6 sm:p-10 sm:w-[600px] w-full rounded-lg font-sans">
        <h1 className="text-lg">How would you rate your service with us?</h1>
        <ul className="flex flex-wrap justify-center gap-2 pt-4">
          {ratings.map((rating) => (
            <li key={rating} onClick={() => sendRating(rating)}>
              <button
                className={`${
                  currentRating === rating ? "bg-rating" : ""
                } bg-background hover:bg-rating active:bg-rating w-10 h-10 rounded-full font-sans`}
              >
                {rating}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap justify-between">
          <input
            value={inputValue}
            onChange={sendInput}
            type="text"
            placeholder="Write a review"
            className="w-full sm:w-96 py-3 mt-4 rounded-md pl-8 bg-background placeholder:text-primaryText"
          />
          <button
            onClick={submitInput}
            className="px-4 py-2 font-bold font-mono md:h-12 mt-4 bg-rating rounded-md  active:transition-transform active:duration-200 hover:bg-background hover:border-4 hover:border-rating disabled:bg-background disabled:hover:border-0 disabled:hover:scale-100"
            disabled={inputValue.trim().length < 10 ? true : false}
          >
            Send
          </button>
        </div>
        {inputValue.length > 0 && (
          <h1 className="text-primaryText text-lg pt-3">
            Text must be at least 10 characters
          </h1>
        )}
      </div>
    </div>
  );
};

export default ReviewBox;
