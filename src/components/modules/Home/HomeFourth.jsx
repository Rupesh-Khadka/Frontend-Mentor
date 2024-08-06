import React from 'react'
import TestMultiple  from '../../common/MultipleTest'
const HomeFourth = () => {
  

    const testMultiple = [
        {
          id:'1',
        image:"https://www.frontendmentor.io/static/images/home-benefit-1.webp",
        emoji:"😈",
        title:"Escape tutorial hell",
        description:"Add projects to your learning journey and put your knowledge to the test. The real learning happens when you start solving real-world problems yourself. "},
        {
        id:'2',
        Image:"https://www.frontendmentor.io/static/images/home-benefit-2.webp",
        Emoji:"🤩",
        Title:"Build portfolio-worthy projects",
        Description:"Design is hard. We take care of the project ideas and design so you can focus on the coding. You’ll end up with an incredible portfolio of stunning projects!"},

        {id:'3',
        image:"https://www.frontendmentor.io/static/images/home-benefit-3.webp",
        emoji:"🚀",
        title:"Banish impostor syndrome",
        description:"We’ve all felt out of our depth before. Getting hands-on experience is an incredible way to build confidence, refine your workflow, and supercharge your learning.",
        },

        {id:'4',
        Image:"https://www.frontendmentor.io/static/images/home-benefit-4.webp",
        Emoji:"🛠️",
        Title:"Practice new tools",
        Description:"The front-end landscape changes constantly. Our design-led challenges let you pick your tools to help you adapt, experiment, and keep up with the latest trends.",
        },

        {id:'5',
        image:"https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fhome-how-it-works-4.webp&w=1200&q=75",
        emoji:"🤝",
        title:"Create job opportunities",
        description:"We have a Hiring Platform that runs alongside this platform. Just by building projects and engaging with the community, you could open up job opportunities!",
        },
    ];
    return (
    <div className="px-xl items-center justify-center flex column">
        {testMultiple.map((v,key)=>(
           <TestMultiple key={key} v = {v} />))}
    </div>
  );
};

export default HomeFourth;
