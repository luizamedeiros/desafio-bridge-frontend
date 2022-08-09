import React from 'react';
import '../style.css';

const FakeButton = (props) => {
    return(
        <div className='fakeButton'>
            <img 
                className='icon'
                src={props.imgLink}
            />
            <a href={props.hrefLink}> 
                {props.buttonText} 
            </a>
            </div>
    );
}

export default FakeButton;
