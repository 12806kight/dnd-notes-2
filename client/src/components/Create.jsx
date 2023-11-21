import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function CreateNote(props){
    const [note, setNote] = useState({
        title : "",
        content: ""
    })

    const navigate = useNavigate();

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
            content: ""
        })
        event.preventDefault();
        try{
            console.log(note.id)
            await axios.post("http://localhost:8800", note)
            navigate("/");
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