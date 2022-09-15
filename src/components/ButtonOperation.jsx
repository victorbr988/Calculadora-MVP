export const ButtonOperation = ({ operation, setOperation, setFirstNumber, setSecondNumber }) => {

  const clearFields = () => {
    setOperation('');
    setFirstNumber('')
    setSecondNumber('')
  }

  const sendOperation = () => {
    setOperation(operation);
  }
  
  return (
    <button
      onClick={() => {
          operation === 'AC' ? clearFields() : sendOperation()
        }
      }
      className="bg-blue-500 py-4 px-10 text-white text-xl rounded-lg"
      >
        { operation }
      </button>
  );
};
