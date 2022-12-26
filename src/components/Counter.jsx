import React, { Component } from 'react'
import Count from './Count';


class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleIncrement = () => {
        this.setState((prevState) => ({
        count: prevState.count + 1,
        }))
    };

    handleDecrement = () => {
        this.setState((prevState) => ({
        count: prevState.count - 1,
        }))
    };

    render() {
        return (
        <>
            <Count count={this.state.count} handleDecrement={this.handleDecrement} handleIncrement={this.handleIncrement}/>
        </>

        )
    }
}

export default Counter