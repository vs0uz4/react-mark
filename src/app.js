import React, { useState } from 'react'

import { lower } from './lib/utils'
import Highlight from './components/highlight'

const App = () => {
  const [word, setWord] = useState('')
  const [courseName, setCourseName] = useState('')
  const [courseHours, setCourseHours] = useState('')
  const [courseLevel, setCourseLevel] = useState('')

  function handleChange (fnc) {
    return (e) => {
      fnc(e.target.value)
    }
  }

  return (
    <>
      <input type='text' value={word} onChange={handleChange(setWord)} />
      <p>
        <Highlight children='Texto a ser marcado.' toHighlight={word} />
      </p>

      <p>
        <Highlight children='Um outro texto que também poderá ser marcado.' toHighlight={word} />
      </p>

      <table>
        <thead>
          <tr>
            <th>Cursos</th>
            <th>Horas</th>
            <th>Nível</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type='text' value={courseName} onChange={handleChange(setCourseName)} /></td>
            <td><input type='text' value={courseHours} onChange={handleChange(setCourseHours)} /></td>
            <td><input type='text' value={courseLevel} onChange={handleChange(setCourseLevel)} /></td>
          </tr>

          {courses
            .filter((course) => (
              lower(course.name).includes(lower(courseName)) && lower(course.hours).includes(lower(courseHours)) && lower(course.level).includes(lower(courseLevel))
            ))
            .map((course) => (
              <tr key={course.name}>
                <td><Highlight toHighlight={courseName}>{course.name}</Highlight></td>
                <td><Highlight toHighlight={courseHours}>{course.hours}</Highlight></td>
                <td><Highlight toHighlight={courseLevel}>{course.level}</Highlight></td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

const courses = [
  {
    name: 'Javascript Ninja',
    hours: '42h',
    level: 'Intermediário'
  },
  {
    name: 'React.js Ninja',
    hours: '66h',
    level: 'Intermediário'
  },
  {
    name: 'Git e Github Ninja',
    hours: '9h',
    level: 'Básico'
  }
]

export default App
