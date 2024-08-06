import React from "react";
import ChallengeSec from "../../common/ChallengeSec";

const ChallengSecound = () => {
  const Chal = [
    {
      image: `https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1715865268%2FChallenges%2Fjntqqksdinxs3qy8uyqb.jpg&w=384&q=75`,
      name: `Contach form`,
      id: 2,
      postition: `JUNIOR`,
      description:`Building accessible forms is a crucial task for front-end developers. This challenge will help you practice building a form with several input types and validation.`
    },
    {
      image: `https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1708091276%2FChallenges%2Fbpwbhwxnm9fkqw9lh0mm.jpg&w=384&q=75`,
      name: `Hangman gamme`,
      id: 4,
      postition: `Advance`,
      description:`This project is a great all-around test. You'll need good HTML to ensure accessible navigation. There are many tricky CSS details, and the game logic will test your JS.`
    },
    {
      image: `https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1705499271%2FChallenges%2Fskrrttkaqiqmh9fzvg0p.jpg&w=384&q=75 `,
      name: ` Recipe page`,
      id: 1,
      postition: ` NEWBIE`,
      description:`This project is a great all-around test. You'll need good HTML to ensure accessible navigation. There are many tricky CSS details, and the game logic will test your JS.`
    },
    {
        image: `https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1705487747%2FChallenges%2Fcf3rlsqoovxlf7uajpva.jpg&w=384&q=75 `,
        name: `Social Link Profile `,
        id: 1,
      postition: ` NEWBIE`,
      description:`This project is a great all-around test. You'll need good HTML to ensure accessible navigation. There are many tricky CSS details, and the game logic will test your JS.`
      },
      {
        image: `https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1703155602%2FChallenges%2Fcmab9xsatnq8m04w5ikl.jpg&w=384&q=75 `,
        name: ` Blog Preview card`,
        id: 1,
        postition: ` NEWBIE`,
        description:`This HTML & CSS-only challenge is a perfect project for beginners getting up to speed with HTML and CSS fundamentals, like HTML structure and the box model.`
      },
      {
        image: ` https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1701355650%2FChallenges%2Fnr04mhuzgpmuipedmqcc.jpg&w=384&q=75`,
        name: `FAQ accordion `,
        id: 1,
        postition: ` NEWBIE`,
        description:`In this challenge, you'll build an FAQ accordion. This is an extremely common front-end pattern, so it's an excellent opportunity to get some practice in!`
      },
  ];

  return (
    <div className="flex wrap justify-center">
      {Chal.map((v, index) => (
        <ChallengeSec key={index} v={v} />
      ))}

      <div />
    </div>
  );
};

export default ChallengSecound;
