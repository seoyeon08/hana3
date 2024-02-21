import { useEffect, useState } from "react";

export default function Effect() {
    
    const [r, rerender] = useState();
    // useEffect(,[r]);

    return(
        <>
            {/* <input type="text" onChange={() => rerender((p) => p + 1)} /> */}
            <button>Show Effect</button>
        </>
    );
}