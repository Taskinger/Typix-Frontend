import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Stats from './Components/Stats/Stats'

const App = () => {
  return (
    <div className="bg-[#050A30] min-h-screen">
      <Navbar />
      <Header />
      <Stats />
    </div>

  )
}

export default App
