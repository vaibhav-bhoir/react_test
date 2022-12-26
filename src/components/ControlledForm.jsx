import React from 'react'

class ControlledForm extends React.Component {
    render() {
        return (
            <div id="Form" className='form-container'>
                <h3>Add a new List to the table:</h3>  
                <form onSubmit={this.props.handleFormSubmit}>
                    <div className="form-control">
                        <label htmlFor="name">
                        Name:
                        </label>
                        <input id="name" value={this.props.name} type="text" name="name" onChange={this.props.handleInputChange} required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">
                            Email:
                            </label>
                        <input id="email" value={this.props.email} type="email" name="email" onChange={this.props.handleInputChange} required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="number">
                            Number:
                            </label>
                        <input id="number" value={this.props.number} type="number" name="number" onChange={this.props.handleInputChange} required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="city">
                            City:
                            </label>
                        <input id="city" value={this.props.city} type="text" name="city" onChange={this.props.handleInputChange}  required/>
                    </div>
                    <button type="submit" value="Submit" className='btn btn-submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default ControlledForm