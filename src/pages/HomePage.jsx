import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyAspire from '../components/WhyAspire'
import AboutSection from '../components/AboutSection'
import Services from '../components/Services'
import Footer from '../components/Footer'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Wait for all images and content to load
    const handleLoad = () => {
      // Add a small delay for smooth transition
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      // Fallback timeout in case load event doesn't fire
      setTimeout(handleLoad, 2000)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 bg-brand-white z-50 flex items-center justify-center transition-opacity duration-500">
          <div className="flex flex-col items-center">
            <img
              src="/Logo (1).png"
              alt="Aspire Roofing Logo"
              className="h-24 md:h-32 w-auto animate-pulse"
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`min-h-screen bg-brand-white ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <Navbar />
        <Hero />
        <WhyAspire />
        <AboutSection />
        <Services />
        <Footer />
      </div>
    </>
  )
}

export default HomePage

