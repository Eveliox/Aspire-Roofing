import React from 'react'

const AboutSection = () => {
  return (
    <section 
      id="about"
      className="relative py-20 md:py-32 bg-purple-dark overflow-hidden"
      style={{
        backgroundImage: 'url(/images/about-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}

      <div className="absolute inset-0 bg-gradient-to-br from-brand-white/90 via-brand-white to-brand-white/90"></div>


      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-magenta-bright rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-magenta-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight px-4">
            Roofing with Purpose –<br />
            <span className="text-white">
              Because We Aspire 4 More
            </span>
          </h2>

          <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light px-4">
            Aspire Roofing is a family-owned business with over 15 years of experience. We proudly serve South
            Florida with bilingual services, free estimates, and a commitment to quality. Our goal is simple: to
            provide reliable, top-quality roofing services you can trust.

          </p>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Mission Card */}


          <div className="bg-brand-purple-medium/80 backdrop-blur-md p-10 border border-brand-purple/30 hover:border-brand-purple transition-all duration-500 hover:bg-brand-purple-soft hover:shadow-2xl hover:shadow-brand-purple/20 transform hover:-translate-y-2">
            <div className="text-brand-purple mb-6">

              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>


            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-4 sm:mb-5 uppercase tracking-wide">OUR MISSION</h3>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base md:text-lg font-light">
            To deliver top-quality services across South Florida with honesty,  safety, and customer
            satisfaction at the core. We beleive every project is a chance to help families Aspire 4 More.

            </p>
          </div>

          {/* Innovation Card */}


          <div className="bg-brand-purple-medium/80 backdrop-blur-md p-10 border border-brand-purple/30 hover:border-brand-purple transition-all duration-500 hover:bg-brand-purple-soft hover:shadow-2xl hover:shadow-brand-purple/20 transform hover:-translate-y-2">
            <div className="text-brand-purple mb-6">

              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>


            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-4 sm:mb-5 uppercase tracking-wide">OUR INNOVATION</h3>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base md:text-lg font-light">
              To be the most trusted family-owned roofing company in South Florida—known for our craftmanship, customer service, and integrity,
              bilingual services, and dedication to building strong roofs and stronger communities.

            </p>
          </div>

          {/* Support Card */}


          <div className="bg-brand-purple-medium/80 backdrop-blur-md p-10 border border-brand-purple/30 hover:border-brand-purple transition-all duration-500 hover:bg-brand-purple-soft hover:shadow-2xl hover:shadow-brand-purple/20 transform hover:-translate-y-2">
            <div className="text-brand-purple mb-6">

              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>


            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-4 sm:mb-5 uppercase tracking-wide">RELIABLE SUPPORT</h3>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base md:text-lg font-light">
              With over 15 years of hands-on experience, Aspire Roofing provides reliable, certified solutions you can
              count on. From repairs to full installations, we deliver protection and peace of mind.

            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

