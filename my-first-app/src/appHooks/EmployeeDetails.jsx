import details from "./employees.json";
import { useState, useEffect, useContext } from "react";


export default function EmployeeDetails() {
    var [employeeList, setEmployeeList] = useState(details); 
    
    function removePerson(idx){
        var newEmps = employeeList.filter(employee => employee.id != idx);
        setEmployeeList(newEmps);
    }
    
    return (
        <>
            {employeeList.map((employee) => {
                return (
                    <div className="card" style={{ width: "18rem", display: "inline-block", margin: "10px", padding: "10px" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYWiJM9gMrv5z-T0IH7AIU0jk8NXRmTYhYGfpobi3ew&s" className="card-img-top" alt="Image" />
                        <div className="card-body">
                            <h5 className="card-title">{employee.name}</h5>
                            <p className="card-text">Employee Created On: {employee.createdAt}.</p>
                            <input className="btn btn-primary" type="button" value="Delete" onClick={() => removePerson(employee.id)} />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

