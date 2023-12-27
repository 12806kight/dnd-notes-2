import React from "react";
import { Link } from 'react-router-dom';




function Note(props){
    function handleClick(){
        props.onDelete(props.id);
    }

    return( 
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>Delete</button>
            <button ><Link to ={`/view/${props.id}`}>+</Link></button>
        </div>

    );
}

export default Note;