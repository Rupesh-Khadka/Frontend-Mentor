import React from 'react'

const Holder = () => {
  return (
    <div className="bg-grey ">
     <div className="items-center flex justify-between bold p-md">
      <div className="mx-xl text-xl">A little ❤️ from our community</div>
      <div className="mx-xl">
        <button className="btn-blue">
          <i className="fas fa-arrow-left arrow"></i>
        </button>
        <button className="btn-blue">
          <i className="fas fa-arrow-right arrow"></i>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Holder;






