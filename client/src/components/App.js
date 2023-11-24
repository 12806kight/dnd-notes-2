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
    window.location.reload();
  }

  async function deletedNote(id){
    setNotes(previousNote =>{
      return previousNote.filter((i, index)=>{
        return (index !== id);
      });
    });
    try{
      console.log(id)
      await axios.delete("http://localhost:8800/"+id);
      window.location.reload();
    }catch(err){
      console.log(err);
  }
  }

  return (
    <div>
    <Header/>
    <CreateNote onAdd={addNote}/>
    {notes.map((i, index) =>{
      console.log(i.id)
      return (
        <Note
        key={index}
        id={i.id}
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
