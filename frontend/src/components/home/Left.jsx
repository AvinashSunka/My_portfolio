import { useTypewriter, Cursor } from 'react-simple-typewriter';
import '../../App.css';
import Icons from './Icons';

const Left = ({ personal_info, taglines }) => {
  const name = personal_info?.full_name || "Unknown";
  const subtitle = personal_info?.subtitle || "Unknown"
  const tagTexts = taglines?.map(t => t.text) || ["a Developer"];

  const [tags] = useTypewriter({
    words: tagTexts,
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
  });

  return (
    <div className='w-[100%] lg:w-2/3 lg:mx-16 my-10 md:my-32 grid grid-cols-1 gap-6 md:gap-8'>
      <h1 className='title text-7xl lg:text-9xl font-bold text-black dark:text-white' >
        <span className='text-5xl md:text-7xl'>Hi, I'm</span> <br />{name}
      </h1>
      <p className='text-4xl md:text-5xl  text-black dark:text-white'>
        a <span className='text-[#f59e0b] dark:text-yellow-400 drop-shadow-[0_0_0px_#08f] font-bold'>{tags}</span>
        <Cursor cursorStyle='|' />
      </p>
      <p className='text-black dark:text-white text-2xl md:text-4xl'>{subtitle}</p>

      <Icons />
    </div>
  );
};

export default Left;
