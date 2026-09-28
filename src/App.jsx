
import React from 'react'

const technology = ['React', 'Vue', 'Angular', 'Svelte']
const students = [
  { id: 1, name: 'Alice', age: 20 },
  { id: 2, name: 'Bob', age: 22 },
  { id: 3, name: 'Charlie', age: 21 }
]

function App() {
  return (
    <div>{
      technology.map((technology) => (
        <p key={technology}>{technology}</p>
      ))
    }
      {
        students.map((student) => (
          <p key={student.id}>{student.name}</p>

        ))

      }
    </div>


  )
}

export default App