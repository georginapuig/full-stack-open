/* eslint-disable react/prop-types */
const Total = ({ parts }) => {
  const sum = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );

  return <p>Number of exercises {sum}</p>;
};

export default Total
