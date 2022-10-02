import React from 'react';

function StepTwo() {
  return (
    <>
      <div className="grid justify-center mt-10 space-y-4">
        <h2 className="block md:text-4xl text-2xl mx-5 font-bold">
          Let's set up a home for all your work
        </h2>
        <p className="block m-auto text-lg text-gray-400">
          You can always create another workspace later
        </p>
      </div>
      <div className="m-auto w-10/12 lg:w-1/3 space-y-4 mt-10">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Workspace Name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5 outline-none"
            placeholder="Steve Jobs"
            required
          />
        </div>
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Workspace URL <span>(option)</span>
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md ">
              www.eden.com/
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none rounded-r-lg bg-white border border-gray-300 text-gray-900 text-base block w-full p-2.5 outline-none"
              placeholder="Example"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default StepTwo;
