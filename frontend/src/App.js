import './App.css';
import NavigationButtons from './pages/navButton/navButton';
import { BrowserRouter } from 'react-router-dom';
import React, { useContext } from "react"
import { Context } from "./context/Context"


function App() {
  //after login
  const { user } = useContext(Context)
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavigationButtons />
        </div>
      </div>
    </BrowserRouter>


  );
}

export default App;
