import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import '../../App.css';
import Icons from './Icons';

const Left = ({ personal_info, taglines }) => {
  const name = personal_info?.full_name || "Unknown";
  const tagTexts = taglines?.map(t => t.text) || ["a Developer"];

  const [text] = useTypewriter({
    words: tagTexts,
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
  });

  return (
    <div className='w-[100%] lg:w-2/3 lg:mx-16 my-32'>
      <h1 className='subtitle text-2xl'>WELCOME TO MY WORLD</h1>
      <br />
      <h1 className='title text-7xl lg:text-9xl font-bold'>
        Hi, I'm <span className='text-[#1DE5A0]'>{name}</span>,
      </h1>
      <br />
      <h1 className='text-4xl md:text-5xl'>
        a <span className='text-yellow-400 drop-shadow-[0_0_0px_#08f] font-bold'>{text}</span>
        <Cursor cursorStyle='|' />
      </h1>
      <br />
      <h1>
        I'm a self-taught programmer and an open-source enthusiast and maintainer.
      </h1>

      <Icons />
    </div>
  );
};

export default Left;
