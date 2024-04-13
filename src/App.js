import './App.css';
import Loginpage from './components/Loginpage';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Registerpage from './components/Registerpage';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Registerpage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
