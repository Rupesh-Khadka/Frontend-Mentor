import React from 'react'

const ChallengeSec = (props) => {
    const {v} = props;
  return (
    <div>  <div className="flex row items-center justify-center m-md ">
    <div className="flex row wrap  w-sev">
    <div className="w-thirty   m-sm border-radius border h-for ">
      <div className="  flex row items-center justify-center   ">
        <img className="w-full h-full bdr-radius  " src= {v.image} alt="" />
      </div>
      <div className=" m-lg text-lg">{v.name}</div>
      <div className="flex m-lg items-center justify-between my-sm">
        <div className="text-sm">HTML CSS JS</div>
           <div className=' flex bdr text-md'>
            <div className="bold mx-sm bdr-g  "> {v.id} </div>
            <div className="bold color-green    ">{v.postition}</div>
          </div>
      </div>
      <div className="m-lg">{v.description}</div>
    </div>
    </div>
    </div></div>
  )
}

export default ChallengeSec;