function ChildComponent(props){
    return (
        <div>
            <h2> This is the child element | {props.designation}</h2>
        </div>
        
    )
}

export default function ParentComponent(props){
    // props.userDetails.designation = "Lead"
    return (
        <div>
            <h1> This is Parent Element {props.name}</h1>
            <div style={{marginLeft: "20px"}}>
                <ChildComponent {...props}></ChildComponent>
            </div>       
        </div>
    )
}