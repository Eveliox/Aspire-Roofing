import React, { useState, useEffect } from 'react'

const Hero = () => {
  // Array of background images - using your uploaded screenshots
  const slides = [
    '/images/Screenshot 2025-11-18 012650.png',
    '/images/Screenshot 2025-11-18 012829.png',
    '/images/Screenshot 2025-11-18 012907.png',
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Auto-play slideshow
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [isPaused, slides.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <section 
      id="home"
      className="relative w-full min-h-[90vh] flex items-center justify-center bg-brand-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slideshow Background Images with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Ken Burns zoom effect - subtle and premium */}
            <div 
              className={`absolute inset-0 transition-all duration-[8000ms] ease-in-out ${
                index === currentSlide 
                  ? 'scale-105' 
                  : 'scale-100'
              }`}
              style={{
                backgroundImage: `url("${slide}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                willChange: index === currentSlide ? 'transform' : 'auto',
              }}
            >
              {/* Fallback: Also render as img to help with debugging */}
              <img 
                src={slide} 
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover opacity-0 pointer-events-none"
                onError={(e) => {
                  console.error(`Failed to load image: ${slide}`, e)
                }}
                onLoad={() => {
                  if (index === currentSlide) {
                    console.log(`Image loaded: ${slide}`)
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Overlay - Minimal to show images clearly */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black/60 via-brand-white/50 to-brand-black/60 z-10"></div>
      
      {/* Subtle accent lights */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/15 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/5 hover:bg-white/15 backdrop-blur-md rounded-full p-3 md:p-4 transition-all duration-300 group border border-white/10 hover:border-white/30"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-brand-white group-hover:text-brand-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-brand-white/5 hover:bg-brand-white/15 backdrop-blur-md rounded-full p-3 md:p-4 transition-all duration-300 group border border-brand-white/10 hover:border-brand-white/30"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-brand-white group-hover:text-brand-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-brand-black mb-8 leading-tight">
            STRONGER ROOFS,<br />
            BUILT RIGHT THE FIRST TIME
          </h1>
        </div>
        
        <div className="bg-brand-white-off/80 backdrop-blur-xl p-8 md:p-10 mb-10 max-w-4xl mx-auto border border-brand-charcoal/40 card-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-brand-black text-xl md:text-2xl leading-relaxed font-light">
            Protect your property with professional shingle, tile, metal, and flat-roof services. We handle everything—inspections, permits, installation, and cleanup—so you stay stress-free.
          </p>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#contact"
            className="inline-block bg-brand-purple hover:bg-brand-purple-dark text-brand-white font-semibold py-5 px-10 md:py-6 md:px-14 text-lg md:text-xl transition-all transform hover:-translate-y-1 shadow-xl uppercase tracking-wide"
          >
            CALL US FOR FREE ESTIMATE →
          </a>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex items-center">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 h-3 bg-brand-purple shadow-lg shadow-brand-purple/30'
                  : 'w-3 h-3 bg-brand-charcoal/40 hover:bg-brand-charcoal/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
