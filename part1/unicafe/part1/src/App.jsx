/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';

const Button = ({ text, handleClick, btnClass }) => {
  return (
    <button className={btnClass} onClick={handleClick}>
      {text}
    </button>
  );
};

const StatisticLine = ({ classText, text, statistic }) => {
  return (
    <>
      <tr className={classText}>
        <td>{text}</td>
        <td>{statistic}</td>
      </tr>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good * 100) / all;

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine classText='goodText' text='good' statistic={good} />
          <StatisticLine
            classText='neutralText'
            text='neutral'
            statistic={neutral}
          />
          <StatisticLine classText='badText' text='bad' statistic={bad} />

          <StatisticLine text='all' statistic={all} />
          <StatisticLine text='average' statistic={all !== 0 ? average : 0} />
          <StatisticLine text='positive' statistic={all !== 0 ? positive : 0} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        btnClass='good'
        handleClick={() => setGood(good + 1)}
        text='good'
      />
      <Button
        btnClass='neutral'
        handleClick={() => setNeutral(neutral + 1)}
        text='neutral'
      />
      <Button btnClass='bad' handleClick={() => setBad(bad + 1)} text='bad' />

      {(good || neutral || bad) === 0 ? (
        <h3>No feedback given</h3>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  );
};

export default App;
