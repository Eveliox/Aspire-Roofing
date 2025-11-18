import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyAspire from './components/WhyAspire'
import AboutSection from './components/AboutSection'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-purple-dark">
      <Navbar />
      <Hero />
      <WhyAspire />
      <AboutSection />
      <Gallery />
      <Services />
      <Footer />
    </div>
  )
}

export default App

