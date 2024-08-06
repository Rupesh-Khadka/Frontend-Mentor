import React from 'react'

const TestMonial = (props) => {
    const {v} = props;
  return (
    <div>
        <div className=" grid flex justify-center items-center">
            <div className="box">
                <div className="items-center flex justify-center column  p-md ">
                    <div className="text-2xl grey bold">;;</div>
                    <p className="py-lg px-sm text-md justify-center items-center flex  text-center "> {v.description} </p>
                    <div className="w-half h-half"><img className=" w-full h-full pic-radius" src={v.image} alt=""/></div>
                    <div className="blue bold py-md">{v.user}</div>
                    <div className="grey">Web Developer & YouTuber</div>
                </div>
             </div>
        </div>
    </div>
 );
};
 export default TestMonial;