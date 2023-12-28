import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import App from "../paginas/Principal/App";
import Cartoes from "../componentes/Cartoes";
import AppRoutes from "../routes";

describe('Routes', () => {
  test('Must render the main route', () => {
    render(<App />, { wrapper: BrowserRouter });
    const user = screen.getByText('Olá, Joana :)!');
    expect(user).toBeInTheDocument();
  });

  test('Must render Cards route', () => {
    const route = '/cartoes';

    render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="cartoes" element={<Cartoes />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const myCards = screen.getByText('Meus cartões');
    expect(myCards).toHaveTextContent('Meus cartões');
  });

  test('Must render the current route location', () => {
    const route = '/cartoes';

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );

    const currentLocation = screen.getByTestId('local');
    expect(currentLocation).toHaveTextContent(route);
  });

  test('Must render the 404 page', () => {
    const route = '/not-found';

    render(
      <MemoryRouter initialEntries={[route]}>
        <AppRoutes />
      </MemoryRouter>
    );

    const notFound = screen.getByTestId('pagina-404');
    expect(notFound).toContainHTML('<h1>Ops! Não encontramos a página</h1>')
  });
});