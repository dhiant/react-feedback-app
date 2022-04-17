import React from 'react'

const Summary = ({averageRating,feedback}) => {
  return (
    <div className="flex justify-around items-center font-serif font-bold mt-3 mb-2">
        <h1 className="md:text-2xl text-lg text-primaryText rounded-md font-sans">
          {feedback.length} Reviews
        </h1>
        <h1 className="md:text-2xl text-lg text-primaryText rounded-md font-sans">
          Average-Rating : {averageRating}
        </h1>
      </div>
  )
}

export default Summary
