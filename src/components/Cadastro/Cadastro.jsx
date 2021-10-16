import React from 'react';
import './Cadastro.css';
import Image from '../../assets/image.png';

function Cadastro() {
  return(
    <div className="Container">
        <form>
            <div className="ContainerInputs">
                <h1>Cadastro</h1>
                <p>Preencha os dados abaixo para começar</p>
                <input type="text"  placeholder="Nome"/>
                <input type="text"  placeholder="Sobrenome"/>
                <input type="email" placeholder="E-mail" />
                <input type="password"  placeholder="Senha"/>
            </div>
            <button>Concluir cadastro</button>
        </form>
        <section>
            <img src={Image} alt="wallpaper" /> 
        </section>
    </div>    
  );
}

export default Cadastro;