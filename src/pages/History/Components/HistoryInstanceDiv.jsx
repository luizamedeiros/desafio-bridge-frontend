import React from 'react';
import '../style.css';
import '../terms.js';
import HistoryInstanceItem from './HistoryInstanceItem';

const HistoryInstanceDiv = (props) =>{
    return(
        <div className='historyInstancesDiv'>
            <ul>
                { props.answerHistory.map((historyInstance)=>(
                    <HistoryInstanceItem historyInstance={historyInstance}/>
                ))}
            </ul>
        </div>
    );

}

export default HistoryInstanceDiv;
