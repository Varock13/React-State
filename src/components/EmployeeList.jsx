import React, {Component} from "react";
import Employee from "./Employee";

class EmployeeList extends Component{
    render(){
        const employees = [
            {
                name: 'John',
                job: 'CEO'
            },
            {
                name: 'Jane',
                job: 'Manger'
            },
            {
                name: 'Michelle',
                job: 'Programmer'
            },
            {
                name: 'Tim',
                job: 'Disigner'
            }
        ]

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
                            <Employee name={employee.name} job={employee.job} />
                    ))}
                </tbody>
            </table>
        );
    }
}

export default EmployeeList;