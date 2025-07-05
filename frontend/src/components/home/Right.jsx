import React from 'react';

const Right = ({ profileImageElement }) => {
  return (
    <div className='w-auto md:w-auto md:h-auto flex justify-center lg:flex-col lg:justify-start'>
      <br /><br /><br />
      <div className="flex lg:justify-center xl:mt-72">
        <div className="xl:shadow-2xl xl:shadow-black xl:w-[600px] lg:flex lg:justify-center xl:h-[300px] lg:items-end rounded-[30px]">
          <div className="w-[100%] flex justify-center xl:w-1/2 2xl:w-3/4 xl:p-10">
            {profileImageElement}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
    