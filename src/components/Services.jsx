import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImageWithFallback from './ImageWithFallback'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    { 
      name: 'Metal Roofing', 
      image: '/images/ServicesMetal.jpeg',
      header: 'Elite Metal Roofing Solutions for Homes & Businesses',
      subHeader: 'Durable. Sleek. Built to Last.',
      text: 'At Aspire Roofing, we bring precision and quality together to deliver metal roofing systems engineered for strength, protection, and lasting value. Our roofs stand up to South Florida\'s toughest weather conditions — from heavy rain to scorching sun — while maintaining a modern, stylish appearance that enhances your property\'s curb appeal.\n\nOur expert team specializes in custom metal roof installations, ensuring every project meets the highest standards of performance and compliance. Whether it\'s a new installation, replacement, or upgrade, we use top-grade materials like Polystick XFR underlayment to guarantee fire resistance, waterproofing, and long-term durability.\n\nExperience the Aspire difference — where craftsmanship meets innovation. Trust us to protect your home or business with a roof that\'s strong, energy-efficient, and built for the future.'
    },
    { 
      name: 'Tile Roofing', 
      image: '/images/ServicesTile.png',
      header: 'Luxury Tile Roofing Solutions for Lasting Beauty and Protection',
      subHeader: 'Elegant. Durable. Built to Endure Florida\'s Climate.',
      text: 'At Aspire Roofing, we combine craftsmanship and quality materials to deliver tile roofing systems designed for strength, style, and long-term value. Tile roofs not only elevate your home\'s appearance but also offer excellent resistance against South Florida\'s heat, heavy rain, and humidity.\n\nOur team specializes in tile roof installations, replacements, and repairs, using top-grade materials such as Polyanchor and TU-MAX underlayments to ensure complete waterproofing and code compliance. Each project is handled with care and precision, giving you a roof that looks stunning and performs exceptionally for decades.\n\nWhether you own a residential home or a commercial property, Aspire Roofing provides affordable, energy-efficient tile solutions that enhance curb appeal while maintaining durability and comfort.'
    },
    { 
      name: 'Shingle Roofing', 
      image: '/images/ServicesShingle.jpeg',
      header: 'Quality Shingle Roofing Built for Beauty and Durability',
      subHeader: 'Reliable. Affordable. Designed to Protect Your Home.',
      text: 'At Aspire Roofing, we take pride in providing top-quality shingle roofing solutions that combine long-lasting performance with unmatched visual appeal. Our shingle roofs are crafted to enhance your home\'s appearance while delivering strong, weather-resistant protection year after year.\n\nFrom architectural shingles to traditional asphalt designs, our materials are selected for durability, versatility, and efficiency—ensuring your roof performs under South Florida\'s toughest conditions. Every project is handled with precision, care, and full code compliance to guarantee a flawless finish.\n\nWhether you\'re replacing an old roof or installing a new one, Aspire Roofing offers budget-friendly and premium shingle options tailored to your needs. With our team\'s dedication to excellence, you can trust your home is covered by a roof that\'s built to last and made to impress.'
    },
    { 
      name: 'Flat Roofing', 
      image: '/images/ServicesFlat.jpeg',
      header: 'Professional Flat Roofing Services You Can Rely On',
      text: 'At Aspire Roofing, we specialize in high-quality flat roofing systems designed for durability, performance, and modern appeal. Our expert installers use premium materials — including 75 base sheet, 20 membrane, and cap sheet sealed with hot mop — to ensure every roof is watertight, code-compliant, and built to last. Flat roofs are an excellent choice for both residential and commercial properties, offering clean aesthetics and cost-effective protection against South Florida\'s harsh weather. Whether it\'s a new installation, replacement, or repair, Aspire Roofing delivers precision workmanship and dependable results that keep your property protected year-round.'
    }
  ]

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedService(null)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedService])

  return (
    <section id="services" className="bg-brand-white py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-magenta-bright rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 uppercase tracking-tight">
            SERVICES
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light px-4">
          At Aspire Roofing, we believe a roof is more than just protection—it's peace of mind. That's why we handle every step of the process with care, from
          tearing off the old roof to drying in and completing the final installation. With expertise in both residential and commercial roofing, we bring precision,
          reliability, and craftsmanship to every project.

          We only use high-quality materials and follow all building codes to ensure your roof is safe, durable, and built to last. Whether it's a home or a
          business, Aspire Roofing provides solutions that combine strength, safety, and style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="group bg-brand-purple-medium/80 backdrop-blur-sm overflow-hidden shadow-xl transition-all duration-500 transform hover:-translate-y-3 border border-brand-purple/30 hover:border-brand-purple cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 to-transparent z-10"></div>
                <ImageWithFallback
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  placeholderText={service.name}
                />
              </div>
              <div className="p-8 bg-brand-purple-medium/80">
                <h3 className="text-xl font-semibold text-white text-center uppercase tracking-wide">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="flex justify-center sm:justify-end mt-8 sm:mt-12 px-4">
          <Link
            to="/gallery"
            className="bg-brand-purple text-brand-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 hover:bg-brand-purple/90 hover:shadow-lg transform hover:-translate-y-1"
          >
            View Full Gallery
          </Link>
        </div>
      </div>

      {/* Expanded Image Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-start justify-center p-4 sm:p-6 md:p-8 transition-opacity duration-300 overflow-y-auto"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative max-w-7xl w-full my-4 sm:my-8 min-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Fixed position for mobile */}
            <button
              onClick={() => setSelectedService(null)}
              className="fixed top-4 right-4 sm:absolute sm:top-2 sm:right-2 text-white hover:text-brand-purple transition-colors z-20 bg-black/70 rounded-full p-2 sm:p-2 hover:bg-black/90 shadow-lg"
              aria-label="Close"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content Layout: Image and Text Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
              {/* Image Section */}
              <div className="flex-shrink-0 flex items-center justify-center order-2 lg:order-1">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="w-full max-w-md h-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Text Content Section */}
              <div className="flex flex-col space-y-4 sm:space-y-6 text-white order-1 lg:order-2 pt-8 sm:pt-0">
                {selectedService.header && (
                  <>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight pr-10 sm:pr-0">
                      {selectedService.header}
                    </h3>
                    {selectedService.subHeader && (
                      <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90">
                        {selectedService.subHeader}
                      </h4>
                    )}
                    {selectedService.text && (
                      <div className="text-sm sm:text-base md:text-lg leading-relaxed space-y-3 sm:space-y-4 text-white/90 pb-4">
                        {selectedService.text.split('\n\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    )}
                  </>
                )}
                {!selectedService.header && (
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide pr-10 sm:pr-0">
                    {selectedService.name}
                  </h3>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Services

