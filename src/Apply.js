import React, { useEffect } from "react";
import './Apply.js';
import './Home.css'
import Foot from './foot.js'
import { useState} from "react";
import database from "./firebase.js";
import { useNavigate,useSearchParams ,createSearchParams} from "react-router-dom";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase



function Apply(){
    const [useSearch]=useSearchParams();
    const[name,setName]=useState();
    const [EmpId,setId]=useState();
    const [Dep,setDep]=useState();
    const [Purpos,setPurpose]=useState();
    const [NoOf,setDays]=useState();
    
    const [FromDate,setFrom]=useState();
    const [ToDate,setTo]=useState();
    const [Inform,setInform]=useState();
    
    const push =()=>{
        const dat=new Date()
        
        database.ref().child("Leave").child("Employ").child(useSearch.get("email").toString().replaceAll("@","").replaceAll(".","")).child(dat.getTime()).set(
            {
                name:name,
                Empid:EmpId,
                Dep:Dep,
                Purpose:Purpos,
                FromDate:FromDate,
                NoOfDays:NoOf,
                ToDate:ToDate,
                Inform:Inform,
            }
        )
        database.ref().child("Leave").child(dat.getTime()).set(
            {
                name:name,
                Empid:EmpId,
                Dep:Dep,
                Purpose:Purpos,
                FromDate:FromDate,
                NoOfDays:NoOf,
                ToDate:ToDate,
                Inform:Inform,
            }
        )
        alert("succsfully Leave Applied")
    }
    function Navbar(){
        const nav=document.getElementById("bar");
        if(nav.className==="Nav"){
            nav.className+=" R";
        }
        else{
            nav.className="Nav";
        }
   }
    const nav=useNavigate();
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
        <div class="homf"> 
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
            <h1>Application For Leave</h1>
           <form class="form">
            <input id="name" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            <input id="EmpId" placeholder="Employee ID" onChange={(e)=>setId(e.target.value)}/>
            <input id="dept" placeholder="Department" onChange={(e)=>setDep(e.target.value)}/>
            <input id="purpose" placeholder="Purpose"onChange={(e)=>setPurpose(e.target.value)}/>
            <input id="noofdays" placeholder="No of Days" onChange={(e)=>setDays(e.target.value)}/>
            <input id="Inform" placeholder="Inform Through" onChange={(e)=>setInform(e.target.value)}/>
            <input id="fdate" placeholder="From Date" onChange={(e)=>setFrom(e.target.value)}/>
            <input id="tdate" placeholder="To Date" onChange={(e)=>setTo(e.target.value)}/>
            
           </form>
           <button class="sub" onClick={push}>Submit</button>
           </center>
           <Foot />
        </div>
    )
}
export default Apply;
