import { useEffect, useState } from 'react'

import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Product from './Pages/Product'

import Header from './Header'


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>




  )


}

export default App
