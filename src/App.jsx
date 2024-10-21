import React, { useContext } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Section from './Components/section'
import { DataContext } from './Context/UserContext'

function App() {

  const data = useContext(DataContext)
    console.log(data);
    
    
  return (
    <div>
      <h1> This App.js Context  API: {data.city} </h1>
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App
