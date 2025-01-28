import React from 'react';
// import { RxCross1 } from 'react-icons/rx';

const Upperheader = () => {
  return (
    <div className="flex items-center justify-center bg-black px-4 py-2 h-auto sm:h-[38px] w-full">
      <span className="text-white text-sm sm:text-base text-center flex-1 sm:flex-none">
        Sign up and get 20% off your first order.
        <a className="mx-1 underline hover:text-gray-300" href="/home">
          Sign Up Now
        </a>
      </span>

    </div>
  );
};

export default Upperheader;