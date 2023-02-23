import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { authContext } from '../Context/Authprovider';
import useAdmin from '../Hook/UseAdmin';
import Header from '../pages/Shared/Header/Header';

const DashBordLayout = () => {

const {user} = useContext(authContext)
const [isAdmin] = useAdmin(user?.email)

    return (
        <div className='max-w-[1440px] mx-auto'>
            <Header></Header>

 <div className="drawer drawer-mobile">
  <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
   <div className="drawer-content">

   <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      
      <li><Link to="/dashbord">Appoinment</Link></li>
{
  isAdmin && <>
        <li><Link to="/dashbord/alluser">All User</Link></li>
        <li><Link to='/dashbord/adddoctors'>Add a Doctor</Link></li>
        <li><Link to='/dashbord/manezdoctor'>Manez Doctors</Link></li>

  </>
}    
     

</ul>
  
  </div>
</div>
        </div>
    );
};

export default DashBordLayout;