import React from 'react'

export const FrstSection = () => {
  return (
    <div>
        <div className=" px-xl py-xl my-xl flex justify-between items.center">
            <div className=" w-half  justify-between px-xl my-md">
                <div className=" items-center flex justify-center column px-xl ">
                    <div className=" text-primary bold text-2xl  px-xl blue ">Improve your coding skills by building realistic projects</div>
                    <div className="  text-md  px-xl grey py-lg">Our professionally designed challenges help you gain hands-on experience writing HTML, CSS, and JavaScript. We create the designs so you can focus on the code and see your skills skyrocket!</div>
                    <div>
                        <button className="my-xl text-lg bg-red">LOG IN WITH GITHUB <span className="text-md "> <i className="fab fa-github p-sm"></i></span></button>
                    </div>
                    <div className="my-lg ">
                        <div className="flex items-center justify-between ">
                            <div><img className=" w-full h-full" src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-community-avatars.webp&w=384&q=75" alt=""/></div>
                            <div className="text-md w-full h-full">Join 824,829 developers building projects, reviewing code, and helping each other improve.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-half">
                <img className="w-full h-full my-xs " src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-hero.webp&w=1920&q=75" alt=""/>
            </div>
        </div>
    </div>
  );
};
 export default FrstSection;