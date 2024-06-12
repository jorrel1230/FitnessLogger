// Import Router
import {BrowserRouter, Routes, Route} from 'react-router-dom';


// Import Components
import Navbar from './components/navbar';
import Welcome from './components/welcome';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>

      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
