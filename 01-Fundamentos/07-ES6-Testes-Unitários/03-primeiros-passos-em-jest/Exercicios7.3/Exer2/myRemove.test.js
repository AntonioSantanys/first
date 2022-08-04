const { expect } = require('expect');
const myRemove = require('./myRemove');

describe('Testa a função myRemove', () => {
    it('Verifica se a função retorna o esperado', () => {

        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })
    it('Verifica se a função não retorna o esperado', () => {

        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })
    it('Verifica se a função retorna o esperado', () => {

        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})