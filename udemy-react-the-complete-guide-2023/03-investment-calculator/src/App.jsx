function App() {
  return (
    <>
      <header id="header">
        <img src="/investment-calculator-logo.png" alt="" />
        <h1>React Investment Calculator</h1>
      </header>
      <div id="user-input">
        <div className="input-group">
          <div>
            <label htmlFor="">innitial investment</label>
            <input type="number" />
          </div>
          <div>
            <label htmlFor="">annual investment</label>
            <input type="number" />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label htmlFor="">expected return</label>
            <input type="number" />
          </div>
          <div>
            <label htmlFor="">duration (year)</label>
            <input type="number" />
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
      </table>
    </>
  );
}

export default App;
