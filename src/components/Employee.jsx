import React, {Component} from "react";

class Employee extends Component{
    render(){
        const {name, job} = this.props;
        return(
            <tr>
                <th>{name}</th>
                <th>{job}</th>
            </tr>
        );
    }
}

export default Employee;