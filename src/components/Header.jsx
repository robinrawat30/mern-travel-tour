import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthCard from '../pages/cardspage/AuthCard'

const Header = () => {

  const [btnstyle,setBtnStyle]=useState("hidden");

  const handleOnClick =()=>{
    if(btnstyle==="hidden"){
      setBtnStyle("block");
    }
    else{
      setBtnStyle("hidden");
    }
  }


  const navItem = (

    <>
      <li><Link to='/' className=" font-semibold">Home</Link></li>
      <li><Link to='/packages' className="  font-semibold">Packages</Link></li>
      <li><Link to='/about' className="font-semibold">About</Link></li>
      <li><Link to='/dashboard' className="font-semibold">Dashboard</Link></li>



    </>
  )


  return (
    <>
      <div className=" max-w-screen-2xl rounded-lg shadow-xl m-auto py-20  md:py-5 px-4 md:px-20">
        <div className="navbar  lg:fixed lg:z-50 lg:left-0 lg:top-0  py-3  right-0 bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {navItem}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl ">safar</a>
          </div>
          <div className="navbar-end  space-x-96 md:space-x-16">
            <div className="navbar-center hidden lg:flex ">
              <ul className="menu menu-horizontal space-x-16">
                {navItem}
              </ul>
            </div>
            <div className="flex flex-col gap-1 justify-start items-end">

              <div>
                <Link className="btn btn-wide font-sans bg-orange-500 uppercase text-sm text-white" onClick={handleOnClick}  >Login / Signup </Link>
               <AuthCard   btnstyle={btnstyle}/>

              </div>
            
               
             



            </div>



          </div>
        </div>
      </div>


    </>
  )
}

export default Header
