import React, { useState } from 'react'

function Form() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        setError(
            firstName === ""
                ? "First Name is required"
                : lastName === ""
                    ? "Last Name is required"
                    : ""

        )
        console.log(firstName, lastName, email, password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <p>{error}</p>
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <p> First Name: {firstName}</p>
                <p> Last Name: {lastName}</p>
                <p> Email: {email}</p>
                <p> Password: {password}</p>
                <button type="submit"> Click</button>
            </form>

        </div>
    )
}
//detyre shtepie mi shfaq te dhenat detyre shtepie pasi qe behet submit

export default Form