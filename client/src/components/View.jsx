import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";



function View() {
    const location = useLocation()
    const locationId = location.pathname.split("/")[2];
    
    const [notes, setNotes] = useState([]);
  useEffect(()=>{
    ;

    const fetchNotes = async()=>{
        try{
            const res = await axios.get("http://localhost:8800/"+locationId);
            setNotes(res.data)
            console.log(res.data);
        }catch(err){
            console.log(err);
        }
    }
    fetchNotes();
}, [])


     return (
      <div>
      <Header/>
      {notes.map((i) =>{
      console.log(i.id)
      return (
        <div>
      <h2>{i.title}</h2>
      <p>{i.content}</p>
      </div>
        )
    })}
      <Footer/>
      </div>
    );
  }
  
 

export default View