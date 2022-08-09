import React, { useState } from 'react';
import './style.css';
import Swal from 'sweetalert2';
import apiService from '../../services/apiService';
import { 
  MODAL_TEXT,
  OK_TRY_AGAIN,
  INVALID_NUMBER,
  INSERT_A_NUMBER,
  WHOLE_LARGER_THAN_ONE,
  CALCULATOR_EXPLANATION,
 } from './terms';

const Home = () => {
    const [userInput, setUserInput] = useState();
    const answerHistory = localStorage.getItem('answerHistory');
    
    let answerHistoryArray = [];
    if(answerHistory){
      answerHistoryArray = JSON.parse(answerHistory);
    }

    const onSubmit = (e) => {
      e.preventDefault();
      if(userInput>1 && Number.isInteger(userInput)){
        apiService(userInput).then((response) =>{
          const answer = response.data;
          Swal.fire({
            title: `${answer.amount}!`,
            text: `O número ${userInput} tem ${answer.amount} ${MODAL_TEXT}
            ${answer.numbers.slice(1,-1)}.`,
            confirmButtonColor: '#0094FC',
          })
          localStorage.setItem('answerHistory', JSON.stringify(
            [...answerHistoryArray, {
            number: userInput,
            amount: answer.amount,
            numbers: answer.numbers
          }]))
        })
      }
      else{
        Swal.fire({
          icon: 'error',
          title: `${INVALID_NUMBER}`,
          text: `${WHOLE_LARGER_THAN_ONE}`,
          confirmButtonColor: '#0094FC',
          confirmButtonText: `${OK_TRY_AGAIN}`
        })
      }
    }
  
    return (
          <div className='content-container'>
              <div className='textDiv'>
                <h1>
                  calculadora_
                </h1>
                <p>
                  {CALCULATOR_EXPLANATION}
                </p>
              </div>
            <div className='inputsDiv'>
              <form onSubmit={(e)=> onSubmit(e)}>
                <div className='inputFieldDiv'>
                  <label>
                    {INSERT_A_NUMBER}
                  </label>
                  <input 
                    type="number" 
                    id="inputField"
                    name='inputField'
                    value={userInput}
                    onChange={(e)=>setUserInput(parseInt(e.target.value))}
                  />
                </div>
                <input
                  type='submit'
                  value='Calcular'
                  className='submitButton'
                />
              </form>
            </div>
          </div>
    );
}

export default Home;
