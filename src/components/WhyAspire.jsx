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
    <section className="bg-gradient-to-b from-brand-white-off to-brand-white py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-purple/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-brand-purple/25 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Roof Image */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden shadow-2xl border border-brand-white/5">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent z-10"></div>
              <ImageWithFallback
                src="/images/Screenshot 2025-11-18 020304.png"
                alt="Quality roofing"
                className="w-full h-[400px] md:h-[600px] object-cover"
                placeholderText="Roof Image"
              />
            </div>
          </div>

          {/* Right: Content and Form */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-black mb-6 leading-tight">
              Choose Aspire Roofing for all your roofing needs
            </h2>
            <p className="text-brand-black/90 text-lg md:text-xl mb-10 leading-relaxed font-light">
              At Aspire Roofing & Construction, we provide dependable roofing solutions
              designed for long-lasting protection and peace of mind. From complete
              roof installations to reliable roof repairs, our skilled team delivers top-
              quality craftsmanship on every project. With certified materials and work
              that meets Florida building codes, you can trust that your home or
              business is in safe hands.
            </p>

            {/* Form */}
            <div className="bg-brand-white-off/80 backdrop-blur-md p-8 md:p-10 mb-10 border border-brand-charcoal/50 card-shadow">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-8 uppercase tracking-wide">Get A Free Estimate</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-brand-white border border-brand-charcoal/50 text-brand-black placeholder-brand-charcoal/50 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/40 transition-all"
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
                    className="w-full px-6 py-4 bg-brand-white border border-brand-charcoal/50 text-brand-black placeholder-brand-charcoal/50 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/40 transition-all"
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
                    className="w-full px-6 py-4 bg-brand-white border border-brand-charcoal/50 text-brand-black placeholder-brand-charcoal/50 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/40 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-purple hover:bg-brand-purple-dark text-brand-white font-semibold py-4 px-8 transition-all transform hover:-translate-y-0.5 shadow-lg uppercase tracking-wide"
                >
                  Make an Appointment
                </button>
              </form>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-brand-white backdrop-blur-sm p-5 text-center border border-brand-charcoal/60 hover:border-brand-purple transition-all hover:bg-brand-white-off">
                <div className="text-brand-purple font-bold text-sm mb-2 uppercase tracking-wide">Certified</div>
                <div className="text-brand-black text-xs font-medium">Polyglass</div>
              </div>
              <div className="bg-brand-white backdrop-blur-sm p-5 text-center border border-brand-charcoal/60 hover:border-brand-purple transition-all hover:bg-brand-white-off">
                <div className="text-brand-purple font-bold text-sm mb-2 uppercase tracking-wide">Certified</div>
                <div className="text-brand-black text-xs font-medium">Elevate</div>
              </div>
              <div className="bg-brand-white backdrop-blur-sm p-5 text-center border border-brand-charcoal/60 hover:border-brand-purple transition-all hover:bg-brand-white-off">
                <div className="text-brand-purple font-bold text-sm mb-2 uppercase tracking-wide">Certified</div>
                <div className="text-brand-black text-xs font-medium">Soprema</div>
              </div>
              <div className="bg-brand-white backdrop-blur-sm p-5 text-center border border-brand-charcoal/60 hover:border-brand-purple transition-all hover:bg-brand-white-off">
                <div className="text-brand-purple font-bold text-sm mb-2 uppercase tracking-wide">License</div>
                <div className="text-brand-black text-xs font-medium">CCC133657</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyAspire

