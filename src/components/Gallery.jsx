import React from 'react'
import ImageWithFallback from './ImageWithFallback'

const Gallery = () => {
  const categories = [
    { name: 'Metal', image: '/images/gallery-metal.jpg' },
    { name: 'Tile', image: '/images/gallery-tile.jpg' },
    { name: 'Shingle', image: '/images/gallery-shingle.jpg' },
    { name: 'Flat', image: '/images/gallery-flat.jpg' }
  ]

  const handleCategoryClick = (category) => {
    console.log('Category clicked:', category)
    // Will wire to filter later
  }

  return (
    <section id="gallery" className="bg-gradient-to-b from-brand-charcoal to-brand-ink py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-purple/25 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Aspire for Quality,<br />
            <span className="bg-gradient-to-r from-white via-brand-purple to-brand-purple-soft bg-clip-text text-transparent">
              Built for Protection
            </span>
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Explore our gallery of completed projects showcasing our expertise across different roofing types 
            and styles. Each project reflects our commitment to quality and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category.name)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-brand-graphite/80 shadow-xl transition-all duration-500 transform hover:-translate-y-4 border border-brand-line/60 hover:border-brand-purple"
            >
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/60 to-transparent z-10"></div>
                <ImageWithFallback
                  src={category.image}
                  alt={`${category.name} roofing`}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  placeholderText={category.name}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="bg-brand-purple text-white font-semibold py-3 px-8 rounded-xl inline-block shadow-lg group-hover:-translate-y-1 transition-transform uppercase tracking-wide">
                  {category.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

