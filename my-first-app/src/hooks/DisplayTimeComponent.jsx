import { useState } from "react";

export default function DisplayTimeComponent() {
    
    var [currentTime, setCurrentTime] = useState(returnCurrentTime());

    function returnCurrentTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }
    
    setTimeout(function getLastData() {
        setCurrentTime(returnCurrentTime());
        console.log(currentTime);
    }, 1000)
    
    return <h1>Current Time is {currentTime}</h1>
}