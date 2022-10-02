import React from 'react';

function StepThree() {
  return (
    <>
      <div className="grid justify-center mt-10 space-y-4">
        <h2 className="block md:text-4xl text-2xl mx-5 font-bold">
          How are you planning to use Eden?
        </h2>
        <p className="block lg:mx-auto mx-6 text-lg text-gray-400">
          We'll strearnline your setup experience accordingly.
        </p>
      </div>
      <div className="flex justify-center space-x-10 mt-7">
        <div className="h-44 w-44 rounded-md p-4 space-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10"
            viewBox="0 0 1024 1024"
            version="1.1"
            fill="#664DE5"
          >
            <path d="M512 469.333333a170.666667 170.666667 0 1 0-170.666667-170.666666 170.666667 170.666667 0 0 0 170.666667 170.666666zM768 896a42.666667 42.666667 0 0 0 42.666667-42.666667 298.666667 298.666667 0 0 0-597.333334 0 42.666667 42.666667 0 0 0 42.666667 42.666667z" />
          </svg>

          <p className="font-semibold text-lg">For myself</p>
          <p className="text-gray-600">
            Write better. Think more clearly. Stay Organized
          </p>
        </div>
        <div className="h-44 w-44 rounded-md p-4 space-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10"
            viewBox="0 0 1024 1024"
            version="1.1"
            fill="#364259"
          >
            <path d="M508.9 467.1h3c69.3-0.8 125.3-56.1 125.3-124.1v-41.4c0-68.6-56.8-124.2-126.8-124.2S383.6 233 383.6 301.6V343c0 68 56 123.3 125.3 124.1z m246 18.1c45 0 81.5-34.8 81.5-77.6v-26c0-42.9-36.5-77.6-81.5-77.6s-81.5 34.8-81.5 77.6v25.9c0 42.9 36.5 77.7 81.5 77.7z m-489 0c45 0 81.5-34.8 81.5-77.6v-26c0-42.9-36.5-77.6-81.5-77.6s-81.5 34.8-81.5 77.6v25.9c-0.1 42.9 36.4 77.7 81.5 77.7z m-117.6 79c-21.4 10.9-36.3 35.3-36.3 63.9V660c0 21.1 12.2 38.7 28.9 44.5 26 6.8 52.6 11.3 79.8 13.8V662c0-50.3 18.2-94.4 45.9-122.3h-0.7c-41.4-0.2-81.1 8.6-117.6 24.5z m724.5 0.1c-36.6-16-76.3-24.8-117.9-24.8h-0.6c27.8 28 45.9 72.1 45.9 122.3v56.4c27.1-2.5 53.8-7 79.6-13.8 16.7-5.7 29.1-23.4 29.1-44.6v-31.6c0-28.6-14.9-52.9-36.1-63.9z m-182.2-3.2c-56-25.7-116.7-39.8-180.2-39.8-63.4 0-123.9 14.1-179.8 39.6C297.9 578.2 275 617.3 275 663v51c0 33.8 18.7 62.1 44.2 71.3 61.6 16.7 125.5 25.9 191.3 25.9 65.7 0 129.5-9 191-25.8 25.7-9.1 44.4-37.5 44.4-71.3v-51c0-45.6-22.8-84.6-55.3-102z" />
          </svg>
          <p className="font-semibold text-lg">With my team</p>
          <p className="text-gray-600">
            Wikis, docs, tasks & projects, all in one place
          </p>
        </div>
      </div>
    </>
  );
}

export default StepThree;
