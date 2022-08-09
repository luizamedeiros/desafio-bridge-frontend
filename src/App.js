import './App.css';
import Swal from 'sweetalert2';
import { useState } from 'react';
import apiService from './services/apiService';


function App() {

  const [userInput, setUserInput] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    if(userInput>1 && Number.isInteger(userInput)){
      apiService(userInput).then((response) =>{
        const answer = response.data;
        Swal.fire({
          title: `${answer.amount}!`,
          text: `O número ${userInput} tem ${answer.amount} 
          número(s) menor(es) que ele, que tem a mesma quantidade de divisores que o seu sucessor direto.
          Os números que satisfazem essa condição são: ${answer.numbers.slice(1,-1)}.`,
          confirmButtonColor: '#0094FC',
        })
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
              <div className='content'>
              <img 
              src='https://portal.bridge.ufsc.br/wp-content/uploads/2022/06/icone_animado.gif'
              />
              <h1 className='title'>
                desafio bridge_
              </h1>
              <p>
              O desafio proposto foi criar uma aplicação web, que calculasse, 
              a partir de uma entrada k do usuário,
              o número de inteiros positivos n menores que k, para os quais
              n e n + 1 têm o mesmo número de divisores positivos.
              </p>
            </div>
            </div>
          <div className='inputsDiv'>
            <form onSubmit={(e)=> onSubmit(e)}>
              <div className='inputFieldDiv'>
                <label for='inputField'>
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

export default App;
