import React from 'react'
import './app.scss'
import {
  Analytics,
  DashboardPreview,
  Distribution,
  Feature,
  Footer,
  Home,
  Navbar,
  STTop
} from "./Components";

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <Analytics />
      <DashboardPreview />
      <Distribution />
      <Feature />
      <Footer />
      <STTop />
    </div>
  )
}

export default App