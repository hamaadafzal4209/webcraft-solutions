import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <div>
      <button
        type="button"
        class="text-white bg-gradient-to-br from-blue-800 via-purple-700 to-pink-600 hover:bg-gradient-to-tl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2"
      >
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
