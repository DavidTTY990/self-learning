export default function UserInput({ handleSetUserInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="">initial investment</label>
          <input
            type="number"
            name="initialInvestment"
            required
            onChange={handleSetUserInput}
          />
        </div>
        <div>
          <label htmlFor="">annual investment</label>
          <input
            type="number"
            name="annualInvestment"
            required
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
            required
            onChange={handleSetUserInput}
          />
        </div>
        <div>
          <label htmlFor="">duration (year)</label>
          <input type="number" name="duration" onChange={handleSetUserInput} />
        </div>
      </div>
    </section>
  );
}
