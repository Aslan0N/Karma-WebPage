import React from 'react'
import { BrowserRouter,Route,  Routes } from 'react-router-dom'
import Header from '../Common/Header'
import Home from '../Pages/Home/Home'
import Footer from '../Common/Footer'

const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
        <Header/>
            <Routes>
                 <Route path='/' element={<Home/>} />
               {/* <Route/>
                <Route/> */}
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default AppRouter