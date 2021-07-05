import React from 'react'

// 'React' é uma variável, mas precisa ter este nome para transpilar o código

//Como queremos usar uma single page, criamos componentes para alimentar a página!
//Para nos comunicarmos com nossa única página, cada componente deve ser exportado!
export default function Primeiro(){

    const msg = 'Seja bem vinda!'

 return (
    
    <div>
        <h2> Primeiro componente </h2>
        <p> {msg} </p>
    </div>
    )
}
