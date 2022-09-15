// 1- Mocks:

// jest.fn() - útil para casos como, por exemplo, 
// em que precisamos ter controle dos números gerados aleatoriamente.

// Funções para testes

let retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

let divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

test("Verifica se a função divisivelPorDois foi chamada", () => {
    // Testando se a função foi chamada

    // mockReturnValue(value);
    // mockReturnValueOnce(value);
    // toHaveBeenCalledTimes(number);

    divisivelPorDois = jest.fn()
        .mockReturnValue('default value')
        .mockReturnValueOnce('first call')
        .mockReturnValueOnce('second call');

    expect(divisivelPorDois).toHaveBeenCalledTimes(0);

    expect(divisivelPorDois()).toBe("first call");
    expect(divisivelPorDois).toHaveBeenCalledTimes(1);

    expect(divisivelPorDois()).toBe("second call");
    expect(divisivelPorDois).toHaveBeenCalledTimes(2);

    expect(divisivelPorDois()).toBe("default value");
    expect(divisivelPorDois).toHaveBeenCalledTimes(3);
});

