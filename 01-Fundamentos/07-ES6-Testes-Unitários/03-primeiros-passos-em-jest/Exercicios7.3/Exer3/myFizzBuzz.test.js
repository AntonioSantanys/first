const { expect } = require('expect');
const myFizzBuzz = require('./myFizzBuzz');


describe('Verifica a função myFizzBuzz', () => {
    it('Verifica se a função myFizzBuzz(15) retorna fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })
    it('Verifica se a função myFizzBuzz(9) retorna fizz', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    })
    it('Verifica se a função myFizzBuzz(5) retorna buzz', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    })
    it('Verifica se a função myFizzBuzz(8) retorna ele mesmo', () => {
        expect(myFizzBuzz(8)).toBe(8);
    })
    it('Verifica se a função myFizzBuzz("string") retorna false', () => {
        expect(myFizzBuzz('string')).toBeUndefined;
    });

})