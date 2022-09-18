export const ButtonOperation = (dataProps) => {
  const verifyOperation = () => {
    if(dataProps.operation === 'AC') {
      return clearFields()
    }
    if(dataProps.operation === '=') {
      let equations = dataProps.equation.replaceAll('x', '*');
      return dataProps.setResultEquation(eval(equations))
    }
    if(dataProps.operation === '<') {
      const removeEndIndex = dataProps.equation;
      return dataProps.setEquation(removeEndIndex.substring(0, removeEndIndex.length - 1));
    }
    return sendOperation(dataProps.operation)
  }
  const clearFields = () => {
    dataProps.setEquation('')
    return dataProps.setResultEquation(0)
  };

  const sendOperation = () => {
    dataProps.setEquation((prev) => prev + dataProps.operation);
  };

  return (
    <button
      onClick={() => verifyOperation() }
      className="bg-blue-500 py-4 px-10 text-white text-xl rounded-lg"
    >
      { dataProps.operation }
    </button>
  );
};

export const ButtonNumbers = ({ number, setEquation }) => {
  return (
    <button
      onClick={() => setEquation((prev) => prev + number)}
      className="border-blue-500 text-blue-500 border-2 py-4 px-10 text-xl rounded-lg">
      { number }
    </button>
  )
}
