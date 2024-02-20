import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
function Home() 
{
    const [users,setUsers] = useState([]);

    const {id} = useParams()

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result = await axios.get("http://localhost:8080/");
        setUsers(result.data);
    }
    
    const deleteemployee=async(id)=>{
        const confirmdelete = window.confirm("Are you sure you want to delete this employee ?")
        if(confirmdelete)
        {
            await axios.delete(`http://localhost:8080/deleteemployee/${id}`)
            loadUsers()
        }
    }

    return(
    <div className='container'>
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Team</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.team}</td>
                        <td>{user.mobile_number}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link type="button" to={`/updateemployee/${user.employee_id}`}className="btn btn-secondary mx-2">Edit Details</Link>
                            <button type="button" to={`/deleteemployee/${user.employee_id}`}className="btn btn-danger mx-2" 
                            onClick={() => deleteemployee(user.employee_id)}
                            >Delete Employee</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <Link type="button" class="btn btn-info" to="/addemployee">Add Employee</Link>
    </div>
    )
}

export default Home;
