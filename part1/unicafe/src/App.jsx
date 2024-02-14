import React, { useState } from 'react';
import Statistics from './Statistics';
import Button from './Button';

const App = () => {
  // State for tracking feedback counts
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Function to handle feedback submission
  const handleFeedback = (type) => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" handleClick={() => handleFeedback('good')} />
      <Button text="Neutral" handleClick={() => handleFeedback('neutral')} />
      <Button text="Bad" handleClick={() => handleFeedback('bad')} />

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
