export function Navigation({
  currentQuestionIndex,
  maxQuestionIndex,
  onIndexChange,
  onCompleteClick,
}) {
  const isLastQuestion = currentQuestionIndex === maxQuestionIndex;
  const isFirstQuestion = currentQuestionIndex === 0;

  return (
    <div>
      {!isFirstQuestion && (
        <input
          type="button"
          onClick={() => onIndexChange(currentQuestionIndex - 1)}
          value="Previous Question"
        />
      )}
      {!isLastQuestion && (
        <input
          type="button"
          onClick={() => onIndexChange(currentQuestionIndex + 1)}
          value="Next Question"
        />
      )}
      {isLastQuestion && (
        <input
          type="button"
          onClick={() => onCompleteClick()}
          value="Complete Quiz"
        />
      )}
    </div>
  );
}
