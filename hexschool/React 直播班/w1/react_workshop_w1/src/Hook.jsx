import { useState } from "react";

function Hooks() {
    const [a, setA] = useState(1);

    return (
        <div>
            Hooks
            <button onClick={() => {
                setA(a + 1);
                console.log(a);
            }}>{a}</button>
        </div>
    )
}

export default Hooks;