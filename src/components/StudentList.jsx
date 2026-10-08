import React from 'react'
import StudentCard from './StudentCard'

function StudentList() {
    return (
        <div className="student-list">
            <StudentCard
                title="Student 1"
                course="Math"
                grade="A"
                result="Pass"
                project="Final Project"
            />
            <StudentCard
                title="Student 2"
                course="Math"
                grade="A"
                result="Pass"
                project="Final Project"
            />
            <StudentCard
                title="Student 3"
                course="Math"
                grade="A"
                result="Pass"
                project="Final Project"
            />
            <StudentCard
                title="Student 4"
                course="Math"
                grade="A"
                result="Pass"
                project="Final Project"
            />
        </div>
    )
}

export default StudentList