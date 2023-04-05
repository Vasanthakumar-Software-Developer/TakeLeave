import React, { useEffect } from "react";
import { useNavigate,useSearchParams,createSearchParams } from "react-router-dom";
import './About.js';
import './Home.css';
import Foot from './foot.js'
import Reg from './Reg.js'
import {useState} from 'react';
import database from './firebase';
export default function About(){
  const [useSearch]=useSearchParams();

  const [Name , setName] = useState();
  const [Dep , setDep] = useState();
  const [Email, setEmail]=useState();
  // Push Function
//   const Push = () => {
//     database.ref("Leave").set({
//       name : name,
//       age : age,
//     }).catch(alert);
//   }
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
        if(useSearch.get("email")===null ){
            nav("/")
    }
      database.ref().child("Login").child(useSearch.get("email").toString().replaceAll("@","").replaceAll(".","")).child("Name").get().then((snapshot)=>{
        setName(snapshot.val());
       
    })
    database.ref().child("Login").child(useSearch.get("email").toString().replaceAll("@","").replaceAll(".","")).child("Department").get().then((snapshot)=>{
        setDep(snapshot.val());
    })
    database.ref().child("Login").child(useSearch.get("email").toString().replaceAll("@","").replaceAll(".","")).child("Email").get().then((snapshot)=>{
        setEmail(snapshot.val());
    
    })
    // database.ref().child("Login").child(useSearch.get("email").toString().replaceAll("@","").replaceAll(".","")).child("Password").get().then((snapshot)=>{
    //     Pass=snapshot.val();
    
    // })
      
  })
 
 
    return(
        <div class="pro">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      
        <div class="Nav" id="bar">
        <button class="icon" onClick={()=>Navbar()}><i class="fa fa-bars"></i></button>
        <button onClick={handleClick1}>Home</button>
        <button onClick={handleClick2}>Apply</button>
        <button onClick={handleClick3}>Admin</button>
        <button onClick={handleClick4}>Profile</button>
        <button >Take Leave</button>
        </div>
       
        <center><h1 >Profile</h1>
        <table>
        <tr>
        <td><h2>NAME</h2></td>
        <td><h2>: {Name}</h2></td>
        </tr>
        <tr>
        <td><h2>DEPARTMENT</h2></td>
        <td> <h2>: {Dep}</h2></td>
        </tr>
        <tr>
        <td><h2>EMAIL ID</h2></td>
        <td><h2>: {Email}</h2></td>
        </tr>
         
        
         
         </table>
        </center>
        
        
        {/* <div className="App" style={{marginTop : 250}}>
      <center>
      <input placeholder="Enter your name" value={name} 
      onChange={(e) => setName(e.target.value)}/>
      <br/><br/>
      <input placeholder="Enter your age" value={age} 
      onChange={(e) => setAge(e.target.value)}/>
      <br/><br/> 
      <button onClick={Push}>PUSH</button>
      </center> */}
    {/* </div> */}
    
   
   
        </div>
    )
}
