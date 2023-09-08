import React from "react";
import '../Works/Works.css';
import Portfolio from '../../assets/Port 1.png';
import Portfolio2 from '../../assets/port 2.png';
import Portfolio3 from '../../assets/port 3.png';

// Define the GitHub repository URLs
const githubRepoURL1 = 'https://neisan34.github.io/MP1_WD76_NANUD/index.html';
const githubRepoURL2 = 'https://neisan34.github.io/bago/';
const githubRepoURL3 = 'https://neisan34.github.io/WD76_EXERCISE13_Nanud/';

const Works = () => {
    return (  
        <section id="works">
            <h2 className=".worksTitle">My Portfolio</h2>
            <span className="worksDesc">I take immense pride in website development, crafting digital experiences that seamlessly connect and engage users with the world.</span>
            <div className="worksImgs">
                <div className="image-wrapper">
                    <a href={githubRepoURL1} target="_blank" rel="noopener noreferrer">
                        <img src={Portfolio} alt="" className="worksImg" />
                        <div className="overlay">Visit webpage</div>
                    </a>
                </div>
                <div className="image-wrapper">
                    <a href={githubRepoURL2} target="_blank" rel="noopener noreferrer">
                        <img src={Portfolio2} alt="" className="worksImg" />
                        <div className="overlay">Visit webpage</div>
                    </a>
                </div>
                <div className="image-wrapper">
                    <a href={githubRepoURL3} target="_blank" rel="noopener noreferrer">
                        <img src={Portfolio3} alt="" className="worksImg" />
                        <div className="overlay">Visit webpage</div>
                    </a>
                </div>
            </div>
        </section>
    );
}
 
export default Works;
