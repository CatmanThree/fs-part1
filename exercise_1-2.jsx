const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part[0]} exercises={props.exercises[0]} />
      <Part part={props.part[1]} exercises={props.exercises[1]} />
      <Part part={props.part[2]} exercises={props.exercises[2]} />
    </>
  );
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
}

const Total = (props) => {
  return <p>Number of exercises {props.exercises.reduce((acc, current) => acc + current)}</p>;
}

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";

  const exercises = [10, 7, 14]
  const part = [part1, part2, part3]

  return (
    <div>
      <Header course={course} />
      <Content part={part} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  );
};

export default App;
