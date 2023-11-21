import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import CreateNote from "./Create"

function App(){

  const [notes, setNotes] = useState([]);
  useEffect(()=>{
    const fetchNotes = async()=>{
        try{
            const res = await axios.get("http://localhost:8800");
            setNotes(res.data)
        }catch(err){
            console.log(err);
        }
    }
    fetchNotes();
}, [])

  function addNote(newNote){
    setNotes(previousNote =>{
      return [...previousNote, newNote];
    })
  }

  function deletedNote(id){
    setNotes(previousNote =>{
      return previousNote.filter((i, index)=>{
        return (index !== id);
      });
    });
  }

  return (
    <div>
    <Header/>
    <CreateNote onAdd={addNote}/>
    {notes.map((i, index) =>{
      return (
        <Note
        key={index}
        id={index}
        title={i.title}
        content={i.content}
        onDelete={deletedNote}
        />
      )
    })}
    <Footer/>
    </div>
  );
}

export default App;
