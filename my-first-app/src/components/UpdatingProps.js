//props should never be updated like this, only for learning

export default function UpdatingProps(props) {
    // props.userName = "Kartik Gupta" => // gives error because props is a read only property or we can call it a constant or immutable (only when props are not passed by reference like object or array) 
    
    props.employeeDetails.salary = 10000;
    props.employeeDetails.bonus = 10000;
    props.arr.push(10);

    return (
        
        <div>
            <h1>Lets try to update props....{props.employeeDetails.salary}  {props.employeeDetails.bonus} {props.arr.length} </h1>
        </div>
    )
}