import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Blogs from './Components/Pages/Blogs'
import Contact from './Components/Pages/Contact'
import Portfolio from './Components/Pages/Portfolio'
import Sidebar from './Components/Layout/Sidebar'
import {AnimatePresence} from "framer-motion"
function App() {


  return (
    <BrowserRouter>
      <div className='flex '>
       <Sidebar />

        <div className="Dashabord bg-gray-400   duration-300  flex-1  p-4">
          <AnimatePresence>
             <Routes>
                 <Route path='/' element={<Home/>} />
                 <Route path='/about' element={<About/>} /> 
                 <Route path='/blogs' element={<Blogs/>} /> 
                 <Route path='/contact' element={<Contact/>} /> 
                 <Route path='/more' element={<Portfolio/>} /> 
             </Routes>
             </AnimatePresence>
        </div>



      </div>

    </BrowserRouter>
  )
}

export default App