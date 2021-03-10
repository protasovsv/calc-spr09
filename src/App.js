import React, { useState } from "react";
import CalculatorForm from './Components/CalculatorForm';



function App() {
  const [equation, setEquation] = useState({});

  function updateEquation(e) {
    setEquation({
      ...equation,
      [e.target.id]: e.target.value
    });
  }

  function doOperation() {
    switch (equation.op) {
      case 'add':
        console.log("Result: " + (parseFloat(equation.op1) + parseFloat(equation.op2)));
        break;
      default:
        console.log('todo');
        break;
    }
  }

  return (
    <div className="App">
      <h1>This is a calculator</h1>
      <CalculatorForm update={updateEquation} action={doOperation} />
    </div>
  );
}

export default App;
