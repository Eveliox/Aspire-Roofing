import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const GalleryPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-brand-white">
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  )
}

export default GalleryPage

