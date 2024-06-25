import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Homepage/Home'
import About from '../pages/Aboutpage/About'

import DashBoard from '../pages/Dashboardpage/DashBoard'
import SignUp from '../pages/AuthPages/SignUp'
import LogIn from '../pages/AuthPages/LogIn'
import Packages from '../pages/Packagespage/Packages'

const PageRoutes = () => {
  return (
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/packages' element={<Packages/>}/>
    <Route path='/dashboard' element={<DashBoard/>}/>
    <Route path='/login' element={<LogIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>







    </Routes>
  )
}

export default PageRoutes
