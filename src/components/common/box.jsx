import React from 'react'

const Box = (props) => {
    const {v} = props;
  return (
      <div className="flex justify-center items-center p-md ">
        <div className="grid justify-center items-center flex ">
          <div className="bg-white m-lg  ">
            <div className="hh wx ">
              <div className="grey p-md text-md">{v.description} </div>
              <div class="flex  py-sm py-lg justify-center ">
                <div class=" w-half w-half p-sm ">
                  <img class="w-full h-full pic-radius" src={v.image} alt="" />
                </div>
                <div class=" py-sm ">
                  <div class="text-blue bold">{v.name}</div>
                  <div >{v.subName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default Box;