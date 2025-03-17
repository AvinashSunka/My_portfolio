import React from 'react'
import Icon from './Icon'
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoLogoPython } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";


const Icons = () => {
  return (
    <div className='flex gap-10 w-[100%] md:mt-32 mt-20 md:flex-row flex-col'>
        <div className='w-1/2 flex flex-col gap-10'>
        <h1>Social links</h1>
        <div className="flex gap-10">

          <Icon icon={<FiGithub/>} link="https://github.com/Silver9876?tab=repositories"/>
          <Icon icon={<SlSocialLinkedin/>}  link="https://www.linkedin.com/in/avinash-sunka-297981220/" />
          <Icon icon={<FaDiscord />} />
        </div>
        </div>

        <div className='w-1/2 flex flex-col gap-10'>
        <h1>Skills</h1>
        <div className="flex gap-10">
        <Icon icon={ <IoLogoPython />}/>
        <Icon icon= {<IoLogoReact />} />
        <Icon icon={<SiDjango />} />
        <Icon icon={<RiTailwindCssFill />} />

        </div>
        </div>


    </div>
  )
}

export default Icons
