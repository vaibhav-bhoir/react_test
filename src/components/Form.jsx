import React from 'react'
import ControlledForm from './ControlledForm';
import UserList from './UserList';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            number: '',
            city: '',
            items: [],
            search : ""
        }

        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleFormSubmit.bind(this);
        this.onSearchchange = this.onchange.bind(this);
    };

    handleFormSubmit = (e) => {
        e.preventDefault();

        let items = [...this.state.items];

        items.push({
            name: this.state.name, 
            email: this.state.email,
            number: this.state.number,
            city: this.state.city,
        });

        this.setState({
            items,
            name: '',
            email: '',
            number: '',
            city: ''
        });

    };

    handleInputChange = (e) => {
        let input = e.target;
        let name = e.target.name;
        let value = input.value;
    
        this.setState({
            [name]: value
        })
    };

    onchange = e => {
        this.setState({ search: e.target.value });
    };


    render() {
        const { search } = this.state;
        const filterTable = this.state.items.filter(user => {
            return user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });

        return (
            <div className="App">
            <ControlledForm handleFormSubmit={ this.handleSubmit } handleInputChange={ this.handleChange } name={ this.state.name } email={ this.state.email } number={ this.state.number } city={ this.state.city }/>
            {/* <UserList items={ filterTable } onSearchChange={this.onSearchchange} /> */}
            {
                this.state.items.length > 0  && (
                    <UserList items={ filterTable } onSearchChange={this.onSearchchange} />
                ) 
            }
            </div>
        );
    }
}

export default Form