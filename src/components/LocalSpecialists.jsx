import React from 'react'
import ImageWithFallback from './ImageWithFallback'

const LocalSpecialists = () => {
  return (
    <section className="bg-gradient-to-b from-brand-grey-light/20 to-brand-white py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-purple-light/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: 2x2 Grid of Roof Photos */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative overflow-hidden shadow-xl group transition-all duration-500 transform hover:-translate-y-2 border border-brand-grey/50 hover:border-brand-purple-light">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent z-10"></div>
                <ImageWithFallback
                  src="/images/roof-1.jpg"
                  alt="Roofing work"
                  className="w-full h-[250px] md:h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                  placeholderText="Roof 1"
                />
              </div>
              <div className="relative overflow-hidden shadow-xl group transition-all duration-500 transform hover:-translate-y-2 border border-brand-grey/50 hover:border-brand-purple-light">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent z-10"></div>
                <ImageWithFallback
                  src="/images/roof-2.jpg"
                  alt="Roofing work"
                  className="w-full h-[250px] md:h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                  placeholderText="Roof 2"
                />
              </div>
              <div className="relative overflow-hidden shadow-xl group transition-all duration-500 transform hover:-translate-y-2 border border-brand-grey/50 hover:border-brand-purple-light">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent z-10"></div>
                <ImageWithFallback
                  src="/images/roof-3.jpg"
                  alt="Roofing work"
                  className="w-full h-[250px] md:h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                  placeholderText="Roof 3"
                />
              </div>
              <div className="relative overflow-hidden shadow-xl group transition-all duration-500 transform hover:-translate-y-2 border border-brand-grey/50 hover:border-brand-purple-light">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent z-10"></div>
                <ImageWithFallback
                  src="/images/roof-4.jpg"
                  alt="Roofing work"
                  className="w-full h-[250px] md:h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                  placeholderText="Roof 4"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-grey-dark mb-8 leading-tight">
              Your Local Roofing Specialists,<br />
              <span className="bg-gradient-to-r from-brand-grey-dark via-brand-blue-light to-brand-purple-light bg-clip-text text-transparent">
                Built on Trust
              </span>
            </h2>
            <p className="text-brand-grey-dark/90 text-lg md:text-xl mb-10 leading-relaxed font-light">
              With years of experience serving South Florida, we've built our reputation on trust, 
              quality craftsmanship, and exceptional customer service. Every project is handled with 
              care and attention to detail, ensuring your roof protects your home for years to come.
            </p>
            <a 
              href="#services"
              className="inline-block bg-brand-blue hover:bg-brand-purple text-white font-semibold py-5 px-10 text-lg md:text-xl transition-all transform hover:-translate-y-1 shadow-xl uppercase tracking-wide"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocalSpecialists

