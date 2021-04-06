import React from 'react'

const Course = ({courses}) => {
    return(
      <>
      <h1>Web development curriculum</h1>
      {courses.map(course => 
      <>
        <Header name={course.name} />
        {course.parts.map(part => <p key={part.name}>{part.name} {part.exercises}</p>)}
        <Total parts={course.parts}/>
        </>
      )}
      </>
    )
  }
  
  const Header = (name) => {
    return (
      <h2>{name.name}</h2>
    )
  }
  
  const Total = ({parts}) => {
  
    const total = parts.reduce((s, p, d, t) => {
      console.log(s + p.exercises, d, t);
      return (
        s + p.exercises
      )
    },0)
    return (
      <>
        <p>Number of exercises {total}</p>
      </>
    )
  }

export default Course