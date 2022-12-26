import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar ">
                    <div className="nav-item">
                        <Link className="nav-link" to="/counter">Counter</Link>
                    </div>
                    <div className="nav-item">
                        <Link className="nav-link" to="/form">Form</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar