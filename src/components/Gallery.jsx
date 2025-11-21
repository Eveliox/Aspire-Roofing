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
    <section id="gallery" className="bg-gradient-to-b from-brand-white-off to-brand-white py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-purple/30 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-black mb-6 leading-tight">
            Aspire for Quality,<br />
            <span className="text-brand-black">
              Built for Protection
            </span>
          </h2>
          <p className="text-brand-black/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
          Welcome to Aspire Roofing, where expert craftsmanship meets trust and long-lasting protection. Explore our portfolio of residential and
          commercial roofing projects across South Florida each one built with precision, integrity, and care. From shingle to tile, metal, and flat
          roofs, every project showcases our dedication to delivering durable, code-compliant roofing solutions that stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category.name)}
              className="group relative cursor-pointer overflow-hidden bg-brand-white-off/80 shadow-xl transition-all duration-500 transform hover:-translate-y-4 border border-brand-charcoal/50 hover:border-brand-purple"
            >
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent z-10"></div>
                <ImageWithFallback
                  src={category.image}
                  alt={`${category.name} roofing`}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  placeholderText={category.name}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="bg-brand-purple text-brand-white font-semibold py-3 px-8 inline-block shadow-lg group-hover:-translate-y-1 transition-transform uppercase tracking-wide">
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

