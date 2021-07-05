import React from "react";
import Primeiro from "./componentes/basicos/Primeiro";
import ComParametro from "./componentes/basicos/ComParametro";
import Fragmento from "./componentes/basicos/Fragmento";
import Aleatorio from "./componentes/basicos/Aleatorio";
import Card from "./componentes/layout/Card";
import "./app.css";
import Familia from "./componentes/basicos/Familia";
import FamiliaMembro from "./componentes/basicos/FamiliaMembro";
import ListaAlunos from "./componentes/repeticao/ListaAluno";
import ParOuImpar from "./componentes/condicional/ParOuImpar";
import TabelaProdutos from "./componentes/repeticao/TabelaProdutos";
import TabelaProdutosCurso from "./componentes/repeticao/TabelaProdutosCurso";
import UsuarioInfo from "./componentes/condicional/UsuarioInfo";
import DiretoPai from './componentes/comunicacao/DiretaPai'
import IndiretaPai from './componentes/comunicacao/IndiretaPai'



export default (props) => {
  return (
    <div className="App">
      <h2>Fundamentos de React!</h2>

      <div className="Cards">

      <Card titulo="#10 - Comunicação indireta" color="#8BAD39">
          <IndiretaPai/>
        </Card>


        <Card titulo="#09 - Comunicação direta" color="#59323C">
          <DiretoPai/>
        </Card>

        <Card titulo="#08 - Desafio repetição" color="#982395">
          <ParOuImpar numero={21} />
          <UsuarioInfo usuario={{ nome: 'Allan' }} />
          <UsuarioInfo usuario={{}} />
          <UsuarioInfo />
        </Card>

        <Card titulo="#07 - Desafio repetição" color="#3A9AD9">
          <TabelaProdutosCurso />
        </Card>

        <Card titulo="#06 - Desafio repetição" color="#3A9AD9">
          <TabelaProdutos />
        </Card>

        <Card titulo="#05 - Componente com filhos" color="#FF4C65">
          <ListaAlunos />
        </Card>

        <Card titulo="#05 - Componente com filhos" color="#00C8F8">
          <Familia sobrenome="Lopes">
            <FamiliaMembro nome="Allan" />
            <FamiliaMembro nome="Julia" />
            <FamiliaMembro nome="Thiago" />
          </Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
          <Aleatorio min={10} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Boletim" color="#E8B71A">
          <ComParametro titulo="Situação do Aluno" aluno="Amanda" nota={9.3} />
          <ComParametro titulo="Situação do Aluno" aluno="Allan" nota={-0.5} />
        </Card>

        <Card titulo="#01 - Primeiro" color="#588C73">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};
