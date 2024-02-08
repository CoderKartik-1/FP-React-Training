
import { useState, useEffect } from "react";

export default function WorkingWithCounterState() {

    var [counter, setCounter] = useState(0);

    useEffect(() => {
        // Runs of Re-rendering and Initial Rendering as well.
        console.log("Hello All, The value has Incremented")
    })
    
    useEffect(() => {
        // Runs of Re-rendering and Initial Rendering as well.
        console.log("Hello All, The value has Incremented - Empty")
        
        setInterval(() => {
            incrementCounter();
        }, 1000)
        
    }, [])
    
    function incrementCounter() {
        
        // setCounter(counter + 1)
        
        setCounter((initialCounterValue) => {
            return initialCounterValue + 1
        })
    }
    
    // setTimeout(() => {
    //     setCounter((initialCounterValue) => {
    //         return initialCounterValue + 1
    //     })
    // }, 1000)
    
    return (
        <div>
            <h1>Counter Value is {counter}</h1>
            <input type="button" value="Increment" onClick={incrementCounter} />
        </div>
    )
    
}