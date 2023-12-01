import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function Equipment() {
    const[equip, setEquip] = useState([]);
    useEffect(()=>{
        const fetchNotes = async() =>{
            try{
                const res = await axios.get("http://localhost:8800/books")
                console.log(res.data)
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
      {equip.map((i) =>{
      console.log(i.id)
      return (
        <div>
        <h1>{i.Name}</h1>
        <p>{i.Description}</p>
        </div>
      )
    })}
      <Footer/>
      </div>
    );
  }
  
 

export default Equipment