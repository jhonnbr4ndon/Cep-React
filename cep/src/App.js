import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import apiCep from "./services/apiCep";
import { Title, TitleSmall } from "./estilos/styles";
import Header from "./componentes/header";



function App() {

  const [cepDigitado,setCepDigitado] = useState('');
  const [valoresCep, setValoresCep] = useState('');

async function pesquisarCep(){
  alert ('valor input');

  const response = await apiCep(`${cepDigitado}/json`);

  console.log(response);
  setValoresCep(response.data);
}
  return (
    <div>
      <Header></Header>
      <Title> Styles components </Title>
      <Title> BUSCADOR DE <span> CEP </span> </Title>
      <TitleSmall>Componentes</TitleSmall>
      <h1>Buscar Cep</h1>
      Cep: <input type="text" placeholder="digite o cep" value={cepDigitado} onChange={(event) => setCepDigitado(event.target.value)} />
      <button onClick={pesquisarCep}>
        <FiSearch size={12}/>
      </button> <br/>
      <Title fontSize={25} >VALORES DA PESQUISA:</Title>
      <p>
        Bairro: {valoresCep.bairro} <br/>
        cep: {valoresCep.cep} <br/>
        complemento: {valoresCep.complemento} <br/>
        ddd: {valoresCep.ddd} <br/>
        gia: {valoresCep.gia} <br/>
        ibge: {valoresCep.ibge} <br/>
        localidade: {valoresCep.localidade} <br/>
        logradouro: {valoresCep.logradouro} <br/>
        siafi: {valoresCep.siafi} <br/>
        uf: {valoresCep.uf} <br/>
      </p>
      
    </div>
  );
}

export default App;