const { expect } = require('expect');
const sum = require('./sum');

describe('Testa a função sum', () => {

    it('Testa se o retorno de sum(4, 5) é 9', () => {

        expect(sum(4, 5)).toBe(9);
    });

    it('Testa se o retorno de sum(0, 0) é 0', () => {

        expect(sum(0, 0)).toBe(0);
    })

    it('Teste se o retorno de sum("4", 5) lança um erro', () => {

        expect(() => sum('4', 5)).toThrowError();
    })

})


