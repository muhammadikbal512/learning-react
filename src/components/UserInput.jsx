const inputGroup = [
  { label: "Initial Investment", id: "initialInvestment" },
  { label: "Annual Investment", id: "annualInvestment" },
  { label: "Expected Return", id: "expectedReturn" },
  { label: "Duration", id: "duration" },
];

export default function UserInput({ userInput, onHandleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        {inputGroup.map((input) => (
          <div key={input.id}>
            <label>{input.label}</label>
            <input
              type="number"
              value={userInput[input.id]}
              onChange={(e) => onHandleChange(input.id, e.target.value)}
              required
            />
          </div>
        ))}
      </div>
    </section>
  );
}
