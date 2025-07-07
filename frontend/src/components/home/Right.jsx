const Right = ({ profileImageElement }) => {
  return (
    <div className="relative flex items-center w-full md:w-1/2 py-8">
      {/* Orange Background Block */}
      <div className="absolute top-20 hidden md:top-32 left-8 md:left-24 w-[320px] md:w-[400px] h-[420px] md:h-[500px] bg-[#f5a623] dark:bg-[#f59e0b] rounded-3xl z-0 shadow-lg md:flex flex-col justify-center items-center px-6 text-center" >
         </div>
      

      {/* Profile Image */}
      <div className="relative z-10 md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
        {profileImageElement}
      </div>

    </div>
  );
};

export default Right;
