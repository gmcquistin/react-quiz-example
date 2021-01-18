export function Question({
  text,
  options,
  number,
  selectedOptionIndex,
  onOptionSelect,
}) {
  return (
    <div>
      <div>
        Question {number}: {text}
      </div>
      {options.map((o, i) => (
        <div key={i}>
          <label>
            <input
              type="radio"
              name="question"
              checked={i === selectedOptionIndex}
              onChange={() => onOptionSelect(i)}
            />
            {o}
          </label>
        </div>
      ))}
    </div>
  );
}
