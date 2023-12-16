import { render, screen } from "@testing-library/react";
import Menu from "../../componentes/Menu";

test("Must render a link to the home page", () => {
    render(<Menu />);
    const linkHomePage = screen.getByText("Inicial");
    expect(linkHomePage).toBeInTheDocument();
});

test("Must render a list of links", () => {
    render(<Menu />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
});

test("Must not render a link to Statement", () => {
    render(<Menu />);
    const linkStatement = screen.queryByText("Extrato");
    expect(linkStatement).not.toBeInTheDocument();
});

test("Must render a list of links with the class link", () => {
    render(<Menu />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => expect(link).toHaveClass("link"));
    expect(links).toMatchSnapshot();
})