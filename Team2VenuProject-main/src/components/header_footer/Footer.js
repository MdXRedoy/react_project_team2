/* import { grey } from '@material-ui/core/colors'; */
import '../../index.css';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Tooltip } from '@material-ui/core';

const Footer = () => {
    return (
        <footer className = "bck_grey">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">
                    <Tooltip title="Check out our Github!">
                
                    
                    <a href = "https://github.com/"
                    style ={{
                        color: "#FFF"
                        
                        }}
                    >Olympics Countdown
                    </a>
                </Tooltip>
                </div>
                <br></br>
                <div className="footer_copyright">JJAY TTP, Team 2. All rights reserved ©</div>
                <div className="footer_copyright">
                    <ul style ={{listStyleType: "none"}}>
                        <li>Team 2 Leaders : Syeda, Ege, Hilal </li>
                        <li>All members : Robert, Christopher, Cenk,</li>
                        <li>Humayun, Kirana, Blanco,</li>
                        <li>Nanami, Chelsea, Michael, Gabriel</li>

                    </ul>
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;