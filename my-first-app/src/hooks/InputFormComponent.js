import { useState } from "react";

export default function InputFormComponent() {
    
    var [UserName, setUserName] = useState();
    var [UserAge, setUserAge] = useState();
    var [UserDesignation, setUserDesignation] = useState();
    var [UserSalary, setUserSalary] = useState();
    var [UserBonus, setUserBonus] = useState();
    
    function submitDetails() {
        alert("User Name is: "+UserName)
        alert("User Age is: "+UserAge)
        alert("User Designation is: "+UserDesignation)
        alert("User Salary is: "+UserSalary)
        alert("User User Bonus is: "+UserBonus)
    }

    return (
        <div>
            <b style={{width: "300px", display:"inline-block"}}>Please Enter Name</b><input type="text" value={UserName} onChange={(event) => setUserName(event.target.value)}/><br/><br/>
            <b style={{width: "300px", display:"inline-block"}}>Please Enter Age</b><input type="text" value={UserAge} onChange={(event) => setUserAge(event.target.value)} /><br/><br/>
            <b style={{width: "300px", display:"inline-block"}}>Please Enter Designation</b><input type="text" value={UserDesignation} onChange={(event) => setUserDesignation(event.target.value)} /><br/><br/>
            <b style={{width: "300px", display:"inline-block"}}>Please Enter Salary</b><input type="text" value={UserSalary} onChange={(event) => setUserSalary(event.target.value)}/><br/><br/>
            <b style={{width: "300px", display:"inline-block"}}>Please Enter Bonus</b><input type="text" value={UserBonus} onChange={(event) => setUserBonus(event.target.value)} /><br /><br />
            
            <input type="button" onClick={submitDetails} value="Save to Database" />
        </div>
    )

}