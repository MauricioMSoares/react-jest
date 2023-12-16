import { render, screen } from "@testing-library/react";
import Cabecalho from "../../componentes/Cabecalho";

test("Must render username", () => {
    render(<Cabecalho />)
    const username = screen.getByText("Joana Fonseca Gomes")
    expect(username).toBeInTheDocument();
})