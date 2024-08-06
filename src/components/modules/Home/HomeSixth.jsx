import React from 'react'

export const HomeSixth = () => {
  return (
    <div className=" mx-xl ">
          <div className=" m-m justify-center flex items-center flex column w-full ">
                <div className=" m-m text-xl wd text-center py-md ">Take your skills to the next level with our <span className="bold bg-secondary px-sm ">PRO</span> subscription</div>
                <div className="text-center txt-2xl grey wd">Step into the shoes of a professional developer and build projects in the most realistic way possible. Our Pro subscription will help you prepare for life as a professional developer.</div>
            </div>
            <div classNames="w-half">
                <div className="flex justify-center border-radius">
                    <div className=" grid flex justify-center items-center m-xl">
                        <div className="bg-white wm">
                            <div className="items-center flex  column  p-md ">
                                <div className="text-xl py-xl">😈 </div>
                                <div className=" text-lg py-lg">Access each challenge’s design file</div>
                                <div className="text-center text-md py-sm grey py-xl">Professional teams use tools like Figma. By using these tools when building projects, you’ll save time, create more accurate solutions, and gain hands-on experience working like a pro.</div>
                            </div>
                        </div>
                    </div>
                    <div className=" grid flex justify-center items-center m-md p-xl">
                        <div className="bg-white wm">
                            <div className="items-center flex  column  p-md ">
                                <div className="text-xl py-xl">🤩 </div>
                                <div className="  text-lg py-lg">Tackle our premium challenges</div>
                                <div className="text-center text-md py-sm grey py-lg">Our premium challenges are the most realistic, comprehensive practice projects you’ll find. They also make incredible portfolio pieces to help you “wow!” recruiters and get hired.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-center flex items-center ">
                <button className="learn w-lg">LEARN ABOUT PRO</button>
            </div>
    </div>
  );
};

export default HomeSixth;
