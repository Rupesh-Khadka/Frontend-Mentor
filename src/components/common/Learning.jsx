import React from "react";

const Learning = (props) => {
  const { v } = props;
  return (
    <section className=' none flex align-center justify-center'>
      <div class='white-bg flex  py-lg w-six w-sev '>
        <div className=''>
          <div className=' flex bdr '>
            <div className='bold mx-sm bdr-g  '>{v.id}</div>
            <div className='bold color-green    '>{v.state}</div>
          </div>
          <div class='m-sm my-md text-lg'>{v.title} </div>
          <div className='px-sm w-h m-sm my-md text-md'>{v.description}</div>
        </div>
        <div className='w-full px-md '>
          <img className=' w-full h-full border-radius ' src={v.image} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Learning;
