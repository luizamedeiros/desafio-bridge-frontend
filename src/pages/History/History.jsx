import React, { useEffect, useState } from 'react';
import './style.css';
import {
    NO_HISTORY,
    NUMBER_INPUTTED,
    AMOUNT_OF_NUMBERS,
    HISTORY_EXPLANATION,
} from './terms.js';

const History = () =>{
    const [answerHistory, setAnswerHistory] = useState([]);

    useEffect(()=>{
        const localStorageAnswerHistory = localStorage.getItem('answerHistory');
        if(localStorageAnswerHistory){
            setAnswerHistory(JSON.parse(localStorageAnswerHistory));
        }
    }, [])

    return(
        <div className='content-container'>
            <div className='textDiv'>
                <h1>
                    histórico_
                </h1>
                <p>
                    {HISTORY_EXPLANATION}
                </p>
            </div>
                { answerHistory.length > 0 ? (
                    <div className='historyInstancesDiv'>
                        <ul>
                            { answerHistory.map((historyInstance)=>(
                                <li>
                                    <p>
                                        {NUMBER_INPUTTED}{historyInstance.number}
                                        <br></br>
                                        {AMOUNT_OF_NUMBERS}{historyInstance.amount}
                                        <br></br>
                                        Números: {historyInstance.numbers}
                                        <br></br>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    ) 
                    :
                    <ul className='emptyDiv'>
                        <li><p> {NO_HISTORY}</p></li>
                    </ul>
                }     
        </div>
    );
}

export default History;
