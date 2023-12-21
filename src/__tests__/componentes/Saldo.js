import { render, screen } from "@testing-library/react";
import Saldo from "../../componentes/Principal/Saldo";

describe("<Saldo /> component", () => {
  test("Must render balance with monetary value", () => {
    render(<Saldo saldo={1000} />);

    const balance = screen.getByTestId("saldo");
    expect(balance).toHaveTextContent("R$ 1000");
  });
});