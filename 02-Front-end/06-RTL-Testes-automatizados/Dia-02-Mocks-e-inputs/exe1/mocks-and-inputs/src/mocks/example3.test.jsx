// 2 - jest.mock():
// Tem como principal diferencial mockar todo um pacote de dependências ou módulo de uma vez.

// Este exemplo testa o arquivo "example3.js"

const math = require('../scripts/example3');
jest.mock("../scripts/example3");


test("Testa todo o módulo", () => {
    // Aqui testamos se a função:
    // Foi chamada;
    // Quantas vezes foi chamada;
    // Quais parâmetros foram usados; 
    // Qual o seu retorno
    
    math.somar.mockImplementation((a, b) => a + b);
    math.somar(1, 2);

    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(1, 2);
    expect(math.somar(1, 2)).toBe(3);
});