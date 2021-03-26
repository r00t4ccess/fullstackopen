import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  if (bad + good +neutral === 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  } else {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistics text="good" value={good} />
            <Statistics text="bad" value={bad} />
            <Statistics text="neutral" value={neutral} />
            <Statistics text="all" value={neutral + good + bad} />
            <Statistics text="average" value={(neutral + good + bad / 3)} />
            <Statistics text="positive" value={(good / (neutral + good + bad) * 100)} />
          </tbody>
        </table>
      </div>
    )
  }
}

const Statistics = (props) => {
  console.log(props);
  if (props.text === "positive") {
    return(
      <tr>
        <td>{props.text}</td> 
        <td>{props.value} %</td> 
      </tr>
    )
  }
  return(
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td> 
    </tr>
  )
}

export default App
