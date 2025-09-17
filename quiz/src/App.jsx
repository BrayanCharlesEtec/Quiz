import React, { useState } from "react";
import Quiz from "./componentes/Quiz";
import Home from "./componentes/Home";

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleEndQuiz = () => {
    setQuizStarted(false);
  };

  return (
    <>
      {quizStarted ? (
        <Quiz onEndQuiz={handleEndQuiz} />
      ) : (
        <Home onStartQuiz={handleStartQuiz} />
      )}
    </>
  );
};

export default App;