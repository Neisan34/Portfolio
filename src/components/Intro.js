import React from "react";
import './intro.css';
import bg from '../assets/image-858x1295.jpg';
import btnImg from '../assets/hireme.png';
import {Link} from 'react-scroll';
const Intro = () =>{
    return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Nathan</span><br/>Website Developer</span>
            <p className="introPara">I'm a front-end enthusiast, weaving captivating web experiences<br/> with HTML, CSS, and JavaScript.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire me" className="btnImg"/>Hire me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
    
);
}

export default Intro;
