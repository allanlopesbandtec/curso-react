import React from "react";
import produtos from "../../data/Produtos";
import "./tabelaProdutos.css";

export default (props) => {
  function getLinhas() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>{produto.preco}</td>
        </tr>
      );
    });
  }

  return (
    <div className="TabelaProdutos">
      <table style={{ listStyle: "none" }} border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preco</th>
          </tr>
        </thead>
        <tbody>{getLinhas()}</tbody>
      </table>
    </div>
  );
};
