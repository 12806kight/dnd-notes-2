import React from "react";
import { Link } from 'react-router-dom';

function Header(){
    return( 
        
        <header>
            <h1><Link to={"/"}>OG's Notes</Link></h1>
            <h1><Link to={"/equip"}>Equipment</Link></h1>
            <h1><Link to={"/Stats"}>Stats</Link></h1>
        </header>
    );
}

export default Header;