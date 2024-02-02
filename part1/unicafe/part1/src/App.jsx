import { useState } from 'react';
import './App.css';

// eslint-disable-next-line react/prop-types
const Button = ({ text, handleClick, btnClass }) => {
  return (
    <button className={btnClass} onClick={handleClick}>
      {text}
    </button>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good * 100) / all;

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

      <h1>statistics</h1>
      <p className='goodText'>good: {good}</p>
      <p className='neutralText'>neutral: {neutral}</p>
      <p className='badText'>bad: {bad}</p>
      <p>all: {all}</p>
      <p>average: {average}</p>
      <p>positive: {positive}%</p>
    </div>
  );
};

export default App;
