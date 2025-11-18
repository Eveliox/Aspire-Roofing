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
    <section id="services" className="bg-gradient-to-b from-purple-dark to-purple-primary py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-magenta-bright rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 uppercase tracking-tight">
            SERVICES
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            We offer comprehensive roofing solutions tailored to your needs. From installation to repair, 
            our expert team handles every aspect of your roofing project with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(255,0,255,0.3)] transition-all duration-500 transform hover:-translate-y-3 border border-white/10 hover:border-magenta-bright/50"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-primary/80 to-transparent z-10"></div>
                <ImageWithFallback
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  placeholderText={service.name}
                />
              </div>
              <div className="p-8 bg-gradient-to-b from-purple-primary/50 to-purple-dark/50">
                <h3 className="text-xl font-extrabold text-white text-center uppercase tracking-wide">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

