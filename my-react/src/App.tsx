import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Add from './Pages/Add';
import Login from './Pages/Login';
let somevar="jayanth"
// const[data,setData]=useState<any>()

function App() {
  return (
  <>
 
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path='' element={<Home name={somevar}/>}></Route>
  <Route path='add' element={<Add/>}></Route>
  <Route path='edit' element={<Add/>}></Route>
  <Route path='login' element={<Login/>}></Route>
  </Routes>
  </BrowserRouter>

      
</>

  );
}

export default App;
