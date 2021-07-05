import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './componentes/basicos/Primeiro'

import './index.css'

const conteudo = document.getElementById('root')

//Usando o id root da div presente na página index.html
//React é uma biblioteca que permite criar aplicações one page, ou seja, tudo será rendenizado nesta div!

//Para rendenizar elementos HTML é necessário a biblioteca do react!
// Esses elementos se chamam JSX !


const tag = <h1>teste!</h1>

ReactDOM.render(
    <div>

    <h1>Olá React</h1> 
    {tag}

    </div>, conteudo)

/* ReactDOM.render(
  'Olá React', 
    document.getElementById('root'))
*/