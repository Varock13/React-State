import React, {Component} from "react";
import Employee from "./Employee";

class EmployeeList extends Component{
    state = {
        employees : [
            {
                id: 1,
                name: 'John',
                job: 'CEO'
            },
            {
                id: 2,
                name: 'Jane',
                job: 'Manger'
            },
            {
                id: 3,
                name: 'Michelle',
                job: 'Programmer'
            },
            {
                id: 4,
                name: 'Tim',
                job: 'Disigner'
            }
        ]
    }

    fireEmployee = (id)=> {
        const { employees } = this.state;
        this.setState({
            employees : employees.filter((employee) => {
                return employee.id !== id;
            })
        });
    };

    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee=> (
                            <Employee id={employee.id} name={employee.name} job={employee.job} fire={this.fireEmployee} />
                    ))}
                </tbody>
            </table>
        );
    }
}

export default EmployeeList;