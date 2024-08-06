import React from "react";

const LearningFirst = () => {
  return (
    <div class='p-sm bold bg-white h-xl '>
      <div class='px-xl border-both  '>
        <i>
          <div className='border-hand'>LEARNING PATHS</div>
        </i>
      </div>
      <div class='flex p-xl justify-between  '>
        <div class='   flex items-center justify-center column  '>
          <div class='px-xl '>
            <div class='text-2xl mx-xl p-md blue'>Learning paths</div>
            <div class='grey mx-xl p-md text-md '>
              Our learning paths help you improve your front-end skills step by
              step. Each path covers a different topic, guiding you through
              essential front-end development topics to become a skilled
              developer.
            </div>
          </div>
        </div>
        <div class='w-half h-half '>
          <img
            class='how'
            src='https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Flearning-paths-hero.webp&w=1200&q=75'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default LearningFirst;
