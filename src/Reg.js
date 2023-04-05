import { getAllByLabelText } from "@testing-library/react";
import React, { useState } from "react";
import './Home.css'
import Home  from "./Home";
import database from "./firebase";
import { createSearchParams, useNavigate,useSearchParams } from "react-router-dom";


const Reg=()=>{ 
    const [useSearch]=useSearchParams();
    const[name,setName]=useState();
    const [Dep,setDep]=useState();
    const [Email,setEmail]=useState();
    const [Pass,setPass]=useState();
    
    var nav=useNavigate();
    function displayl(){
       document.getElementById("loginh").style.display='none'
       document.getElementById("regr").style.display='block'
       
       
    }
    

    
    function displayr(){
        document.getElementById("regr").style.display='none'
        document.getElementById("loginh").style.display='block'
        
        
     }
     
    const handleClick1=(email)=>{
        var id=Email
        id=id.toString().replaceAll("@","").replaceAll(".","").replaceAll("#","");
        database.ref().child("Login").child(id).set(
            {
            Name:name,
            Department:Dep,
            Email:Email,
            Password:Pass
            
            }
            
        )
        alert("Thank you \nYou are Successfully Register \nNow goto Login page")
        var emaili=document.getElementById("name").value
        
        nav({
            pathname:"/",
           
        })
       
      
    }
    // database.ref().child("Login").child(useSearch.get("email").toString().replaceAll("@","").replaceAll(".","")).child("Name").get().then((snapshot)=>{
    //     Name=snapshot.val();
       
    // })
    // database.ref().child("Login").child(useSearch.get("email").toString().replaceAll("@","").replaceAll(".","")).child("Department").get().then((snapshot)=>{
    //     Dep=snapshot.val();
    // })
    // database.ref().child("Login").child(useSearch.get("email").toString().replaceAll("@","").replaceAll(".","")).child("Email").get().then((snapshot)=>{
    //     Email=snapshot.val();
    
    // })
    // database.ref().child("Login").child(useSearch.get("email").toString().replaceAll("@","").replaceAll(".","")).child("Password").get().then((snapshot)=>{
    //     Pass=snapshot.val();
    
    // })
    function handleClick2(){
        var id=document.getElementById("email").value
     
        var pass=document.getElementById("password").value
        id=id.replaceAll("@","").replaceAll(".","")
        var i=0;
        database.ref().child("Login").get().then((querySnapshot) => {
    
           var i=0;
            querySnapshot.forEach(element => {

                if(id==element.key.toString()){
                    var a=element.val()
                    i=1;
                 if(a.Password==pass){
                    nav({
                        pathname:"/Home",
                        search:createSearchParams({
                            name:a.Name,
                            dep:a.Department,
                            email:a.Email

                        }).toString()
            
                    })

                }
                else{
                    alert("Wrong Password")
                }
                }
               
                
                
               
            });
            if(i==0)
                alert("wrong Email id")
        })
       
    
        
    
      
    }
    return(

    < div class="body">
        
    <div className="fronth" id="fronth">
<center>
    <div class="front" id="fron">
        <button onClick={displayr}>Login</button>
    <button onClick={displayl}>Register</button>
    <div class="loginH" id="loginh">
        <form>
            <input type="email" id="email" placeholder="Email"></input>
            <input type="password" id="password" placeholder="Password"></input>
            

        </form>
        <button onClick={handleClick2}>Login</button>
    </div>
    <div class="reg" id="regr">
        <form>
        <input type="text" id="name" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input>
        <input type="text" id="dep" placeholder="Enter Department" onChange={(e)=>setDep(e.target.value)}></input>
        <input type="email" id="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}></input>
        <input type="password" id="password" placeholder="Enter Password" onChange={(e)=>setPass(e.target.value)}></input>
        <input type="password" id="cpassword" placeholder="Confirm Password" ></input>
            
        </form>
        <button onClick={handleClick1}>Register</button>
    </div>
    
    </div>
    </center>
    </div>
    
   
    </div>
    
    )
}
export default Reg;