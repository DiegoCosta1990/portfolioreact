import React from 'react';
import '../styles/AboutMe.css';
import PortfolioSvg from './PortfolioSvg';

function AboutMe() {
    return (
        <div className="about-me">
            <div className="about-me-left">
                  <PortfolioSvg />                                  
            </div>
            <div class="about-me-right">
                   <h1>Hello There! Thanks to be here! 🧑</h1>  
                    <h3>Let me introduce myself to you.</h3>
                    <p>I was born in Misiones, Argentina in 1990. I´ve lived in Buenos Aires since 2020.</p>
                    <p>Actually, I live in Alicante, Spain with my beautiful, pastry chef wife 👩‍🍳. The country was becoming really dangerous
                    socially and economically speaking, and if we want to raise a future child, Argentina won't be the place for that.</p>
                    <p>We left all behind in search of a new life. Sports, animals, travel the world, videogames and programming is my way to enjoy it👨‍💻. I have no career nor experience in IT companies but I know that I can handle this job and more.💪</p>
                    <p>I no give up easily. I love being challenged. I love solving bugs and any kind of problems. I have some technical and social skills that make me a good team member🤝.</p>
                    <br />
                    <p>Sorry, too many words, I know. Scroll Down to see more of my work and projects.</p>
                    <br />
                    <p>Thank you for spending your time with me!</p>
            </div>
        </div>
    )
}

export default AboutMe;
