import React from 'react';

function Button({ stepfun, step }) {
  return (
    <>
      <div className="flex justify-center mt-8">
        <button
          className=" w-10/12 lg:w-1/3 text-center h-12 text-white rounded-md bg-[#664DE5] outline-none"
          onClick={stepfun}
        >
          {step !== 4 ? 'Create Workspace' : 'Launch Eden'}
        </button>
      </div>
    </>
  );
}

export default Button;
