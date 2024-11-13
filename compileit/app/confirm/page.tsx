import React from 'react';

const Page = () => {
  return (
    <div>
         <h1 className="titel">Vem bokar?</h1>
  
    <div className="flex flex-col justify-center items-center ">

      <div className="w-full max-w-xs">
        <label className="form-control w-full">
          <div className="label flex justify-between items-center">
            <span className="label-text">Förnman och efternamn</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </label>
      </div>
    </div>
    </div>
  );
};

export default Page;
