import logo from "./assets/investment-calculator-logo.png";
import Header from "./components/Header"
import UserInput from "./Components/UserInput";
import ResultTable from "./Components/ResultTable";
import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1,
    annualInvestment: 1,
    expectedReturn: 1,
    duration: 1,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleSetUserInput(e) {
    const { name, value } = e.target;
      setUserInput((prevUserInput) => ({
        ...prevUserInput,
        [name]: parseInt(value, 10), // or +value (The plus sign will force the variable to be number instead of string)
      }));
  }

  return (
    <>
      <Header logo={logo} />
      <UserInput handleSetUserInput={handleSetUserInput} />
      {!inputIsValid && <p className="center">Duration should be greater than zero</p>}
      {inputIsValid && <ResultTable userInput={userInput} formatter={formatter} />}
    </>
  );
}

export default App;
