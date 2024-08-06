import React from "react";

const ChallengesThird = () => {
  return (
    <div className="bg-blue white m-sm mx-xl flex justify-center items-center column h-h border-radius">
      <div className="flex justify-center items-center" >
        <div className="m-md text-xl"><i class="fa-brands fa-discord"></i></div>
        <div className="bold text-xl">Discord</div>
      </div>
      <div className="text-xl py-md">JOIN OUR DISCORD COMMUNITY</div>
      <div className="w-half text-center py-sm text-lg">
        Join thousands of Frontend Mentor community members taking the
        challenges, sharing resources, helping each other, and chatting about
        all things front-end!
      </div>
      <button className="my-md py-sm bold border-radius">JOIN OUR DISCORD</button>
    </div>
  );
};

export default ChallengesThird;
