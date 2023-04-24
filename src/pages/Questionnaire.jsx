import React, { useState } from 'react';
import backgroundImage from '../assets/Questionair.jpg';
import '../components/Questionair.css';

function Questionnaire() {
  const questions = [
    {
      question: 'What is your favorite color?',
      answers: ['Red', 'Green', 'Blue', 'Yellow']
    },
    {
      question: 'What is your favorite animal?',
      answers: ['Dog', 'Cat', 'Horse', 'Bird']
    },
    {
      question: 'What is your favorite food?',
      answers: ['Pizza', 'Tacos', 'Sushi', 'Burgers']
    },
    {
      question: 'What is your favorite hobby?',
      answers: ['Reading', 'Playing Sports', 'Watching Movies', 'Traveling']
    },
    {
      question: 'What is your favorite season?',
      answers: ['Spring', 'Summer', 'Fall', 'Winter']
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowNextButton(true);
  };

  const handleNextQuestion = () => {
    setResults([...results, selectedAnswer]);
    setSelectedAnswer(null);
    setShowNextButton(false);
    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const renderQuestion = (question, index) => {
    return (
      <div key={index} className="question">
        <div className="question-text">
          <h3>{question.question}</h3>
        </div>
        <div className="answer-options">
          {question.answers.map((answer, index) => (
            <button key={index} onClick={() => handleAnswerSelect(answer)}>{answer}</button>
          ))}
        </div>
      </div>
    );
  };

  const renderResults = () => {
    return (
      <div className="results">
        <h2>Results</h2>
        <ul>
          {results.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="questionnaire">
      <header></header>
      <img className="backgroundImage" src={backgroundImage} alt="Background" />
      <div className="question-box">
        {!showResults ? (
          <>
            {renderQuestion(questions[currentQuestion], currentQuestion)}
            {showNextButton && <button onClick={handleNextQuestion}>Next</button>}
          </>
        ) : (
          renderResults()
        )}
      </div>
      <body></body>
      <footer></footer>
    </div>
  );
}

export default Questionnaire;