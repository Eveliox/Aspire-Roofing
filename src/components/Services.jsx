import React from 'react'
import ImageWithFallback from './ImageWithFallback'

const Services = () => {
  const services = [
    { name: 'Metal Roofing', image: '/images/service-metal.jpg' },
    { name: 'Tile Roofing', image: '/images/service-tile.jpg' },
    { name: 'Shingle Roofing', image: '/images/service-shingle.jpg' },
    { name: 'Flat Roofing', image: '/images/service-flat.jpg' }
  ]

  return (
    <section id="services" className="bg-gradient-to-b from-brand-white to-brand-white-off py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-black mb-6 uppercase tracking-tight">
            SERVICES
          </h2>
          <p className="text-brand-black/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
          At Aspire Roofing, we believe a roof is more than just protection—it’s peace of mind. That’s why we handle every step of the process with care, from
          tearing off the old roof to drying in and completing the final installation. With expertise in both residential and commercial roofing, we bring precision,
          reliability, and craftsmanship to every project.

          We only use high-quality materials and follow all building codes to ensure your roof is safe, durable, and built to last. Whether it’s a home or a
          business, Aspire Roofing provides solutions that combine strength, safety, and style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-brand-white-off/80 backdrop-blur-sm overflow-hidden shadow-xl transition-all duration-500 transform hover:-translate-y-3 border border-brand-charcoal/50 hover:border-brand-purple"
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
              <div className="p-8 bg-brand-white-off/80">
                <h3 className="text-xl font-semibold text-brand-black text-center uppercase tracking-wide">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

