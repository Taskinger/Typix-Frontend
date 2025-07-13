import React from 'react'
import Navbar from './Sections/Navbar/Navbar'
import Header from './Sections/Header/Header.jsx'
import Stats from './Sections/Stats/Stats'
import Latest from './Sections/Latest/Latest'
import Trending from './Sections/Trending/Trending'
import GetStarted from './Sections/GetStarted/GetStarted'
import Footer from './Sections/Footer/Footer'

const App = () => {
  return (
    <div className="bg-[#050A30] min-h-screen">
      <Navbar />
      <Header />
      <Stats />
      <Latest />
      <Trending />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App
