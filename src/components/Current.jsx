import React from "react";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
export default function Current(props) { 
  const hist=useNavigate();
 
  const GoBack= ()=>{
    hist(-1)

  }

  return (
    <div className="container-fluid ">
      <button onClick={()=>GoBack()} className = "button">
        Go Back
      </button>
      <nav className="tablenav container-fluid">
        <h5>Digital Traffic Warden</h5>
      </nav>

      <div className="container">
        <div className="row">
          <div  
            className="col-md-6"
            style={{ borderRight: "1px solid #37474f" }}
          >
            <h5>Information : </h5>
            <p>
              {" "}
              <span>User Name :</span> {props.data.user.name}
            </p>
            <p>
              <span>Email :</span> {props.data.user.email}
            </p>
            <p>
              <span>CNIC :</span> {props.data.user.cnic}
            </p>
            <p>
              <span>PhoneNumber :</span> {props.data.user.phone}
            </p>
            <p>
              {/* <span>Violation :</span> {props.data.imagesPath} */}
            </p>
          </div>
          <div className="col-md-6">
            <video width="320" height="240" controls>
              <source src={require('../Videos/'+props.data.videoPath)} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{marginTop:"10px"}}>
        <h5>Number Plates</h5>
        <div className="row">
        
            {
                props.data.numberPlatesImg.map((image)=>(
                    <div className="col-md-4 imagecontainer mx-auto">
                        {"No . "}
                        <img src={require('../NumberPlatesImages/'+image)} alt="" width={300} height ={200}/>
                    </div>

                ))
            }
            </div>
        
      </div>
      <div className="container text-center" style={{marginTop:"100px"}}>
            <h5>Violations</h5>
        <div className="row">
        
            {
                props.data.offendersImg.map((image)=>(
                    <div className="col-md-4 imagecontainer mx-auto">
                        {"Object No . "}
                        <img src={require('../ObjectImages/'+image)} alt="" width={300} height ={200}/>
                    </div>

                ))
            }
            </div>
        
      </div>
    </div>
  );
}
