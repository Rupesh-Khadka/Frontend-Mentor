import React from 'react';
import Box from'../../common/box'
import Holder from '../../common/holder';
const HomeSeventh = () => {
    const testBox = [
      {
        image:"https://cdn.leonardo.ai/users/33a92113-c2e8-4a6b-830a-5f8048b03683/generations/307ad244-a3c3-41be-ad61-ddb5ef44e864/Default_only_women_face_plain_white_background_passport_size_7.jpg",
        name:"Francesca",
        subName:"@frrann",
        description:"This platform provides everything developers need to improve their skills. The community is great, and the challenges keep me motivated, instil accountability through regular submissions, and allow me to build a professional portfolio by showcasing diverse projects.",
        },
      {
        image:"https://cdn.leonardo.ai/users/33a92113-c2e8-4a6b-830a-5f8048b03683/generations/307ad244-a3c3-41be-ad61-ddb5ef44e864/Default_only_women_face_plain_white_background_passport_size_7.jpg",
        name:"Alfie",
        subName:"@alfiemitchell123",
        description:"Frontend Mentor eliminated the hurdle of sourcing designs, letting me focus on development. Their professional projects, especially in the Pro subscription, challenge me to create complex, multi-page websites. With a supportive community and feedback from advanced programmers, my skills have been elevated to new heights.",
        },

      {id:'3',
      image:"https://cdn.leonardo.ai/users/33a92113-c2e8-4a6b-830a-5f8048b03683/generations/307ad244-a3c3-41be-ad61-ddb5ef44e864/Default_only_women_face_plain_white_background_passport_size_7.jpg",
      name:"Hikmah",
      subName:"@Hikmahx",
      description:"Frontend Mentor transformed me from a newbie to a professional developer, enabling me to create flawless, responsive, accessible websites. It’s a superb platform for feedback with a supportive community backing your growth. Through it, I evolved from a frontend to a full-stack developer.",
      },
  ];
  return (
    <div className="bg-grey py-xl m-xl">
    <Holder/>
    <div className="flex">
      
      {testBox.map((v,key)=>(
         <Box key={key} v = {v}/> ))}
    </div>
    </div>
);
};
export default HomeSeventh;
