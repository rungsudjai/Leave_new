import logo from './logo.svg';
import React, { useContext , createContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddButton from './component/addLeave.js'
import AddingLeave from './component/AddLeave_page.js';
import Home from './component/Home.js'
import Login from './component/Login.js'
import Layout from './component/layout.js';
import { useState } from 'react';
import { Link } from 'react-router-dom'
function App() {
  
  return (

      <Layout/>

  );
}

export default App;
