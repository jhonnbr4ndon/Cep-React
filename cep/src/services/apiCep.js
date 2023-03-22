import axios from 'axios';

const apiCep = axios.create(
    {
        //base de URL: https://viacep.com.br/ws/01001000/json/
        baseURL:"https://viacep.com.br/ws/"
    }
)

export default apiCep;

//alert ('valor digitado: ' + inputCepDigitado)
    //await esperar nossa requisição que pode demorar 

    //erro ao usar await já as assíncronas são aquelas que acessam ou buscam algum tipo de recurso em um dispositivo externo

    /*
    import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import apiCep from "./services/apiCep";



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
    <div >
      <h1>Óla</h1>
      <h2>Buscar Cep</h2>
      Cep: <input type="text" placeholder="digite o cep" value={cepDigitado} onChange={(event) => setCepDigitado(event.target.value)} />
      <button onClick={pesquisarCep}>
        <FiSearch size={12}/>
      </button> <br/>
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
*/