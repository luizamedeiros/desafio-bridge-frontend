import React, { useEffect, useState } from 'react';
import './style.css';

const History = () =>{
    const [answerHistory, setAnswerHistory] = useState([]);

    useEffect(()=>{
        const localStorageAnswerHistory = localStorage.getItem('answerHistory') ?? [];
        setAnswerHistory(JSON.parse(localStorageAnswerHistory));
      
    }, [])

    return(
        <div className='content-container'>
            <div className='textDiv'>
                <h1>
                    histórico_
                </h1>

            </div>
            <div className='historyInstancesDiv'>
                <ul>
                { answerHistory.map((historyInstance)=>(
                <li className='historyInstanceWrapper'>
                <p>
                    Número fornecido: {historyInstance.number}
                    <br></br>
                    Quantidade de números que satisfazem a condição: {historyInstance.amount}
                    <br></br>
                    Números: {historyInstance.numbers}
                    <br></br>
                </p>

                </li>
                ))}
                </ul>
            </div>
        </div>
    );
}

export default History;
