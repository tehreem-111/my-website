import React from "react";

const Upperfooter = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 px-6">
        <div >
          <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
        </div>
        <div className="flex items-center justify-center sm:justify-start">
          <input
            type="email"
            className="border border-gray-300 rounded-md px-4 py-2 mr-4 w-full sm:w-auto"
            placeholder="Enter your email address"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upperfooter;