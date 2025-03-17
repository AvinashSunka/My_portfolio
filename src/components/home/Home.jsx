import React from 'react';
import Left from './Left';
import Right from './Right';

const Home = () => {

  return (
    <div className='bg-[#02061e] mx-14 lg:mx-32 pt-32 h-auto' id='HOME'>
      <div className="w-[100%] flex justify-center lg:justify-between flex-col-reverse md:flex-row">
      <Left />
      <Right />
      </div>
    </div>
  );
};

export default Home;
