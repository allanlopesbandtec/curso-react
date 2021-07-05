import React from "react";

export default function Comparametro(props) {
  //props é uma convenção para parametros!
  //Os parâmetros em react são de somente leitura!
  // não pra fazer props.nota = props.nota -1

  const status = props.nota >= 7 ? "Aprovado(a)" : "Reprovado(a)";

  //console.log(props)

  return (
    <>
      <h2>{props.titulo}</h2>
      <p>
        <strong> {props.aluno} </strong>

        <strong> tem nota {props.nota} </strong>
      </p>
      e foi <strong> {status} </strong>!
    </>
  );
}
