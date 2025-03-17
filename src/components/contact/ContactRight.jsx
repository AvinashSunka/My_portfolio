import React from 'react'
import Slay from '../../assets/images/Saly-31.png'
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaDiscord } from "react-icons/fa";
import Icon from '../home/Icon';


const ContactRight = () => {
  return (
    <div className='lg:col-span-5 col-span-12'>
      <div className="row">
                    <div className="lg:col-span-5">
                        <div className="contact-about-area bg-[#02061e]">
                            <div className="w-full hover:scale-105 ease-in-out delay-100 transition-all duration-300 flex justify-center items-start ">
                                <img src={Slay} className='w-[95%]'/>
                            </div>
                            <div className="title-area">
                                <h4 className="title">Avinash</h4>
                                <span>Open-source enthusiast</span>
                            </div>
                            <div className="description">
                                <p>I am available for freelance work & Job Search Connect with me here
                                </p>
                                <span className="phone">Phone: <a href="tel:01941043264">+91 6305979740</a></span>
                                <span className="mail">Email: <a href="avinashsunka@gmail.com">avinashsunka@gmail.xom</a></span>
                            </div>
                            <div className="social-area mb-32">
                                <div className="name">FIND WITH ME</div>
                                <div className="flex gap-10 my-10">
                                <Icon icon={<FiGithub/>} link="https://github.com/Silver9876?tab=repositories"/>
                                <Icon icon={<SlSocialLinkedin/>}  link="https://www.linkedin.com/in/avinash-sunka-297981220/" />
                                <Icon icon={<FaDiscord />} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
    </div>
  )
}

export default ContactRight
