import React, { useState } from 'react'

function Password() {
    const [password, setPassword] = useState("");
    return (
        <div>
            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}

            />
            <p> {password.length}</p>
            {password.length < 6 ? "weak" : "ok"}
        </div>
    )
}

export default Password