export function Summary({ questions, responses }) {
  const correctCount = questions.filter(
    (q, i) => responses[i] === q.correct_option
  ).length;
  const unansweredCount = questions.filter((q, i) => responses[i] === undefined)
    .length;

  return (
    <div>
      <h3>
        You got {correctCount} out of {questions.length} questions right!
      </h3>
      {unansweredCount > 0 && (
        <h3>You didn't provide an answer for {unansweredCount} question(s)</h3>
      )}
      {questions.map((q, i) => (
        <div key={i}>
          <div>
            Question {i + 1}: {q.text}
          </div>
          <div>Correct answer: {q.options[questions[i].correct_option]}</div>
          <div>You picked: {q.options[responses[i]]}</div>
          <br />
        </div>
      ))}
    </div>
  );
}
