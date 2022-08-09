import React from 'react';
import './style.css';
import { 
    DEPLOY,
    IMAGE_LINK,
    TECHNOLOGIES,
    ABOUT_PARAGRAPH,
    ABOUT_THE_CHALLENGE,
 } from './terms.js';

const About = () =>{
    return(
        <div className='content-container'>
            <div className='textDiv'>
                <div className='content'>
                    <img 
                    src={IMAGE_LINK}
                    />
                    <h1>
                        {ABOUT_THE_CHALLENGE}
                    </h1>
                    <p>
                        {ABOUT_PARAGRAPH}
                        <br/>
                        {TECHNOLOGIES}
                        <br/>
                        {DEPLOY}
                   </p>
                </div>
            </div>
            <div className='linksDiv'>

            </div>
        </div>
    )
}

export default About;
