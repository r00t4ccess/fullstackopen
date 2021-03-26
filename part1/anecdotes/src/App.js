import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br />
      has {votes[selected]} votes <br />
      <Button handleClick={() => setVotes(Vote(selected, votes))} text="vote" />
      <Button handleClick={() => setSelected(~~(Math.random() * 6))} text="Next anecdote" /> <br />
      <h1>Anecdote with the most votes</h1>
      {anecdotes[MostVotes(votes).index]} <br />
      has {MostVotes(votes).highest} votes <br />
    </div>
  )
}

const Vote = (selected, votes) => {
  const copy = [...votes];
  copy[selected] += 1
  return(copy)
}

const MostVotes = (votes) => {
  let highest = Math.max(...votes)
  let index = Object.keys(votes).find(index => votes[index] === highest)
  console.log(index, highest);
  return {index: index, highest: highest}
}

export default App