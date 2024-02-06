import {Component} from "react";


export default class UpdateClockComponent extends Component{

    returnCurrentTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }

    

    constructor(props){
        super(props);
        this.state = {
            currentTime: this.returnCurrentTime(),
            counter:1,
            applicationUser: "Random"
        }
        //Anything to be done as part of updating and re-rendering should not be included in constructor
        // setInterval(()=>{
        //     this.setState({
        //         counter: this.state.counter + 1
        //     })
        // }, 1000)

        // setInterval(()=>{
        //     this.setState({
        //         currentTime:this.returnCurrentTime()
        //     })
        // }, 1000)
    }

    updateValue = (event) => {
        this.setState({
            applicationUser: event.target.value
        })
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.counter%40==0)
            return false; //if component is not to be updated on state change
        return true; //component gets updated if state changes
    }

    incrementCounter = () =>{
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render(){
        return (
            <div>
                Enter name: <input value={this.state.applicationUser} onChange={this.updateValue} type="text" /> <br /><br/>
                <b>Entered Name is: {this.state.applicationUser}</b>
                <h1> Current time for {this.props.userName} is {this.state.currentTime} | {this.state.counter} </h1>
                <input type="button" value="Click to update counter" onClick={this.incrementCounter}/>
            </div>
        )
    }   

    //All updation and re-rendering should be part of componentDidMount()
    componentDidMount(){

        setInterval(()=>{
            this.setState({
                currentTime:this.returnCurrentTime()
            })
        }, 1000)


    }
}


