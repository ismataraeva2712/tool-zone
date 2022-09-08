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
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct';
  import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/Shared/NotFound';
import MyProfile from './Pages/Dashboard/MyProfile';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import Payment from './Pages/Dashboard/Payment';
AOS.init();
function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/tools/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
      <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>

      <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='manageOrder' element={<ManageOrder></ManageOrder>}></Route>

      </Route>
      <Route path='/login' element={<Login></Login>}></Route>
    
      <Route path='/signUp' element={<Signup></Signup>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
