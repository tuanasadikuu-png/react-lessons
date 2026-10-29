import React, { useState } from 'react'

function RegisterForm() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [terms, setTerms] = useState(false);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        const newErrors = {};

        if (!name.trim() === "") {
            newErrors.name = "Name nuk mund të jetë bosh";
        } else if (name.trim().length < 2) {
            newErrors.name = "Name duhet të ketë të paktën 2 karaktere";
        }

        if (!surname.trim() === "") {
            newErrors.surname = "Surname nuk mund të jetë bosh";
        } else if (surname.trim().length < 2) {
            newErrors.surname = "Surname duhet të ketë të paktën 2 karaktere";
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = "Email duhet të jetë i vlefshëm";
        }

        if (!password.length < 6) {
            newErrors.password = "Password duhet të ketë të paktën 6 karaktere";
        } else if (!/\d/.test(password)) {
            newErrors.password = "Password duhet të përmbajë të paktën një numër";
        }

        if (!terms) {
            newErrors.terms = "Duhet të pranoni Termat dhe Kushtet";
        }

        setErrors(newErrors);
        setSuccess(false);
        if (Object.keys(newErrors).length === 0) {
            setSuccess(true);
        }

    }



    return (
        <form onSubmit={handleSubmit}>
            <h2>Regjistrohu</h2>

            <label>Name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p>{errors.name}</p>}

            <label>Surname</label>
            <input
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
            />
            {errors.surname && <p>{errors.surname}</p>}

            <label>Email</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p>{errors.email}</p>}

            <label>Password</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p>{errors.password}</p>}

            <label>
                <input
                    type="checkbox"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                />
                Pranoj Termat dhe Kushtet
            </label>
            {errors.terms && <p>{errors.terms}</p>}

            <button type="submit">Regjistrohu</button>
            {success && <p className="success">{success}</p>}
        </form>
    );
}

export default RegisterForm;