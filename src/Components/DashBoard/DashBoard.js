import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import { auth } from '../../firebase.init';
//import useAdmin from '../../Hooks/useAdmin';

const DashBoard = () => {
  const [user] = useAuthState(auth)
//   const [admin]= useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <h2 className='mt-5 text-3xl font-mono text-red-900'>
            
            Hey,<span className='text-blue-900 sp-style '>{user.displayName}.</span>
            Welcome To Your DashBoard</h2>
          <div className="align-right">
          <div  className="navbar-end">
        <label for="my-drawer-2" className=" text-sm btn btn-primary drawer-button lg:hidden">  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
      </div>
          </div>
      
                <Outlet></Outlet>
               

        </div> 
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label> 
          
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
           
            <li className='text-primary sp-style font-bold text-xl'><Link to='/dashboard'>My Order </Link></li>
             
            <li className='text-primary sp-style font-bold text-xl'><Link to='/dashboard/review'>Add Review </Link></li>
            <li className='text-primary sp-style font-bold text-xl'><Link to='/dashboard/profile'>My Profile </Link></li>
            
            {/* {admin &&
              <>
                <li><Link to='/dashboard/user'>All User</Link></li>
                <li><Link to='/dashboard/addDoctor'>ADD New Doctor</Link></li>
                <li><Link to='/dashboard/manageDoctor'>ManageDoctor</Link></li>
              
            </>
              
            } */}
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;