import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Context/Authprovider';

const Header = () => {

 const {user, userlogOut} = useContext(authContext)

 const handlesignOut = () =>{
     userlogOut()
 }


    const menuItem =<>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/appoinment">Appoinment</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/dashbord">Dashbord</Link></li>

   
   {
    user?.uid?
    <>
     <li><Link to="/review">Review</Link></li>
     <li><button className='btn text-white rounded-md'  onClick={handlesignOut}>Logout</button></li>
    </>
    :
    <>
       <li><Link to="/signUp">SignUp</Link></li>
       <li><Link to="/login">Login</Link></li>
    </>
   }
    </>
    

    return (
        <div>
          <div className="navbar bg-base-100 max-w-[1440px] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    
    <Link className="btn btn-ghost normal-case text-xl">DOCTORS-PORTAL</Link>
    
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItem}
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn">Get started</Link>
    <label tabIndex={0} htmlFor="dashbord-drawer" className="btn btn-primary lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

  </div>
</div>
        </div>
    );
};

export default Header;