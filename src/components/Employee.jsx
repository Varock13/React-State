import React, {Component} from "react";

class Employee extends Component{
    render(){
        const {id, name, job, number, date, department, active, gender, note, fire} = this.props;
        return(
            <tr>
                <td>{name}</td>
                <td>{job}</td>
                <td>{number}</td>
                <td>{date}</td>
                <td>{department}</td>
                <td>{active}</td>
                <td>{gender}</td>
                <td>{note}</td>
                <td>
                    <button onClick={ () => fire(id)}>Fire</button>
                </td>
            </tr>
        );
    }
}

export default Employee;