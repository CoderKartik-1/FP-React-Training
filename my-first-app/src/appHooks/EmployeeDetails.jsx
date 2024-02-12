import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AddPersonLayout from "./AddEmployee";
import FilterEmployeeList from "./FilterEmployeeList";
import EmployeeInfo from "./EmployeeInfo";


export default function EmployeeDetails() {
    var [employeeList, setEmployeeList] = useState([]); 
    var [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        updateEmployeeOnScreen()
    }, [])

    function updateEmployeeOnScreen() {
        axios.get("http://localhost:3000/employees").then((response) => {
            setEmployeeList(response.data)
            setFilteredList(response.data)
        })
    }
    
    //delete
    function removePerson(idx){
        // var newEmps = employeeList.filter(employee => employee.id != idx);
        // setEmployeeList(newEmps);
        //Employee list has entire list of employees
        axios.delete("http://localhost:3000/employees/" + idx)
        .then(() => {
            alert("Emp deleted with id: "+idx)
            updateEmployeeOnScreen();
        })
    }

    function filterEmployee(filterText){
        var filteredList = [];
        if (filterText == "") {
            filteredList = employeeList;
        }
        else{
            filteredList = employeeList.filter((employee) => {
                return employee.name.indexOf(filterText) > -1;
            })
        }
        setFilteredList(filteredList);
    }

    return (
        <>
            <h1> The list of employees ({employeeList.length}) is given below: </h1>
            <AddPersonLayout updateEmployeeOnScreen = {updateEmployeeOnScreen}></AddPersonLayout>
            <FilterEmployeeList filterEmployee = {filterEmployee}></FilterEmployeeList>
            {filteredList.map((employee) => {
                return(
                    <EmployeeInfo {...employee} removePerson = {removePerson}></EmployeeInfo>
                )
            })}
        </>
    )
}
