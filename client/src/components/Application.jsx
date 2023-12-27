import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Equipment from './Equipment';
import Character from './Character';
import View from "./View";

function Application() {
  return (
    
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/view/:id" element={<View/>}/>
        <Route path="/equip" element={<Equipment/>}/>
        <Route path="/character" element={<Character/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default Application