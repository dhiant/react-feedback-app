import React from "react";

const ConfirmationWindow = ({ handleConfirmDelete, handleCancel }) => {
  return (
    <div className="bg-feedback w-96 text-center mx-auto text-primaryText rounded-lg font-mono py-8 mt-4">
      <h3 className="pt-1">Are you sure want to delete?</h3>
      <div className="text-center mt-2 mr-4 font-serif">
        <button
          className="bg-background mr-4 w-20 h-8 rounded-lg"
          onClick={handleConfirmDelete}
        >
          Ok
        </button>
        <button
          className="bg-background w-20 h-8 rounded-md"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmationWindow;
