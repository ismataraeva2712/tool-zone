import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/HomePage/Home';

import "animate.css/animate.min.css";
import Login from './Loginpage/Login';
import Signup from './Loginpage/Signup';
import Purchase from './Pages/HomePage/Purchase';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Loginpage/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddReview from './Pages/Dashboard/AddReview';
import MyOrder from './Pages/Dashboard/MyOrder';
//   import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// AOS.init();
function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/tools/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
      <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>

      <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>

      </Route>
      <Route path='/login' element={<Login></Login>}></Route>
    
      <Route path='/signUp' element={<Signup></Signup>}></Route>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
