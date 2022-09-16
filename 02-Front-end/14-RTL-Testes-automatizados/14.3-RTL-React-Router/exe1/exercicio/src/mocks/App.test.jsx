import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRouter from "../helpers/renderWithRouter";
import App from "../App";

describe("Testa toda a aplicação", () => {

    test("Verifica se redenriza o componente App", () => {
        renderWithRouter(<App />); // Um helper que auxilia na renderização 

        const title = screen.getByRole("heading", {
            name: 'Spotipobre'
        });

        expect(title).toBeInTheDocument();
    });

    test('Verifica se redenriza o componente central', () => {
        const { history } = renderWithRouter(<App />);

        // Verifica se o link foi renderizado
        const linkPath = screen.getByRole('link', { name: 'Informações' }); 
        expect(linkPath).toBeInTheDocument();
        userEvent.click(linkPath);

        // Verifica o path/local atual
        const { pathname } = history.location;
        expect(pathname).toBe('/informations');

        // Verifica se o "heading" (elemento h2) é renderizado 
        const aboutTitle = screen.getByRole('heading',
            { name: 'Informações' });
        expect(aboutTitle).toBeInTheDocument();
    });

});