import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools } from 'react-icons/fa';
import auth from './../../firebase.init';
import { useAuthState} from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };
  const menuItem=<>
        <li className='mx-2' ><Link to='/'>Home</Link></li>
       
        <li className='mx-2'><Link to='/blog'>Blogs</Link></li>
        {
            user && <li className='mx-2'><Link to='/dashboard'>Dashboard</Link></li>
        }
       
        {/* <li className='mx-2'><Link to='/myprofile'>My Profile</Link></li> */}
       
        <li className='mx-2'>{user? <p onClick={ logout}>Sign Out</p>:<Link to='/login'>Login</Link>}</li>
        </>
    return (
        <div class="navbar bg-primary ">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {menuItem}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl"><FaTools className='text-3xl text-black mr-3'></FaTools>TOOL-ZONE</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0 font-semibold">
            {menuItem}
          </ul>
        </div>
        <div className="navbar-end">
                    <label tabindex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                </div>
       
      </div>
    );
};

export default Navbar;