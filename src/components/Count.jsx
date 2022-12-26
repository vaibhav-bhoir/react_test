import React, { Component } from 'react'

class Count extends Component {

    render() {
        return (
            <div className='counter'>
                <h1>{this.props.count}</h1>
                <button className='btn' onClick={this.props.handleDecrement}> Decrement - </button>
                <button className='btn' onClick={this.props.handleIncrement}> Increment + </button>
            </div>
        );
    }
}

export default Count