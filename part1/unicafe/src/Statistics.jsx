import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
  // Calculate total feedback count
  const total = good + neutral + bad;

  // Calculate average score
  const average = total === 0 ? 0 : (good - bad) / total;

  // Calculate percentage of positive feedback
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      {total === 0 ? (
        <p>No feedback given yet</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="Total" value={total} />
            <StatisticLine text="Average" value={average.toFixed(2)} />
            <StatisticLine text="Positive %" value={`${positivePercentage.toFixed(2)}%`} />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Statistics;
