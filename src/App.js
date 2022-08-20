import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Services from './Pages/Home/Services';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/SignUp';
import ServiceEnroll from './Pages/Home/ServiceEnroll';
import RequireAuth from './Pages/Login/RequireAuth';
import Contact from './Pages/Home/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ================================
import "animate.css/animate.min.css";
AOS.init();

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/services' element={<Services></Services>}></Route>
      <Route path='/enroll/:id' element={<RequireAuth>
        <ServiceEnroll></ServiceEnroll>
      </RequireAuth>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
     </Routes>
    </div>
  );
}

export default App;
