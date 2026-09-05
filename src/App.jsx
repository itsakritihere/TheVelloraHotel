import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from "./pages/About";
import Services from './pages/Services'
import Packages from './pages/Packages'
import ExploreDetail from './pages/ExploreDetails'
import BackToTop from "./components/BackToTop";
import Booking from './pages/Booking'
import Team from './pages/Team'
import WhatsAppButton from "./components/Whatsapp"


import Contact from './pages/Contact'

export default function App() {
  return (
    <div>
        <Header />
          
        
        <Routes>
         
        <Route path='/' element={<Home/>}/>

      <Route path="/about" element={<About />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/packages' element={<Packages/>}/>
        
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/team' element={<Team/>}/>
        
       
        <Route path='/contact' element={<Contact/>}/>
     
<Route path="/explore/:id" element={<ExploreDetail />} />

        </Routes>
         <BackToTop />
          <WhatsAppButton />
        <Footer />
    </div>
  )
}
