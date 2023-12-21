import { render, screen } from "@testing-library/react";
import Extrato from "../../componentes/Extrato";

test("Must render a list of transactions", () => {
  const transactions = [
    {
      transacao: "Depósito",
      valor: "100",
    }
  ]

  render(<Extrato transacoes={transactions} />);
  const list = screen.getByRole("listitem");
  expect(list).toBeInTheDocument();
});