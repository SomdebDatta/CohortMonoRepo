import { useMemo } from "react";
import { useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation 
// (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    // Your solution ends here

    const factorial = useMemo(() => {
        let sum = 1;
        for(let i=2; i<=input; i++) {
            sum+=i;
        }
        console.log("calculated factorial...")
        return sum;
    }, [input]);

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {factorial}</p>
        </div>
    );
}