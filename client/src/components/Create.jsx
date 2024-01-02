import React, {useState} from "react";
import axios from "axios";

function CreateNote(props){
    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${year}-${month}-${date}`;
      }
    const [note, setNote] = useState({
        title : "",
        content: "",
        date: getDate()
    })

    
    function handleChange(event){
        const {name , value} = event.target;
        setNote(previousNotes =>{
            return {
                ...previousNotes,
                [name] : value
            }
        })
            }

    async function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
            date : ""
        })
        event.preventDefault();
        try{
            console.log(note.id)
            await axios.post("http://localhost:8800", note)
            }catch(err){
            console.log(err)
           }

    }
    return(
    <div>
        <form>
            <input name="title" onChange={handleChange} value={note.title}></input>
            <textarea name="content" onChange={handleChange} value={note.content} rows="3"></textarea>
            <button onClick={submitNote}>Add</button>
        </form>
    </div>
    );
}

export default CreateNote;