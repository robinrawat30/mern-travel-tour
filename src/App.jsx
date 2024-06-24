import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PageRoutes from './routes/PageRoutes'
import Header from './components/Header'
import Footer from './components/Footer'
import SecondaryFooter from './components/SecondaryFooter'




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
     <PageRoutes/>
     <Footer/>
     <SecondaryFooter/>
 
     
    </BrowserRouter>

     
    </>
  )
}

export default App
