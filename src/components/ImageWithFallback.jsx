import React, { useState } from 'react'

const ImageWithFallback = ({ src, alt, className, placeholderText }) => {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className={`${className} bg-purple-primary flex items-center justify-center`}>
        <div className="text-white text-center p-4">
          <div className="text-sm font-semibold">{placeholderText || 'Image'}</div>
          <div className="text-xs text-gray-400 mt-1">Placeholder - Add image later</div>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  )
}

export default ImageWithFallback

