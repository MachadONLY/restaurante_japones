import React from "react";
import "./Produtos.css";

function Produtos() {
  const produtos = [
    {
      nome: "Sushi",
      descricao: "Delicioso sushi tradicional",
      preco: "R$20,00",
    },
    {
      nome: "Sashimi",
      descricao: "Finas fatias de peixe fresco",
      preco: "R$25,00",
    },
    {
      nome: "Temaki",
      descricao: "Cone de alga recheado com arroz e ingredientes frescos",
      preco: "R$18,00",
    },
    {
      nome: "Uramaki",
      descricao: "Rolinho de sushi invertido com recheios variados",
      preco: "R$22,00",
    },
    {
      nome: "Yakimeshi",
      descricao: "Arroz frito com legumes e proteína à sua escolha",
      preco: "R$15,00",
    },
    {
      nome: "Miso Soup",
      descricao: "Sopa de missô com tofu e algas",
      preco: "R$10,00",
    },
    {
      nome: "Gyoza",
      descricao: "Deliciosas trouxinhas fritas recheadas",
      preco: "R$20,00",
    },
    {
      nome: "Nigiri",
      descricao: "Bolinho de arroz com fatia de peixe em cima",
      preco: "R$22,00",
    },
    {
      nome: "Ebi Tempura",
      descricao: "Camarão empanado e frito, crocante por fora",
      preco: "R$28,00",
    },
    {
      nome: "Katsu Curry",
      descricao: "Carne empanada servida com molho curry japonês",
      preco: "R$30,00",
    },
    {
      nome: "Onigiri",
      descricao: "Bolinho de arroz com recheio envolto em alga",
      preco: "R$12,00",
    },
    {
      nome: "Chawanmushi",
      descricao: "Flã salgado de ovo com cogumelos e camarão",
      preco: "R$18,00",
    },
    {
      nome: "Matcha Ice Cream",
      descricao: "Sorvete de chá verde japonês cremoso",
      preco: "R$15,00",
    },
  ];

  return (
    <div className="produtos-container">
      <div className="produtos-section">
        <h1 className="produtos-title">Produtos</h1>
        <table className="produtos-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto, index) => (
              <tr key={index}>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Produtos;
