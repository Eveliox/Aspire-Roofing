import React, { useState, useEffect } from 'react'
import ImageWithFallback from './ImageWithFallback'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('Metal')

  // Metal images - all images from the metal folder
  const metalImages = [
    '/images/metal/Resized_20230527_112517.jpeg',
    '/images/metal/Resized_20230527_112524.jpeg',
    '/images/metal/Resized_20230527_112527.jpeg',
    '/images/metal/Resized_20230527_112543.jpeg',
    '/images/metal/Resized_20230527_112545.jpeg',
    '/images/metal/Resized_20230527_112547.jpeg',
    '/images/metal/Resized_20230527_112608.jpeg',
    '/images/metal/Resized_20230527_112626.jpeg',
    '/images/metal/Resized_20240917_142859.jpeg',
    '/images/metal/Resized_20240917_143032.jpeg',
    '/images/metal/Resized_20240917_143035.jpeg',
    '/images/metal/Resized_20240917_143045.jpeg',
    '/images/metal/Resized_20240917_143522.jpeg',
    '/images/metal/Resized_20240917_143524.jpeg',
    '/images/metal/Resized_20240917_143529.jpeg',
    '/images/metal/Resized_20250312_104624.jpeg',
    '/images/metal/Resized_20250317_155027.jpeg',
    '/images/metal/Resized_20250317_155031.jpeg',
    '/images/metal/Resized_20250317_155040.jpeg',
    '/images/metal/Resized_20250317_155043.jpeg',
    '/images/metal/Resized_20250317_155048.jpeg',
    '/images/metal/Resized_20250317_155115.jpeg'
  ]

  // Tile images - all images from the tile folder
  const tileImages = [
    '/images/tile/IMG_1578.jpg',
    '/images/tile/IMG_2709.jpg',
    '/images/tile/IMG_2710.jpg',
    '/images/tile/IMG_2711.jpg',
    '/images/tile/IMG_3042.jpg',
    '/images/tile/IMG_3088.jpg',
    '/images/tile/IMG_3095.jpg',
    '/images/tile/IMG_3098.jpg',
    '/images/tile/IMG_3099.jpg',
    '/images/tile/IMG_3402.jpg',
    '/images/tile/IMG_3418.jpg',
    '/images/tile/IMG_3419.jpg',
    '/images/tile/IMG_3442.jpg',
    '/images/tile/Resized_20240924_141105.jpeg',
    '/images/tile/Resized_20240924_141107.jpeg',
    '/images/tile/Resized_20240924_141108.jpeg',
    '/images/tile/Resized_20240924_141110.jpeg',
    '/images/tile/Resized_20240924_141114.jpeg',
    '/images/tile/Resized_20240924_141226.jpeg',
    '/images/tile/Resized_20240924_141229.jpeg'
  ]

  // Shingle images - all images from the shingle folder
  const shingleImages = [
    '/images/shingle/Resized_20220729_171321_1740364166595.jpeg',
    '/images/shingle/Resized_20220729_171345_1740364165635.jpeg',
    '/images/shingle/Resized_20231201_114407.jpeg',
    '/images/shingle/Resized_20231201_114418.jpeg',
    '/images/shingle/Resized_20240606_104327.jpeg',
    '/images/shingle/Resized_20240606_104355.jpeg',
    '/images/shingle/Resized_20240606_104520.jpeg',
    '/images/shingle/Resized_20240606_104523.jpeg',
    '/images/shingle/Resized_20240904_154311.jpeg',
    '/images/shingle/Resized_20240904_154354.jpeg',
    '/images/shingle/Resized_20240904_154406.jpeg',
    '/images/shingle/Resized_20250909_172036.jpeg',
    '/images/shingle/Resized_20250909_172042.jpeg',
    '/images/shingle/Resized_20250909_172049.jpeg',
    '/images/shingle/Resized_20250909_172057.jpeg',
    '/images/shingle/Resized_20250909_172119.jpeg'
  ]

  // Flat images - all images from the flat roof folder
  const flatImages = [
    '/images/flat roof/Resized_20240324_133305.jpeg',
    '/images/flat roof/Resized_20240324_133306.jpeg',
    '/images/flat roof/Resized_20250813_095038.jpeg',
    '/images/flat roof/Resized_20250813_095044.jpeg',
    '/images/flat roof/Resized_20250813_095049.jpeg',
    '/images/flat roof/Resized_20250919_120903.jpeg'
  ]

  // Repairs images - all images from the repairs folder
  const repairsImages = [
    '/images/repairs/IMG_7128.jpg',
    '/images/repairs/IMG_7129.jpg',
    '/images/repairs/IMG_7151.jpg',
    '/images/repairs/IMG_7626.jpg',
    '/images/repairs/IMG_9603.jpg',
    '/images/repairs/IMG_9604.jpg'
  ]

  const categories = ['Metal', 'Tile', 'Shingle', 'Flat', 'Repairs']
  
  const getImagesForCategory = (category) => {
    switch(category) {
      case 'Metal':
        return metalImages
      case 'Tile':
        return tileImages
      case 'Shingle':
        return shingleImages
      case 'Flat':
        return flatImages
      case 'Repairs':
        return repairsImages
      default:
        return []
    }
  }

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  const currentImages = getImagesForCategory(selectedCategory)

  return (

    <section id="gallery" className="bg-brand-white relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-magenta-bright rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-white text-shadow-lg">
            Aspire for Quality,<br />
            <span className="text-white">
              Built for Protection
            </span>
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto leading-relaxed font-light mt-6">
            Welcome to Aspire Roofing, where expert craftsmanship meets trust and long-lasting protection. Explore our portfolio of residential and
            commercial roofing projects across South Florida each one built with precision, integrity, and care. From shingle to tile, metal, and flat
            roofs, every project showcases our dedication to delivering durable, code-compliant roofing solutions that stand the test of time.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn-primary ${
                selectedCategory === category
                  ? ''
                  : '!bg-purple-medium/80 !text-white hover:!bg-purple-medium'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        {currentImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="card cursor-pointer overflow-hidden p-0"
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/85 to-transparent z-10"></div>
                  <ImageWithFallback
                    src={image}
                    alt={`${selectedCategory} roofing project ${index + 1}`}
                    className="w-full h-full object-cover"
                    placeholderText={`${selectedCategory} ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">No images available for {selectedCategory} yet.</p>
          </div>
        )}
      </div>

      {/* Expanded Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-brand-purple transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Expanded Image */}
            <div className="relative w-full h-full flex flex-col items-center">
              <img
                src={selectedImage}
                alt={`${selectedCategory} roofing project`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery

