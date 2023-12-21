import { render, screen } from "@testing-library/react";
import Transacoes from "../../componentes/Extrato/Transacoes";
import estilos from "../../componentes/Extrato/Transacoes.module.css";

test("Must render the same component with updated props", () => {
  const transaction = {
    transacao: "Depósito",
    valor: 100,
  };

  const { rerender } = render(
    <Transacoes estilos={estilos} transacao={transaction} />
  );
  const transactionType = screen.getByTestId("tipoTransacao");
  const transactionValue = screen.getByTestId("valorTransacao");

  expect(transactionType).toHaveTextContent("Depósito");
  expect(transactionValue).toHaveTextContent("R$ 100");

  const newTransaction = {
    transacao: "Transferência",
    valor: 50,
  };

  rerender(<Transacoes estilos={estilos} transacao={newTransaction} />)
  const newTransactionType = screen.getByTestId("tipoTransacao");
  const newTransactionValue = screen.getByTestId("valorTransacao");

  expect(newTransactionType).toHaveTextContent("Transferência");
  expect(newTransactionValue).toHaveTextContent("- R$ 50");
});