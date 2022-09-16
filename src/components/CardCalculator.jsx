import { useState } from 'react';
import { ButtonOperation } from './ButtonOperation';
import { optionsOperations } from "../utils/operations";
import { controlOperations } from '../utils/operationFunctions';

export const CardCalculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');
  const value = controlOperations( operation, firstNumber, secondNumber);

  return (
    <section className="bg-gray-100 shadow-xl rounded-lg">
      <h1 className="text-center p-2 text-xl">Coloque dois número e escolha a operação</h1>
      
      <section className="sm:flex-row flex flex-col gap-4 p-8 justify-between">
        <input
          value={firstNumber}
          onChange={({ target }) => setFirstNumber(+target.value)}
          className="border-2 border-blue-500 text-lg text-center rounded-lg p-2 shadow-lg"
          type="number"
        />

        <input
          value={secondNumber}
          onChange={({ target }) => setSecondNumber(+target.value)}
          className="border-2 border-blue-500 rounded-lg text-lg text-center p-2 shadow-lg"
          type="number"
        />
      </section>

      <section>
        <p type="text" className="text-end text-3xl px-8 border-b-[1px] border-blue-500 mx-8 py-4"
        >
          { value ? value : 0 }
        </p>
      </section>

      <section className="flex flex-wrap justify-center sm:justify-between gap-2 p-8">
        { optionsOperations.map((operation) => <ButtonOperation
          key={operation}
          operation={operation}
          setOperation={setOperation}
          setFirstNumber={setFirstNumber}
          setSecondNumber={setSecondNumber}
        />)}
      </section>
    </section>
  );
};
