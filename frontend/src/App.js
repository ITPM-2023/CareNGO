import './App.css';
import AddForm from './components/AddForm';
import SuccessfulPage from './components/SuccessfulPage';
import ViewDetails from './components/ViewDetails';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'


function App() {
  return (

    <div>
      Hi
      <Router>
          <Routes>
              <Route path='/' element={<AddForm/>}/>
          </Routes>

          <Routes>
              <Route path='/SuccessfulPage' element={<SuccessfulPage/>}/>
          </Routes>

          <Routes>
              <Route path='/ViewDetails' element={<ViewDetails/>}/>
          </Routes>
    </Router>

    

    </div>
    
    
  );
}

export default App;
