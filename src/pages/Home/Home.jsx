import React, { useState } from 'react';
import './style.css';
import Swal from 'sweetalert2';
import apiService from '../../services/apiService';

const Home =()=>{
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
            text: `O número ${userInput} tem ${answer.amount} 
            número(s) menor(es) que ele, que tem a mesma quantidade 
            de divisores que o seu sucessor direto.
            Os números que satisfazem essa condição são: 
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
          title: 'Número inválido...',
          text: 'O número inserido precisa ser um inteiro maior que 1!',
          confirmButtonColor: '#0094FC',
          confirmButtonText: 'Ok, vou inserir outro!'
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
                A calculadora gera, a partir de uma entrada k do usuário,
                o número de inteiros positivos n menores que k, para os quais
                n e n + 1 têm o mesmo número de divisores positivos.
                </p>
              </div>
            <div className='inputsDiv'>
              <form onSubmit={(e)=> onSubmit(e)}>
                <div className='inputFieldDiv'>
                  <label>
                    Insira um número:
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
                  placeholder='Insira um número...'
                />
              </form>
            </div>
          </div>
    );
}

export default Home;
