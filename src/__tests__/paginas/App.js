import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../paginas/Principal/App";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../../routes";

describe("App", () => {
  test("Must allow adding a transaction to Statement", () => {
    render(<App />, { wrapper: BrowserRouter });
    
    const select = screen.getByRole("combobox");
    const valueField = screen.getByPlaceholderText("Digite um valor");
    const button = screen.getByRole("button");

    userEvent.selectOptions(select, ["Depósito"]);
    userEvent.type(valueField, "100");
    userEvent.click(button);

    const newTransaction = screen.getByTestId("lista-transacoes");
    const statementItem = screen.getByRole("listitem");

    expect(newTransaction).toContainElement(statementItem);
  });

  test("Must navigate to the page corresponding to the clicked link", async () => {
    render(<App />, { wrapper: BrowserRouter });

    const linkCardsPage = screen.getByText("Cartões");
    expect(linkCardsPage).toBeInTheDocument();

    userEvent.click(linkCardsPage);

    const titleCardsPage = await screen.findByText();
    expect(titleCardsPage).toBeInTheDocument();
  })
})