import React from 'react'

function StudentCard({ title, course, grade, result, project }) {
    return (
        <div className="student-card">
            <h3>{title}</h3>
            <p>Course: {course}</p>
            <p>Grade: {grade}</p>
            <p>Result: {result}</p>
            <p>Project: {project}</p>
        </div>
    )
}

export default StudentCard