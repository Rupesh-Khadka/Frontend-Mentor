import React from 'react'

 const HomeFifth = () => {
  return (
    <div className="sec-btn py-xl">
         <div className=" flex justify-between items-center">
                <div className="  w-half h-full justify-center items-center flex column">
                    <div className="">
                        <div className="my-xl bold text-lg">How it works </div>
                        <button className="bom my-md"><li className="lib flex mx-lg ">1</li>Choose your Challenge</button>
                        <button className="bom my-md"><li className="lib flex mx-lg ">2</li>Code the design</button>
                        <button className="bom my-md"><li className="lib flex mx-lg ">3</li>Submit your solution</button>
                        <button className="bom my-md"><li className="lib flex mx-lg ">4</li>Give others feedback</button>
                    </div>
                </div>
                <div className="h-half w-half ">
                    <img className=" how  " src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-how-it-works-4.webp&w=1200&q=75" alt=""/>
                </div>
            </div>
    </div>
  );
};

export default HomeFifth;
