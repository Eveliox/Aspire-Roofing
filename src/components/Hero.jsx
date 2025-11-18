import React, { useState, useEffect } from 'react'

const Hero = () => {
  // Array of background images - using your uploaded screenshots
  const slides = [
    '/images/Screenshot 2025-11-18 012650.png',
    '/images/Screenshot 2025-11-18 012750.png',
    '/images/Screenshot 2025-11-18 012804.png',
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
      className="relative w-full min-h-[90vh] flex items-center justify-center bg-purple-dark overflow-hidden"
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
      <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/15 via-purple-primary/10 to-purple-dark/20 z-10"></div>
      
      {/* Animated Background Elements - Reduced opacity */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-magenta-bright/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 md:p-4 transition-all duration-300 group border border-white/20 hover:border-white/40"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-magenta-bright transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 md:p-4 transition-all duration-300 group border border-white/20 hover:border-white/40"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-magenta-bright transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight text-shadow-lg">
            STRONGER ROOFS,<br />
            <span className="bg-gradient-to-r from-white via-magenta-bright to-white bg-clip-text text-transparent">
              BUILT RIGHT THE FIRST TIME
            </span>
          </h1>
        </div>
        
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 mb-10 max-w-4xl mx-auto border border-white/10 shadow-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-white text-xl md:text-2xl leading-relaxed font-light">
            From shingle and tile to metal and flat roofs, we handle everything—permits, inspection, installation, and cleanup. 
            Your trusted roofing partner for quality workmanship and reliable service.
          </p>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#contact"
            className="inline-block bg-gradient-to-r from-magenta-bright to-magenta-accent hover:from-magenta-accent hover:to-magenta-bright text-white font-bold py-5 px-10 md:py-6 md:px-14 rounded-full text-lg md:text-xl transition-all transform hover:scale-105 shadow-2xl glow-hover uppercase tracking-wide"
          >
            CALL US FOR FREE ESTIMATE →
          </a>
        </div>
      </div>

      {/* Navigation Dots with Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center space-y-4">
        {/* Progress Bar */}
        {!isPaused && (
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              key={currentSlide}
              className="h-full bg-gradient-to-r from-magenta-bright to-magenta-accent animate-progress"
            />
          </div>
        )}
        
        {/* Dots */}
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 h-3 bg-white shadow-lg shadow-magenta-bright/50'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
