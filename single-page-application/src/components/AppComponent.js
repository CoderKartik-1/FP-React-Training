import { BrowserRouter, Route, Link, Switch, Prompt } from "react-router-dom"
import { useState, useEffect } from "react";
import Axios from "axios";
import EmployeeComponent from "./EmployeeComponent";

export default function AppComponent() {
    return (
        <BrowserRouter>
            <>
                <h1>Welcome to React Session...</h1>
                <nav>
                    <Link style={{paddingRight: "10px"}} to="/">Home</Link>
                    <Link style={{paddingRight: "10px"}} to="/about">About</Link>
                </nav>
                
                <div>
                    <div style={{height: "500px", border: "1px solid grey", padding: "20px"}}>
                        <Switch>
                            <Route exact path="/" component={HomeComponent}></Route>
                            <Route exact path="/employee/:employeeId" component={EmployeeComponent}></Route>
                        </Switch>
                    </div>              
                </div>
            </>
        </BrowserRouter>
    )
}

function HomeComponent(props) {

    const [employees, setEmployees] = useState([]);
    
    useEffect(() => {
        Axios.get("http://localhost:3000/employees").then((reponse) => {
            setEmployees(reponse.data);
        })
    }, [])

    function getEmployeeDetails(empId) {
        props.history.push("/employee/" + empId)
    }

    return (
        <>
            {employees.map((employee) => {
                return (
                    <div className="card" style={{ width: "18rem", display: "inline-block" }}>
                        <div className="card-body">
                            <h5 className="card-title">{employee.name}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Employee Id: {employee.id}</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <input type="button" className="card-link" value="Get Details" onClick={() => getEmployeeDetails(employee.id)} />
                        </div>
                    </div>
                )
            })}
        </>
    )

}

// function EmployeeComponent(props) {
//     return (
//         <>
//             {props.userName && <h1>User Name is {props.userName}</h1>}
//             <h1>This is Home Page</h1>
//         </>
//     )
// }