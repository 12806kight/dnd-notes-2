import React from "react";
import { Link } from 'react-router-dom';

function Header(){
    return( 
        
        <header>
            <h1>OG's Notes</h1>
            <button><Link to={"/Equipment"}><h1>Equipment</h1></Link></button>
            <button><Link to={"/Stats"}><h1>Stats</h1></Link></button>
        </header>
    );
}

export default Header;