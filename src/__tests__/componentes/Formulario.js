import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulario from "../../componentes/Transacao/Formulario";

describe("Must render an input field", () => {
  test("", () => {
    render(<Formulario />)
    const textField = screen.getByPlaceholderText("Digite um valor")
    expect(textField).toBeInTheDocument();
  });

  test(" with type number", () => {
    render(<Formulario />)
    const textField = screen.getByPlaceholderText("Digite um valor")
    expect(textField).toHaveAttribute("type", "number");
  });

  test(" that can be filled in", () => {
    render(<Formulario />)
    const textField = screen.getByPlaceholderText("Digite um valor")
    userEvent.type(textField, "50");
    expect(textField).toHaveValue(50);
  });
});

test("Must call an onSubmit event when button is clicked", () => {
  const submitTransaction = jest.fn();

  render(<Formulario realizarTransacao={submitTransaction} />);
  const button = screen.getByRole("button");

  userEvent.click(button);
  expect(submitTransaction).toHaveBeenCalledTimes(1);
});

test('Must be possible to select an option from the element <select/>', () => {
  render(<Formulario />);
  const select = screen.getByRole('combobox');
  userEvent.selectOptions(select, ['Depósito']);

  expect(screen.getByRole('option', { name: 'Selecione um tipo de transação' }).selected).toBe(false);
  expect(screen.getByRole('option', { name: 'Depósito' }).selected).toBe(true);
});