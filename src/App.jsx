import { CardCalculator } from './components/CardCalculator';

export const App = () => {
  return (
    <div className="h-screen bg-blue-500 flex flex-col justify-center items-center">
      <h1 className='mb-10 text-3xl text-center text-white'>Faça cálculos com operações básicas</h1>
      <CardCalculator />
    </div>
  );
};
