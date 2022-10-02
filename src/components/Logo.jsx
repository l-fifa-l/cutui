import React from 'react';
import logo from '../logocut.jpeg';

function Logo() {
  return (
    <>
      <div className="flex justify-center py-16">
        <img className="h-12 w-12 mr-4" src={logo} alt="logo" />
        <h1 className=" text-3xl font-bold pt-2 ">Eden</h1>
      </div>
    </>
  );
}

export default Logo;
