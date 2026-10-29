import React, { useState } from 'react'

function Checkbox() {
    const [accepted, setAccepted] = useState(false);
    return (
        <div>
            <input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
            <p>{accepted ? "Accepted" : "Not accepted"}</p>
        </div>
    )
}

export default Checkbox