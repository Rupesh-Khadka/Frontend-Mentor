import React from 'react'
import Learning from '../../common/Learning'
 
const LearningSecound = () => {

    const Learn = [
        {
            id:1,
            state:'NEWBIE',
            title:' Getting started on Frontend Mentor',
            description:`These projects will help you find your feet on the Frontend Mentor platform and give you experience working with designs and building small projects. They're all HTML & CSS-only challenges, so they'll help you pick up the basics.`,
            image:`https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1709634694%2FLearningPaths%2Fsamkit9vyygeuxqi6f4q.jpg&w=1920&q=75`,
        },
        {
            id:1,
            state:'NEWBIE',
            title:' Building responsive layouts',
            description:`These projects will help you find your feet on the Frontend Mentor platform and give you experience working with designs and building small projects. They're all HTML & CSS-only challenges, so they'll help you pick up the basics.`,
            image:`https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1709635029%2FLearningPaths%2Fsvxn9hckf62ieldx5lqz.jpg&w=1920&q=75`,
        },
        {
            id:2,
            state:'JUNIOR',
            title:' JavaScript fundamentals',
            description:`Adding interactivity to our web pages is a key skill of the front-end developer. The challenges in this path are designed to guide you through handling common user interactions with JavaScript.`,
            image:`https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1712224940%2FLearningPaths%2Fvcu7qvitarxosrblkpld.png&w=1920&q=75`,
        },
        {
            id:2,
            state:'JUNIOR',
            title:' Introduction to web accessibility',
            description:`Understanding accessibility and how to create accessible websites is crucial for front-end developers. This path introduces you to key concepts while providing challenges with specific accessibility considerations in each design.`,
            image:`https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1715959834%2FLearningPaths%2Fsvgwznnqi4wpda1mjjru.jpg&w=1920&q=75`,
        },
    ];


  return (
    <div>
        {Learn.map((v,index)=>(
            <Learning key={index} v={v}/>
        ))};
      <div/>
    </div>
    
  )
}

export default LearningSecound;