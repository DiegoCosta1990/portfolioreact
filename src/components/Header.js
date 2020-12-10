import React from 'react';
import { Button } from '@material-ui/core';
import ManAtDesk from './ManAtDesk';
import '../styles/Header.css';
import Parallax from 'react-rellax';

function Header() {
    return (
      <div className="header">
        <div className="left-side">
            <Parallax speed={8}>
                <h1>I´m Diego Costa.</h1>
            </Parallax>            
            <Parallax speed={5}>
                <p>I´m a <strong>React Developer</strong>. I´m an Argentinian living in Alicante, Spain.</p>
            </Parallax>
            <Parallax speed={3}>
                <p>I´m a <strong>coding lover</strong>. I´m always looking for the best practices and the lastest technologies to keep me updated.</p>
            </Parallax>
            <Parallax speed={1}>
                <p>I love music, animals, sports, design and videogames.</p>
            </Parallax>   
            <Button variant="contained" color="secondary">
                See my WebApp Portfolio
            </Button>        
        </div>

        <div className="right-side">
            <Parallax speed={3}>
                <ManAtDesk />    
            </Parallax>
            
        </div>
      </div>  
    )
}

export default Header;
