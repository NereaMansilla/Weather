import { Route, Routes} from 'react-router-dom'
import './App.css';
import {LandingPage} from './Components/LandingPage/LandingPage'
import {Home} from './Components/Home/Home.jsx'




function App() {
  return (
    
  
  <Routes>
   <Route path='/' element={<LandingPage/>} />
   <Route exact path='/weather' element={<Home />}/>
   <Route path='*' element={<div>Not found xD</div>}/>
  </Routes>

  
  );
}

export default App;
