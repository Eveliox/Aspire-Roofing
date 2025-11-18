import React, { useState } from 'react'
import ImageWithFallback from './ImageWithFallback'

const WhyAspire = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="bg-gradient-to-b from-purple-primary to-purple-dark py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-magenta-bright rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-magenta-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Roof Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-primary/50 to-transparent z-10"></div>
              <ImageWithFallback
                src="/images/Screenshot 2025-11-18 020304.png"
                alt="Quality roofing"
                className="w-full h-[400px] md:h-[600px] object-cover group-hover:scale-110 transition-transform duration-700"
                placeholderText="Roof Image"
              />
            </div>
          </div>

          {/* Right: Content and Form */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Choose Aspire Roofing for all your roofing needs
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed font-light">
              We provide dependable roofing services with a commitment to quality and excellence. 
              Our experienced team ensures every project is completed to the highest standards, 
              giving you peace of mind and a roof that lasts.
            </p>

            {/* Form */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 mb-10 border border-white/10 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase tracking-wide">Get A Free Estimate</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-magenta-bright focus:ring-2 focus:ring-magenta-bright/50 transition-all backdrop-blur-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-magenta-bright focus:ring-2 focus:ring-magenta-bright/50 transition-all backdrop-blur-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-magenta-bright focus:ring-2 focus:ring-magenta-bright/50 transition-all backdrop-blur-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-magenta-bright to-magenta-accent hover:from-magenta-accent hover:to-magenta-bright text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-xl uppercase tracking-wide"
                >
                  Make an Appointment
                </button>
              </form>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 text-center border border-magenta-bright/30 hover:border-magenta-bright/60 transition-all hover:bg-white/10">
                <div className="text-magenta-bright font-bold text-sm mb-2 uppercase tracking-wide">Certified</div>
                <div className="text-white text-xs font-medium">Polyglass</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 text-center border border-magenta-bright/30 hover:border-magenta-bright/60 transition-all hover:bg-white/10">
                <div className="text-magenta-bright font-bold text-sm mb-2 uppercase tracking-wide">Certified</div>
                <div className="text-white text-xs font-medium">Elevate</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 text-center border border-magenta-bright/30 hover:border-magenta-bright/60 transition-all hover:bg-white/10">
                <div className="text-magenta-bright font-bold text-sm mb-2 uppercase tracking-wide">Certified</div>
                <div className="text-white text-xs font-medium">Soprema</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyAspire

