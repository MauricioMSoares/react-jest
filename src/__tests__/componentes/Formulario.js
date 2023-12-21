import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulario from "../../componentes/Formulario";

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