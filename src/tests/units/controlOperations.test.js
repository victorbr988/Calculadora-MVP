import { describe, it, expect } from 'vitest';
import { controlOperations } from '../../utils/operationFunctions';

describe('Testa a função que faz os cálculos dos números digitados pelo usuário', () => {
  describe('Quando a operação for do tipo "Soma"', () => {
    it('Verifica se a função retorna a soma dos números', () => {
      const sum = controlOperations('+', 2, 2);

      expect(sum).to.be.equals(4);
    });
  });
  describe('Quando a operação for do tipo "Subtração"', () => {
    it('Verifica se a função retorna a subtração dos números', () => {
      const sub = controlOperations('-', 5, 1);

      expect(sub).to.be.equals(4);
    });
  });
  describe('Quando a operação for do tipo "Divisão"', () => {
    it('Verifica se a função retorna a divisão dos números', () => {
      const div = controlOperations('/', 4, 1);

      expect(div).to.be.equals(4);
    });
  });
  describe('Quando a operação for do tipo "Multiplicação"', () => {
    it('Verifica se a função retorna a multiplicação dos números', () => {
      const mult = controlOperations('x', 3, 3);

      expect(mult).to.be.equals(9);
    });
  });
});
