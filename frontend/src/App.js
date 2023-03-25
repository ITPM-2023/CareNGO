import './App.css';
import NavigationButtons from './pages/navButton/navButton';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "./context/Context";
import Regsiter from './pages/login/Regsiter';


function App() {
  //after login
  const { user } = useContext(Context)
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavigationButtons />
        </div>
          <Regsiter/>

      </div>
    </BrowserRouter>


  );
}

export default App;
