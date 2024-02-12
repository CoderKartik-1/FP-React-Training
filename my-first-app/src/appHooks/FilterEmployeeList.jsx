export default function FilterEmployeeList(props) {
    return (
        <>
            Filter Employee List <input type="text" onChange={(event) => { props.filterEmployee(event.target.value)}} /><br/><br/>
        </>
    )
}