// Funções para testes

function A() {
    return Math.floor(Math.random() * 100);
}

function B() {
    return (A() % 2) === 0;
}

function C() {
    return (A() + A());
}

describe("Testando mocks", () => {
    it("Testa se a função C foi chamada", () => {

        C = jest.fn() // Mock

        C(); // Chamando a função
        expect(C).toHaveBeenCalled();
    });

    it("Testa o resultado da função C", () => {
        
        C = jest.fn()
        .mockReturnValue(24); // Retorno do mock esperado

        expect(C()).toBe(24);
    });

    it("Verifica quantas vezes a função foi chamada", () => {
        C = jest.fn()
        
        C();
        C();

        expect(C).toHaveBeenCalledTimes(2);
    });

    it("Verifica se o retorno da função B() retorna true", () => {
        
        A = jest.fn() // Mockando a função A()
        .mockReturnValue(2);
        
        expect(B()).toBe(true);
    });

    it("Verifica se o retorno da função B() retorna false", () => {
        
        A = jest.fn() // Mockando a função A()
        .mockReturnValue(3);
        
        expect(B()).toBe(false);
    })
})