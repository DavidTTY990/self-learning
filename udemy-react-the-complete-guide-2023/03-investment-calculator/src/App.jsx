import { useState } from "react";
import logo from './assets/investment-calculator-logo.png'
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
      [name]: parseInt(value),
    }));
  }

  const results = calculateInvestmentResults(userInput);

  return (
    <>
      <header id="header">
        <img src={logo} alt="" />
        <h1>React Investment Calculator</h1>
      </header>
      <div id="user-input">
        <div className="input-group">
          <div>
            <label htmlFor="">initial investment</label>
            <input
              type="number"
              name="initialInvestment"
              onChange={handleSetUserInput}
            />
          </div>
          <div>
            <label htmlFor="">annual investment</label>
            <input
              type="number"
              name="annualInvestment"
              onChange={handleSetUserInput}
            />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label htmlFor="">expected return</label>
            <input
              type="number"
              name="expectedReturn"
              onChange={handleSetUserInput}
            />
          </div>
          <div>
            <label htmlFor="">duration (year)</label>
            <input
              type="number"
              name="duration"
              onChange={handleSetUserInput}
            />
          </div>
        </div>
      </div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, resultIndex) => {
            return (
                <tr className="center" key={resultIndex}>
                  <th>{result.year}</th>
                  <td>{formatter.format(result.interest)}</td>
                  <td>{formatter.format(result.valueEndOfYear)}</td>
                  <td>{formatter.format(result.annualInvestment)}</td>
                  <td>{testing}</td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
