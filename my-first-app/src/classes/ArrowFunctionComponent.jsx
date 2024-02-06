import { Component } from "react";

export default class ArrowFunctionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "Kartik Gupta"
        }
        this.alertData = this.alertData.bind(this)
    }
    
    alertData(inputValue) {
        // debugger;
        // this.state.userName += inputValue;
        alert(this.state.userName + inputValue);
    }
    
    render() {
        return (
            <div>
                <input type="button" onClick={(event)=>this.alertData(" TeamLead")} value="Click for Alert" />
            </div>
        )
    }
}