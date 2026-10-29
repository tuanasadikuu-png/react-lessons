import React, { useState } from 'react'

function Radio() {
    const [selected, setSelected] = useState(false);

    return (
        <div>
            <input type="radio" value="male" checked={selected === "male"} onChange={(e) => setSelected(e.target.value)} />
            <input type="radio" value="female" checked={selected === "female"}
                onChange={(e) => setSelected(e.target.value)} />
            <p>{selected ? "Selected" : "Not selected"}</p>

        </div>
    )
}

export default Radio