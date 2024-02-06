import { useState } from "react";

export default function UpdateCounter(){
    var [count, setCounter] = useState(0); //getter, setter
    
    var [empDetails, setEmpDetails] = useState({
        userName: "Mayank",
        userDesignation: "trainer",
        userAge: 10
    });

    function incrementCounter(){
        setCounter((oldCounterVal) =>{
            if(oldCounterVal==10){
                return 100;
            }
            return oldCounterVal + 1;
        });
        console.log(count);
    }

    function updateName(inputString){
        // Immutability = Object should not be mutated...
        var newObject = {
            ...empDetails,
            userName : "Kartik"
        }
        // newObject.userName =  "Kartik";
        
        setEmpDetails(newObject)
    }

    return (
        <div>
            <h1> The counter is {count}</h1>
            <input type="button" value="Increment" onClick={incrementCounter} /> <hr />
            <h1> The name is {empDetails.userName} </h1>
            <h2> The age is {empDetails.userAge} </h2>
            <h3> The designation is {empDetails.userDesignation} </h3>
            <input type="button" value="ChangeName" onClick={updateName} /> <hr />
        </div>
    )
}