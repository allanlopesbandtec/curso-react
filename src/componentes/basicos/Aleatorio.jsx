import React from "react";

export default (props) => {

  //const min = props.min;
  //const max = props.max;

  const {min,max} = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + props.min;

  return (
    <>
      <h2>Valor aleatório</h2>
      <p><strong>Valor Mínimo: {min}</strong></p>
      <p><strong>Valor Máximo: {max}</strong></p>
      <p><strong>Valor Escolhido: {aleatorio}</strong></p>
    </>
  );
};
