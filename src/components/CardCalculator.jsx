import { useState } from 'react';
import { ButtonNumbers, ButtonOperation } from './ButtonOperation';
import { optionsOperations } from "../utils/operations";

export const CardCalculator = () => {
  const [equation, setEquation] = useState('');
  const [resultEquation, setResultEquation] = useState(0);
  const AllNumbers = ['1','2','3','4','5','6','7','8','9','0']

  return (
    <section className="bg-gray-100 max-w-xl shadow-xl rounded-lg">
      <h1 className="text-center p-2 text-xl">Coloque dois números e escolha a operação</h1>
      
      <section className="sm:flex-row flex flex-col gap-4 p-8 justify-between">
        <p
          className="border-2 border-blue-500 text-lg w-full text-end rounded-lg p-2 shadow-lg"
          type="text"
        >
          {equation || 0}
        </p>
      </section>

      <section>
        <p type="text" className="text-end text-3xl px-8 border-b-[1px] border-blue-500 mx-8 py-4"
        >
          { resultEquation }
        </p>
      </section>

      <section className="flex flex-wrap justify-center sm:justify-between gap-2 p-8">
        { optionsOperations.map((operation) => <ButtonOperation
          key={operation}
          operation={operation}
          setResultEquation={setResultEquation}
          equation={equation}
          setEquation={setEquation}
        />)}
      </section>
      <section className='flex flex-wrap justify-center p-8 gap-2'>
        { AllNumbers.map((number) => <ButtonNumbers
          key={number}
          setEquation={setEquation}
          equation={equation}
          number={number}
        />)}
      </section>
    </section>
  );
};
