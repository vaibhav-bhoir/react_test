import React, { Component } from 'react'

export class UserList extends Component {

    render() {
        const items = this.props.items;

        return (
            <div >
                <input type="text" className='search_input' placeholder="Search..." onChange={this.props.onSearchChange} />
                <table className="table">
                    <tbody>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>Number</th>
                            <th>City</th>
                        </tr>
                        {items.map(item => {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td> 
                                <td>{item.number}</td> 
                                <td>{item.city}</td> 
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserList