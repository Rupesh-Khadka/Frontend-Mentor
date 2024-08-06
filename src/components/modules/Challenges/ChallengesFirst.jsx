import React from "react";

const ChallengesFirst = () => {
  return (
    <section className='none p-xl border-both flex justify-between'>
      <div className="bold text-md">Challenges</div>
      <div className='flex justify-between mx-xl'>
        <button className="none px-xl bold">Sort BY</button>
        <button className="none px-xl bold">Filter BY</button>
      </div>
    </section>
  );
};

export default ChallengesFirst;
