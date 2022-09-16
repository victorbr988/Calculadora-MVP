import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { App } from '../../App';
import { ButtonOperation } from '../../components/ButtonOperation';

describe('Testa a página inicial do componente "App"', () => {
  describe('Testa se a página possui os elementos em tela', () => {
    it('Verifica se a página possui um título', () => {
      const { debug, getByRole } = render(<App />);
      const titleEl = getByRole('heading', {
        name: /Faça cálculos com operações básicas/i,
        level: 1
      });

      expect(titleEl).toBeInTheDocument();
      debug();
    });
  });
  describe('Testa se na área de calculadora os elementos estão presentes', () => {
    it('Verifica se a área possui um título', () => {
      const { debug, getByRole } = render(<App />);
      const secondTitleEl = getByRole('heading', {
        name: /Coloque dois números e escolha a operação/i,
        level: 2
      });

      expect(secondTitleEl).toBeInTheDocument();
      debug();
    });
    it('Verifica se a área possui dois inputs', () => {
      const { debug, getByTestId } = render(<App />);
      const inputFirstNumber = getByTestId('firstNumber');
      const inputSecondNumber = getByTestId('secondNumber');
      
      expect(inputFirstNumber).toBeInTheDocument();
      expect(inputSecondNumber).toBeInTheDocument();
      debug();
    });
    it('Verifica se a área possui um campo que exibe o resultado da operação', () => {
      const { debug, getByTestId } = render(<App />);
      const tagWithResultOperation = getByTestId('result-operation');
      
      expect(tagWithResultOperation).toBeInTheDocument();
      expect(tagWithResultOperation.innerHTML).to.be.equals('0');
      debug();
    });
    it('Verifica se a área possui os botões com as operações matemáticas', () => {
      const { debug, getByRole } = render(<App />);
      const buttonSum = getByRole('button', {
        name: '+'
      });
      const buttonDiv = getByRole('button', {
        name: '/'
      });
      const buttonSub = getByRole('button', {
        name: '-'
      });
      const buttonMult = getByRole('button', {
        name: 'x'
      });
      
      expect(buttonSum).toBeInTheDocument();
      expect(buttonDiv).toBeInTheDocument();
      expect(buttonSub).toBeInTheDocument();
      expect(buttonMult).toBeInTheDocument();
      debug();
    });
    it('Verifica se ao inserir dois números e clicar no botão de soma, verifica se a soma é renderizada', () => {
      const { debug, getByRole, getByTestId } = render(<App />);
      const inputFirstNumber = getByTestId('firstNumber');
      const inputSecondNumber = getByTestId('secondNumber');

      const buttonSum = getByRole('button', {
        name: '+'
      });
      fireEvent.change(inputFirstNumber, {target: {value: '2'}})
      fireEvent.change(inputSecondNumber, {target: {value: '2'}})
      fireEvent.click(buttonSum);
      const tagWithResultOperation = getByTestId('result-operation');
      
      expect(tagWithResultOperation.innerHTML).to.be.equals('4');
      debug();
    });
    it('Verifica se ao inserir dois números e clicar no botão de subtração, verifica se a subtração é renderizada', () => {
      const { debug, getByRole, getByTestId } = render(<App />);
      const inputFirstNumber = getByTestId('firstNumber');
      const inputSecondNumber = getByTestId('secondNumber');

      const buttonSub = getByRole('button', {
        name: '-'
      });
      fireEvent.change(inputFirstNumber, {target: {value: '4'}})
      fireEvent.change(inputSecondNumber, {target: {value: '3'}})
      fireEvent.click(buttonSub);
      const tagWithResultOperation = getByTestId('result-operation');
      
      expect(tagWithResultOperation.innerHTML).to.be.equals('1');
      debug();
    });
    it('Verifica se ao inserir dois números e clicar no botão de divisão, verifica se a divisão é renderizada', () => {
      const { debug, getByRole, getByTestId } = render(<App />);
      const inputFirstNumber = getByTestId('firstNumber');
      const inputSecondNumber = getByTestId('secondNumber');

      const buttonDiv = getByRole('button', {
        name: '/'
      });
      fireEvent.change(inputFirstNumber, {target: {value: '10'}})
      fireEvent.change(inputSecondNumber, {target: {value: '5'}})
      fireEvent.click(buttonDiv);
      const tagWithResultOperation = getByTestId('result-operation');
      
      expect(tagWithResultOperation.innerHTML).to.be.equals('2');
      debug();
    });
    it('Verifica se ao inserir dois números e clicar no botão de multiplicação, verifica se a multiplicação é renderizada', () => {
      const { debug, getByRole, getByTestId } = render(<App />);
      const inputFirstNumber = getByTestId('firstNumber');
      const inputSecondNumber = getByTestId('secondNumber');

      const buttonSub = getByRole('button', {
        name: 'x'
      });
      fireEvent.change(inputFirstNumber, {target: {value: '3'}})
      fireEvent.change(inputSecondNumber, {target: {value: '3'}})
      fireEvent.click(buttonSub);
      const tagWithResultOperation = getByTestId('result-operation');
      
      expect(tagWithResultOperation.innerHTML).to.be.equals('9');
      debug();
    });
  });
});
