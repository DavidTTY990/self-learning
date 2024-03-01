import logo from "./assets/investment-calculator-logo.png";
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import ResultTable from "./Components/ResultTable";
import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleSetUserInput(e) {
    const { name, value } = e.target;
      setUserInput((prevUserInput) => ({
        ...prevUserInput,
        [name]: parseInt(value, 10), // or +value (The plus sign will force the variable to be number instead of string)
      }));
  }

  const resultsData = calculateInvestmentResults(userInput);

  return (
    <>
      <Header logo={logo} />
      <UserInput handleSetUserInput={handleSetUserInput} />
      <ResultTable resultsData={resultsData} formatter={formatter} />
    </>
  );
}

export default App;
