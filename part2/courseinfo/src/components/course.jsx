/* eslint-disable react/prop-types */

const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => (
  <>
    {parts.map((part) => {
      return <Part key={part.id} part={part} />;
    })}
  </>
);

const Total = ({ parts }) => {
  const sum = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );

  return <p>Number of exercises {sum}</p>;
};

const Course = ({ courses }) => {
  {
    return courses.map((course) => {
      return (
        <>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </>
      );
    });
  }
};

export default Course;
