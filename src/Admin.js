import { Hidden } from "@material-ui/core";
import { RadioButtonChecked, Visibility } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useNavigate ,useSearchParams,createSearchParams} from "react-router-dom";
import './Admin.js';
import database from "./firebase.js";
import './Home.css'
import Foot from './foot.js'

function Admin(){
   

    var k=0;
    const [useSearch]=useSearchParams();
    const [info , setInfo] = useState([]);
    function Navbar(){
        const nav=document.getElementById("bar");
        if(nav.className==="Nav"){
            nav.className+=" R";
        }
        else{
            nav.className="Nav";
        }
   }
   
  
    
    const call=()=>{
        const login=document.getElementById("login");
        const frm=document.getElementById("n");

        if(login.className==="Login"){
            login.className+=" L";
           }
    
        var a=document.getElementById("username").value
        var b=document.getElementById("password").value
        if(a==="Vasanth" && b==="12345"){
        database.ref().child("Leave").get().then((querySnapshot) => {
    
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach(element => {
            var data = element.val();
            setInfo(arr => [...arr , data]);
           
        });
    })
}
else{
    alert("Wrong Username or password")
}
}

    
    
    
    // window.addEventListener('load', () => {
    //     call()
    //   });
 
 
   const nav=useNavigate();
   const Frame = ({name,Empid,Dep,purpo,noofdays,Informed,from,to,}) => {
  
    return (
        
       
            <div className="div1">
                 
<p>NAME : {name}</p>
  
                 
<p>Emp ID: {Empid}</p>
 
                 
<p>Department : {Dep}</p>
<p>Purpose : {purpo}</p>
<p>No Of Days : {noofdays}</p>
<p>Informed Through:{Informed}</p>
<p>From Date: {from}</p>
<p>To Date: {to}</p>
  
            </div>
            
        
    );
}
function handleClick1(){
    nav({
        pathname:"/Home",
        search:createSearchParams({
           
            email:useSearch.get("email")
        }).toString()

    })
   
   }
   function handleClick2(){
    nav({
        pathname:"/Apply",
        search:createSearchParams({
           
            email:useSearch.get("email")
        }).toString()

    })
   
   }
   function handleClick3(){
    nav({
        pathname:"/Admin",
        search:createSearchParams({
           
            email:useSearch.get("email")
        }).toString()

    })
   
   }
   function handleClick4(){
    nav({
        pathname:"/Profile",
        search:createSearchParams({
           
            email:useSearch.get("email")
        }).toString()

    })
   
   }
   useEffect(()=>{
    if(useSearch.get("email")===null){
        nav("/")
}
})
    return(
        <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<div class="Nav" id="bar">
<button class="icon" onClick={()=>Navbar()}><i class="fa fa-bars"></i></button>
        <button onClick={handleClick1}>Home</button>
        <button onClick={handleClick2}>Apply</button>
        <button onClick={handleClick3}>Admin</button>
        <button onClick={handleClick4}>Profile</button>
<button >Take Leave</button>
</div>

<center>


<div class="Login" id="login">

    <center>
    <h1>Admin Login</h1>
<form>
    <input id="username" placeholder="User Name"/>
    <input id="password" placeholder="Password"/>
   
   
</form>

<button id="Login" onClick={call}>Login</button>
</center>
  </div>
  <div class="frm" id="frm1">
 
  <h2>Student Details</h2><hr></hr>
    <div class="div2">
            <center>
           
            </center>
         
        {
            info.map((data) => (
            <Frame name={data.name}
                   Empid={data.Empid}
                   Dep={data.Dep}
                   purpo={data.Purpose}
                   noofdays={data.NoOfDays}
                   Informed={data.Inform}
                   from={data.FromDate}
                   to= {data.ToDate}/>
            ))
        }
        </div>
  </div>
</center>
       <Foot />
        </>
    )
}
export default Admin;