import React from 'react';
import '../style.css';
import {
    DEPLOY,
    IMAGE_LINK,
    TECHNOLOGIES,
    ABOUT_PARAGRAPH,
    ABOUT_THE_CHALLENGE
} from '../terms.js'

const AboutTextDiv = ()=>{
    return(
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
    );
}

export default AboutTextDiv;
