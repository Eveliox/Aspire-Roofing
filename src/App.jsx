import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'

function App() {
  return (
<<<<<<< Updated upstream
    <div className="min-h-screen bg-purple-dark">
      <Navbar />
      <Hero />
      <WhyAspire />
      <AboutSection />
      <Gallery />
      <Services />
      <Footer />
    </div>
=======
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
>>>>>>> Stashed changes
  )
}

export default App

