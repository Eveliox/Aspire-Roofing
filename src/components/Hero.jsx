import React, { useState, useEffect } from 'react'

const Hero = () => {
  // Array of background images - using your uploaded screenshots
  const slides = [
    '/images/Screenshot 2025-11-18 012650.png',
    '/images/Screenshot 2025-11-18 012750.png',
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
      style={{ padding: '0' }}
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

      {/* Dark gradient overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-5 pointer-events-none"></div>

      {/* Subtle accent lights */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-magenta-bright/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>


      {/* Content */}
      <div className="relative z-20 container text-center animate-fade-in">
        <div className="animate-slide-up">

          <h1 className="font-extrabold text-white text-shadow-lg">

            STRONGER ROOFS,<br />
            <span className="text-white">
              BUILT RIGHT THE FIRST TIME
            </span>
          </h1>
        </div>
        


        <div className="mb-10 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-white leading-relaxed font-light">
            Protect your property with professional shingle, tile, metal, and flat-roof services. We handle everything—inspections, permits, installation, and cleanup—so you stay stress-free.

          </p>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a 

            href="#form"
            className="btn-primary"

          >
            CONTACT US FOR A FREE ESTIMATE →
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
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? 'w-12 h-3 bg-white shadow-lg shadow-magenta-bright/50'
                  : 'w-3 h-3 bg-white/40'
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
