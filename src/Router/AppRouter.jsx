import React from 'react'
import { BrowserRouter,Route,  Routes } from 'react-router-dom'
import Header from '../Common/Header'
import Home from '../Pages/Home/Home'

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
        </BrowserRouter>
    </>
  )
}

export default AppRouter