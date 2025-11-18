import React from 'react'

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative w-full min-h-[90vh] flex items-center justify-center bg-purple-dark overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-roof.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/90 via-purple-primary/85 to-purple-dark/90"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-magenta-bright/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Diagonal decorations */}
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[200px] border-l-transparent border-t-[200px] border-t-magenta-bright/15"></div>
        <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[250px] border-r-transparent border-b-[250px] border-b-magenta-bright/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
