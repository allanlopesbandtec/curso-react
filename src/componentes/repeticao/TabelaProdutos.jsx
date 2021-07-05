import React from "react";
import produtos from "../../data/Produtos";

export default (props) => {
  const produtoTr = produtos.map((produto) => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>
          {" R$"} {produto.preco}{" "}
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table style={{ width: "100%" }} border={1}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Nome</td>
            <td>Preco</td>
          </tr>
        </thead>
        <tbody>{produtoTr}</tbody>
      </table>
    </div>
  );
};
