import React, {Component} from "react";

class employeeAdd extends Component{
    initialState = {
        id: '',
        name: '',
        job: '',
        number: '',
        date: '',
        department: '',
        active: '',
        gender: '',
        note: ''
    }

    state = this.initialState;

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const {hire} = this.props;  
        hire(this.state);
        this.setState(this.initialState);
    };

    render() {
        const {id, name, job, number, date, department, active, gender, note} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="id">Id</label>
                <input 
                    type="text" 
                    name="id" 
                    id="id" 
                    value={id}
                    placeholder="Enter id here" 
                    onChange={this.handleChange} 
                />
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={name}
                    placeholder="Enter name here" 
                    onChange={this.handleChange} 
                />
                <label htmlFor="job">Job</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job" 
                    value={job} 
                    placeholder="Enter job here" 
                    onChange={this.handleChange} 
                />
                <label htmlFor="number">Number Employee</label>
                <input 
                    type="number" 
                    name="number" 
                    id="number" 
                    value={number} 
                    placeholder="Enter number here" 
                    onChange={this.handleChange} 
                />
                <label htmlFor="date">Birth Date</label>
                <input 
                    type="date" 
                    name="date" 
                    id="date" 
                    value={date} 
                    placeholder="Enter date here" 
                    onChange={this.handleChange} 
                />
                <label htmlFor="department">Department</label>
                <select 
                    name="department" 
                    id="department" 
                    placeholder="Enter department here" 
                    onChange={this.handleChange} 
                >
                    <option value="department1">Department 1</option>
                    <option value="department2">Department 2</option>
                    <option value="department3">Department 3</option>
                    <option value="department4">Department 4</option>
                </select>
                <label htmlFor="active">Active</label>
                <input 
                    type="checkbox" 
                    name="active" 
                    id="active" 
                    value={active} 
                    placeholder="Enter active here" 
                    onChange={this.handleChange} 
                />
                <label htmlFor="gender">Gender</label>
                <input 
                    type="radio" 
                    name="gender" 
                    id="male" 
                    value={gender} 
                    onChange={this.handleChange} 
                /> Male<br></br>
                <input type="radio"
                    name="gender" 
                    id="female" 
                    value={gender} 
                    onChange={this.handleChange} 
                /> Female
                <label htmlFor="note">Note</label>
                <textarea  
                    name="note" 
                    id="note" 
                    value={note} 
                    placeholder="Enter note here" 
                    onChange={this.handleChange} 
                />
                <input type="submit" value="Hire" />
            </form>
        );
    }
}

export default employeeAdd;