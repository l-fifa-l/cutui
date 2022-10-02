import React from 'react';

function Stepper({ step = 2 }) {
  const width = step * 25;
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full lg:w-1/3 bg-gray-200 rounded-full h-0.5 mb-4 mx-4">
          <div
            className={`bg-[#664DE5] h-0.5`}
            style={{ width: `${width}%` }}
          ></div>
          <div className=" flex justify-between">
            <div
              className={`h-10 w-10 rounded-full ${
                step >= 1 ? 'bg-[#664DE5]' : ' bg-gray-200'
              } -mt-6`}
            >
              <p className="flex text-xl text-white justify-center pt-1">1</p>
            </div>
            <div
              className={`h-10 w-10 rounded-full ${
                step > 2 || step === 2 ? 'bg-[#664DE5]' : ' bg-gray-200'
              } -mt-6`}
            >
              <p className="flex text-xl text-white justify-center pt-1">2</p>
            </div>
            <div
              className={`h-10 w-10 rounded-full ${
                step > 3 || step === 3 ? 'bg-[#664DE5]' : ' bg-gray-200'
              } -mt-6`}
            >
              <p className="flex text-xl text-white justify-center pt-1">3</p>
            </div>
            <div
              className={`h-10 w-10 rounded-full ${
                step === 4 ? 'bg-[#664DE5]' : ' bg-gray-200'
              } -mt-6`}
            >
              <p className="flex text-xl text-white justify-center pt-1">4</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stepper;
