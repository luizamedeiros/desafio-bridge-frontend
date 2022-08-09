import React from 'react';
import './style.css';

const About = () =>{
    return(
        <div className='content-container'>
            <div className='textDiv'>
                <div className='content'>
                    <img 
                    src='https://portal.bridge.ufsc.br/wp-content/uploads/2022/06/icone_animado.gif'
                    />
                    <h1>
                        sobre o desafio_
                    </h1>
                    <p>
                    O desafio proposto envolveu a implementação de funcionalidades web tanto no frontend quanto
                    no backend. <br/> No frontend, foi utilizado React.js, com Sweetalert2 para a criação de modais, 
                    e React Router Dom para o roteamento.
                    O backend conta com Spring Boot e Java para o processamento do cálculo e retorno da resposta. <br/>
                    Tanto o backend quanto a aplicação como um todo tiveram seu deploy feito no heroku.
                    </p>
                </div>
            </div>
            <div className='linksDiv'>

            </div>
        </div>
    )
}

export default About;
