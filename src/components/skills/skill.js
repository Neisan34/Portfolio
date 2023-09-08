import React from "react";
import './skill.css';
import WebDesign from '../../assets/website-design.png';
import UIDesign from '../../assets/ui-design.png';
import ComSkill from '../../assets/comskill.png';
const Skills = () => {
    return(
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a web developer with a strong technical understanding of web development as well as an eye for design and usability. My dedication to quality, attention to detail, and ability to adapt to new technologies make me an invaluable asset in the development of unique and profitable online projects.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Website Development</h2>
                        <p>I am a highly skilled website developer with expertise in front-end</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>UI Design</h2>
                        <p>I excel as a front-end developer with a keen eye for UI design, delivering intuitive and visually appealing user experiences.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={ComSkill} alt="ComSkill" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Communication Skill</h2>
                        <p>My effective communication skills as a front-end developer ensure seamless collaboration with designers, clients, and team members, resulting in the creation of user-friendly and visually appealing websites.</p>
                    </div>
                </div>
            </div>
        </section>
    )
    


}
export default Skills;