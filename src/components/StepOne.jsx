import React from 'react';

function StepOne() {
  return (
    <>
      <div className="grid justify-center mt-10 space-y-4">
        <h2 className="block m-auto md:text-4xl text-2xl font-bold">
          Welcome! First things first...
        </h2>
        <p className="block m-auto text-lg text-gray-400">
          You can always change them later.
        </p>
      </div>
      <div className="m-auto w-10/12 lg:w-1/3 space-y-4 mt-10">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Full Name
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
            Display Name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5 outline-none"
            placeholder="Steve"
            required
          />
        </div>
      </div>
    </>
  );
}

export default StepOne;
