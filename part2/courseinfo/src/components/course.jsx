/* eslint-disable react/prop-types */

const Header = ({ course }) => <h1>{course.name}</h1>;

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

// const Total = ({ sum }) => <p>Number of exercises {sum}</p>;

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
    </>
  );
};

export default Course;
