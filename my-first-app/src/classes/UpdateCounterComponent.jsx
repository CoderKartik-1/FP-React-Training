import React from 'react';

export default class UpdateCounterComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 1,
        }
    }
    
    updateCounterOne = () => {
        
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            setTimeout(() => {
                this.setState({
                    counter: this.state.counter + 2
                }, () => {
                    this.setState({
                        counter: this.state.counter + 3
                    }, () => {
                        this.setState({
                            counter: this.state.counter + 4
                        })
                    })
                })
            }, 3000)
            
        });
    }

    updateCounter = () => {
        // this.state.counter = this.state.counter + 1;
        // console.log(this.state.counter);    
        // this.forceUpdate();

        //set states are asynchronous
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            this.setState({
                counter: this.state.counter + 2
            }, () => {
                this.setState({
                    counter: this.state.counter + 3
                }, () => {
                    this.setState({
                        counter: this.state.counter + 4
                    })
                })
            })
        });
    }

    render() {
        return (
            <div>
                <h1>The Counter Value is: {this.state.counter}</h1>
                <input type="button" value="Update Counter" onClick={this.updateCounterOne}/>
            </div>
        )
    }

}