// MultipleTest.js
import React from "react";

const MultipleTest = (props) => {
const {v}=props;
return (
    <div className="multiple items-center justify-center flex">
        {/* First Section */}
        <div className="pic my-xl flex justify-between items-center">
            <div className="py-xl h-half w-half">
                <img className="py-xl h-full w-full" src={v.image} alt=""/>
            </div>
            <div className="w-half mx-xl flex flex-col items-center justify-center">
                <div className="px-xl">
                    <div className="py-xl text-2xl">{v.emoji}</div>
                    <div className="py-xl text-lg text-xl">{v.title}</div>
                    <p className="grey text-md">{v.description}</p>
                </div>
            </div>
        </div>

        {/* Second Section */}
        <div className="pic my-md flex justify-between items-center">
            <div className="w-half mx-xl flex flex-col items-center justify-center">
                <div className="px-xl">
                    <div className="py-xl text-2xl">{v.Emoji}</div>
                    <div className="py-xl text-lg text-xl">{v.Title}</div>
                    <p className="grey text-md">{v.Description}</p>
                </div>
            </div>
            <div className="py-xl h-half w-half">
                <img className="py-xl h-full w-full" src={v.Image} alt=""/>
            </div>
        </div>
    </div>
);
    
    
};

export default MultipleTest;
