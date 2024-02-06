import "./WorkingWithStyles.css";

export default function WorkingWithStyles(){
    var styleObject = {
        color: "red",
        border: "1px solid grey",
        padding: "10px"
    }
    return (
        <div class = "stylesBlock">
            {/* <h1 style={styleObject}>This is the Header</h1> */}
            <h1 style={{color: "red", border: "1px solid grey", padding: "10px"}}>This is the Header</h1>
            <b>Lets understand the Concept of Styles</b><br/><br/>
            <div>This is the Main Block</div>
        </div>
    )
}