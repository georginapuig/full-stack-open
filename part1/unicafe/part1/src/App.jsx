/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        btnClass='goodBtn'
        handleClick={() => setGood(good + 1)}
        text='good'
      />
      <Button
        btnClass='neutralBtn'
        handleClick={() => setNeutral(neutral + 1)}
        text='neutral'
      />
      <Button
        btnClass='badBtn'
        handleClick={() => setBad(bad + 1)}
        text='bad'
      />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good * 100) / all;

  return (
    <div>
      <h1>statistics</h1>
      {all === 0 ? (
        <h3>No feedback given</h3>
      ) : (
        <table>
          <tbody>
            <StatisticLine classText='good' text='good' value={good} />
            <StatisticLine classText='neutral' text='neutral' value={neutral} />
            <StatisticLine classText='bad' text='bad' value={bad} />
            <StatisticLine text='all' value={all} />
            <StatisticLine text='average' value={average} />
            <StatisticLine text='positive' value={positive} />
          </tbody>
        </table>
      )}
    </div>
  );
};

const StatisticLine = ({ classText, text, value }) => {
  return (
    <>
      <tr className={classText}>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

const Button = ({ text, handleClick, btnClass }) => {
  return (
    <button className={btnClass} onClick={handleClick}>
      {text}
    </button>
  );
};

export default App;
