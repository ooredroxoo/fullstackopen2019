import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
      {part : 'Fundamentals of React', exercise : 10},
      {part : 'Using props to pass data', exercise: 7},
      {part : 'State of a component', exercise : 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts.reduce((acc, curr)=>{return acc+curr.exercise}, 0)} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))