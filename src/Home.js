import React, { useEffect } from "react";
import { useNavigate,useSearchParams,createSearchParams } from "react-router-dom";
import './Home.js';
import './Home.css';
import Foot from "./foot.js";
import Card from './card.js';

export default function Home(){
    const [useSearch]=useSearchParams();
    console.log("hi"+useSearch.get("email"))
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
            name:useSearch.get("name"),
            dep:useSearch.get("dep"),
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
      
        
        {/* <h1>{props.name}</h1> */}
        <Card />
       <Foot />
        </div>
        
    )
}
