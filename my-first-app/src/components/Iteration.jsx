export default function IterationComponent() {
    var employeeDetails = [{
        name: "Mayank",
        age: 30,
        designation: "Trainer"
    }, {
        name: "Anshul",
        age: 37,
        designation: "Trainer"
    }, {
        name: "Aniket",
        age: 31,
        designation: "Trainer"
    }, {
        name: "Meha",
        age: 35,
        designation: "Trainer"
    }, {
        name: "Aniket",
        age: 40,
        designation: "Trainer"
    }];

    
    function employeeNameJsx() {
        // var employeeJSX = [];
        // for (let i = 0; i < employeeNames.length; i++) {
        //     employeeJSX.push(<h3>Employee Name is: {employeeNames[i]} </h3>)
        // }

        // return employeeDetails.map((employee) => (
        //     <div>
        //         <h3>Employee Name is: {employee.name} | Employee age is: {employee.age} | Employee designation is {employee.designation}</h3> 
        //     </div>
        // ))

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeDetails.map(employee =>(
                        <tr key={employee.name}>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.designation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
    
    return (
        <div>
            <h1>Total Number of Employees: {employeeDetails.length}</h1>
            <h2>Following is the List of Employees in the company: </h2><hr/>
            {employeeNameJsx()}
        </div>
    )
}