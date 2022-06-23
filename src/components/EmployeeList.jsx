import React, {Component} from "react";
import Employee from "./Employee";
import EmployeeAdd from "./EmployeeAdd";

class EmployeeList extends Component{
    state = {
        employees : []
    }

    fireEmployee = (id)=> {
        const { employees } = this.state;
        this.setState({
            employees : employees.filter((employee) => {
                return employee.id !== id;
            })
        });
    };

    hireEmployee = employee => {
        this.setState({
            employees: [...this.state.employees, employee],
        }); 
    }

    render(){
        return(
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Number Employee</th>
                            <th>Birth Date</th>
                            <th>Department</th>
                            <th>Active</th>
                            <th>Gender</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee=> (
                                <Employee 
                                    key={employee.id}
                                    id={employee.id} 
                                    name={employee.name} 
                                    job={employee.job}
                                    number={employee.number} 
                                    date={employee.date}
                                    department={employee.department}
                                    active={employee.active ? "Yes" : "No"}
                                    gender={employee.gender}
                                    note={employee.note}
            
                                    fire={this.fireEmployee} 
                                />
                        ))}
                    </tbody>
                </table>
                <hr />
                <EmployeeAdd 
                    hire={this.hireEmployee}
                />
            </>
        );
    }
}

export default EmployeeList;