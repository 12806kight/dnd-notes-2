import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Equipment from './Equipment';
import Stats from './Stats';

function Application() {
  return (
    
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/books" element={<Equipment/>}/>
        <Route path="/stats" element={<Stats/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default Application