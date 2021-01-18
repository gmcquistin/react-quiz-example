import { useState } from "react";
import { Navigation } from "./Navigation";
import { Question } from "./Question";
import { Summary } from "./Summary";

/*
  <Quiz> takes an array of questions (defined in src/questions.json)

  The current question is rendered as a <Question>. 
  The current index is stored in state. This starts at 0.
  <Question> lets us know when an option is selected. Responses to questions are 
  stored as an object in state within <Quiz>, it looks like this:

    { 0: 2, 1: 3, 2: 1 }

  Where the key is the question index and the value is the selected answer.

  ---------------

  Next, Previous and Complete Quiz buttons are provided by <Navigation>. 
  These update the current index in <Quiz> as appropriate.

  ---------------

  Whether or not the quiz is complete is stored in state within <Quiz>. 
  When the user clicks Complete Quiz, this flag is flipped and the <Summary> is displayed.

  A reset button resets state so the user can start again.
*/

export function Quiz({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [isComplete, setComplete] = useState(false);

  const renderQuestions = () => (
    <div>
      <Question
        number={currentQuestionIndex + 1}
        selectedOptionIndex={responses[currentQuestionIndex]}
        onOptionSelect={(i) =>
          setResponses({ ...responses, [currentQuestionIndex]: i })
        }
        {...questions[currentQuestionIndex]}
      />
      <Navigation
        currentQuestionIndex={currentQuestionIndex}
        maxQuestionIndex={questions.length}
        onIndexChange={(i) => setCurrentQuestionIndex(i)}
        onCompleteClick={() => setComplete(true)}
      />
    </div>
  );

  const renderSummary = () => {
    const reset = () => {
      setResponses({});
      setComplete(false);
      setCurrentQuestionIndex(0);
    };

    return (
      <div>
        <Summary questions={questions} responses={responses} />
        <input type="button" value="Reset" onClick={reset} />
      </div>
    );
  };

  return !isComplete ? renderQuestions() : renderSummary();
}
