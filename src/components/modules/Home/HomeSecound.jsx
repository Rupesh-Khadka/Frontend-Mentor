import React from 'react'
import  TestMonial  from '../../common/TestMonial';


const HomeSecound = () => {
    const testMonial = [
        {
        id: 1,
        user: "KEVIN POWELL",
        description: "I highly recommend Frontend Mentor. Skip the search for project ideas and dive into ready-made challenges that help you level up as a developer.",
        image: "https://cdn.leonardo.ai/users/33a92113-c2e8-4a6b-830a-5f8048b03683/generations/94e3a791-3b45-45e8-aac6-7238dc1ccde5/Default_only_men_face_plain_white_background_passport_size_1.jpg",
         },
   
   
   
        { 
        id: '1',
        user: "JESSICA CHAN",
        description: "Frontend Mentor is a win-win. You can sharpen your skills building websites and add finished projects to your portfolio to help land a job!",
        image: "https://cdn.leonardo.ai/users/33a92113-c2e8-4a6b-830a-5f8048b03683/generations/307ad244-a3c3-41be-ad61-ddb5ef44e864/Default_only_women_face_plain_white_background_passport_size_7.jpg",
         },
    ];

  return (
    <div className="flex items-center justify-center" >
        { testMonial.map((v,key)=>(
                <TestMonial key={key}  v={v} />
            ))}
    </div>
);
};
 export default HomeSecound;