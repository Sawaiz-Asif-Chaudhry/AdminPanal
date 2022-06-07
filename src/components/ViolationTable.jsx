import React from 'react'
import { NavLink } from 'react-router-dom'
import './Admin.css'
import { useNavigate } from "react-router-dom";

import axios from 'axios';

export default function ViolationTable(props) {
    const navigate = useNavigate()
  const gotoViolence = (e) =>{
    e.preventDefault()    
    navigate("/seecurrent");

  }
  const seeViolation = (id)=>{
    axios.request({
        method: 'PUT',
        url: `http://localhost:3050/video/isreadfalse`,
       
        data: {
          id: id
        },
    }).then(res=>{
        window.location.reload()
        console.log("Api hit")
    }).catch(err=>{
        console.log("Error is : ",err);
    })

  }
  
    return (
      
<div class="container table-responsive py-5"> 
<h3>Current Violations</h3>
<table class="table table-bordered table-hover">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">cnic</th>
      <th scope="col">VedioPath</th>
      <th scope="col">phone</th>
      <th scope="col">Archieved</th>

      
      
    </tr>
  </thead>
  <tbody>
    {
        props.data.map((dt,index)=>(
             <tr 
            >
              <th scope="row" 
             onClick={(e)=>{
                props.setDataindex(index)
                gotoViolence(e)


             }} >{index+1}</th>
              <td  
             onClick={(e)=>{
                props.setDataindex(index)
                gotoViolence(e)


             }}>{dt.user.name}</td>
              <td 
             onClick={(e)=>{
                props.setDataindex(index)
                gotoViolence(e)


             }}> {dt.user.cnic}</td>
              <td  
             onClick={(e)=>{
                props.setDataindex(index)
                gotoViolence(e)


             }}>{dt.videoPath}</td>
              <td  
             onClick={(e)=>{
                props.setDataindex(index)
                gotoViolence(e)


             }}>{dt.user.phone}</td>
              <td><button className='button2' onClick={()=>{seeViolation(dt._id)}} >See</button></td>
              
            </tr>
        ))
    }

  </tbody>
</table>
</div>

  )
}
