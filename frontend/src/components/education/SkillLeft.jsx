import React from 'react'
import { Progress } from "@material-tailwind/react";
import './Skillsstyle.css'

const SkillLeft = () => {
  return (
    <div className="lg:flex w-full justify-center">
        <div className="left lg:w-[45%]">
        <div class="container2 w-full flex flex-col my-20">
        <div class="skill-box ">
            <span class="title text-3xl lg:text-5xl">HTML</span>
            <div class="skill-bar">
                <span class="skill-per html">
                    <span class="tooltip text-2xl lg:text-3xl">90%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title text-3xl lg:text-5xl">CSS</span>
            <div class="skill-bar">
                <span class="skill-per css ">
                    <span class="tooltip text-2xl lg:text-3xl">70%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title text-3xl lg:text-5xl">JavaScript</span>
            <div class="skill-bar">
                <span class="skill-per javascript">
                    <span class="tooltip text-2xl lg:text-3xl">60%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title text-3xl lg:text-5xl">React</span>
            <div class="skill-bar">
                <span class="skill-per">
                    <span class="tooltip text-2xl lg:text-3xl">90%</span>
                </span>
            </div>
        </div>
    </div>
        </div>

        <div className="right lg:w-[45%]">
        <div class="container2 w-full flex flex-col lg:my-20">
        <div class="skill-box ">
            <span class="title text-3xl lg:text-5xl">Python</span>
            <div class="skill-bar">
                <span class="skill-per html">
                    <span class="tooltip text-2xl lg:text-3xl">90%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title text-3xl lg:text-5xl">Django</span>
            <div class="skill-bar">
                <span class="skill-per css ">
                    <span class="tooltip text-2xl lg:text-3xl">70%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title text-3xl lg:text-5xl">Tailwind css</span>
            <div class="skill-bar">
                <span class="skill-per javascript">
                    <span class="tooltip text-2xl lg:text-3xl">60%</span>
                </span>
            </div>
        </div>
    </div>
        </div>
    </div>
        )
}

export default SkillLeft
 