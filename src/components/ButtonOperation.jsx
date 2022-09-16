export const ButtonOperation = (dataProps) => {

  const clearFields = () => {
    dataProps.setOperation('');
    dataProps.setFirstNumber('');
    dataProps.setSecondNumber('');
  };

  const sendOperation = () => {
    dataProps.setOperation(dataProps.operation);
  };
  
  return (
    <button
      onClick={() => {
        dataProps.operation === 'AC' ? clearFields() : sendOperation();
        }
      }
      className="bg-blue-500 py-4 px-10 text-white text-xl rounded-lg"
      >
        { dataProps.operation }
      </button>
  );
};
