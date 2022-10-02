import React from 'react';

function StepFour() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=" m-auto w-16 bg-[#664DE5] p-3 rounded-full mt-20"
        viewBox="0 0 490 490"
        fill="white"
      >
        <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 " />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
      <div className="grid justify-center mt-10 mb-20   space-y-7">
        <h2 className="block md:text-4xl text-center text-2xl mx-5 font-bold">
          Congratulations, Eren!
        </h2>
        <p className="block lg:mx-auto mx-6 text-lg text-gray-400">
          You have completed onboarding, you can start using the Eden!
        </p>
      </div>
    </>
  );
}

export default StepFour;
