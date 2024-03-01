export default function ResultTable({resultsData, formatter}) {
    console.log(resultsData);
    const initialInvestment = 
    return (
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
          {resultsData.map((result, resultIndex) => {
            return (
                <tr className="center" key={resultIndex}>
                  <th>{result.year}</th>
                  <td>{formatter.format(result.interest)}</td>
                  <td>{formatter.format(result.valueEndOfYear)}</td>
                  <td>{formatter.format(result.annualInvestment)}</td>
                  <td>Testing</td>
                </tr>
            );
          })}
        </tbody>
      </table>
    )
}