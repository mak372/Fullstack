import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
    let navigate = useNavigate()
    const {id} = useParams()
    const[user,setUsers] = useState({
        employee_id:"",
        name:"",
        team:"",
        mobile_number:"",
        email:""
    });
    const{employee_id,name,team,mobile_number,email} = user

    const onInput=(eveent)=>{
        setUsers({...user,[eveent.target.name]:eveent.target.value})
    };

    useEffect(()=>{
        // eslint-disable-next-line
        loadUsers();
    },[]);
    const onSubmit=async(eveent)=>{
        eveent.preventDefault();
        console.log(`Loading user data from: http://localhost:8080/updateemployee/${id}`);
        await axios.put(`http://localhost:8080/updateemployee/${id}`,user)
        navigate("/")
    }

    const loadUsers = async()=>{
        const result = await axios.get(`http://localhost:8080/updateemployee/${id}`)
        setUsers(result.data)
    }

  return (
    <div className='container'>
        <form onSubmit={(eveent)=>onSubmit(eveent)}> 
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Employee ID</span>
            </div>
            <input  name="employee_id" value={employee_id} onChange={(eveent)=>onInput(eveent)} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Employee Name</span>
            </div>
            <input name="name" value={name} onChange={(eveent)=>onInput(eveent)} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Employee Team</span>
            </div>
            <input name="team" value={team} onChange={(eveent)=>onInput(eveent)} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Mobile Number</span>
            </div>
            <input name="mobile_number" value={mobile_number} onChange={(eveent)=>onInput(eveent)} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
            </div>
            <input name="email" value={email} onChange={(eveent)=>onInput(eveent)} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default EditUser
