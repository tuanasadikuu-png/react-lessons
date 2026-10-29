import React, { useState } from 'react'

function RegisterForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [course, setCourse] = useState("");
    const [accepted, setAccepted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        console.log(firstName, lastName, email, password, course, accepted);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-controll">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />

                </div>
                <div className="form-controll">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="form-controll">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-controll">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-controll">
                    <label htmlFor="course">Course</label>
                    <input type="text"
                        id="course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)} />
                    <select value={course} onChange={(e) => setCourse(e.target.value)}>
                        <option value="">Select a course</option>
                        <option value="react">React</option>
                    </select>
                </div>
                <div className="form-controll">
                    <label htmlFor="accepted">
                        <input type="checkbox"
                            id="accepted"
                            checked={accepted}
                            onChange={(e) => setAccepted(e.target.checked)} />
                        I accept the terms and conditions
                    </label>

                </div>
                <div className="form-controll">
                    <label htmlFor="firstName">Accept Terms</label>
                    <input type="checkbox"
                        id="Accept Terms"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.checked)} />

                </div>
                <p>style</p> <button type="submit" disabled={!accepted || !firstName || !lastName || !email || !password || !course}>Register</button>
            </form>
        </div>


    )
}

//Name;
a]mos me qen empty 
b]mos me qen me pak se 2karaktere
c]mos me pas hapsir

Surname;
njejt si name
email;te ket @
pass;te ket mshm se 6 karaktere
ni nr edhe shkre madhe

t & c
e selektuar



export default RegisterForm
