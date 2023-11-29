import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function Equipment() {
    const[equip, setEquip] = useState([]);
    useEffect(()=>{
        const fetchNotes = async() =>{
            try{
                const res = await axios.get("http://localhost:8000/equipment")
                setEquip(res.data)
            }catch(err){
                console.log(err);
            }
        }
        fetchNotes();
    }, [])
  
    return (
      <div>
      <Header/>
      
      <Footer/>
      </div>
    );
  }
  
 

export default Equipment