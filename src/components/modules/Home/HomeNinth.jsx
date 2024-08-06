import React from 'react'
const HomeNinth = () => {
  return (
    <div>
         <div className="  flex  justify-between bg-blue p  relative ">
                <div className=" p-xl w-half flex items-center justify-center column">
                    <div className=" px-xl py-sm bold white text-lg wm">Are you looking to hire talented, passionate developers?</div>
                    <p className=" px-xl white py-sm text-md wm">Our Hiring Platform helps you connect with our diverse community of talented early-career developers. Stop wading through hundreds of resumes and get chatting to skilled developers in minutes.</p>
                    <button className="bold blue p-sm border-radius">START HIRING DEVELOPERS</button>
                </div>
                <div className="w-half justify-between">
                    <img className="two" src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-hiring.webp&w=1080&q=75" alt=""/></div>
            </div>
    </div>
  );
};



export default HomeNinth;