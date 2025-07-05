import React from "react";
// import {CircularProgress} from "@nextui-org/progress";
import './Experience.css'
import SkillLeft from "./SkillLeft";
import SkillRight from "./SkillRight";

const Skill = () => {
  return (
<div className="flex justify-center">
<div className="xl:flex w-[90%] mt-28 h-auto justify-evenly gap-10">
            <SkillLeft />
    </div>
</div>
  )
}

export default Skill
