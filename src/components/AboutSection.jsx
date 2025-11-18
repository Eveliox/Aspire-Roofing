import React from 'react'

const AboutSection = () => {
  return (
    <section 
      id="about"
      className="relative py-20 md:py-32 bg-brand-ink overflow-hidden"
      style={{
        backgroundImage: 'url(/images/about-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/95 via-brand-ink/92 to-brand-charcoal/98"></div>

      {/* Accent lights */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-purple/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-purple-soft/25 rounded-full blur-3xl" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Roofing with Purpose –<br />
            <span className="bg-gradient-to-r from-white via-brand-purple to-brand-purple-soft bg-clip-text text-transparent">
              Because We Aspire 4 More
            </span>
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            At Aspire Roofing, we don't just install roofs—we build lasting relationships with our 
            community, delivering excellence in every project and aspiring to exceed expectations.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Mission Card */}
          <div className="bg-brand-graphite/70 backdrop-blur-md rounded-2xl p-10 border border-brand-line/60 hover:border-brand-purple transition-all duration-500 hover:bg-brand-graphite/60 hover:shadow-2xl hover:shadow-brand-purple/20 transform hover:-translate-y-2">
            <div className="text-brand-purple mb-6">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-5 uppercase tracking-wide">OUR MISSION</h3>
            <p className="text-white/80 leading-relaxed text-base md:text-lg font-light">
              To provide exceptional roofing services that protect homes and families while building 
              trust through quality workmanship and honest communication.
            </p>
          </div>

          {/* Innovation Card */}
          <div className="bg-brand-graphite/70 backdrop-blur-md rounded-2xl p-10 border border-brand-line/60 hover:border-brand-purple transition-all duration-500 hover:bg-brand-graphite/60 hover:shadow-2xl hover:shadow-brand-purple/20 transform hover:-translate-y-2">
            <div className="text-brand-purple mb-6">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-5 uppercase tracking-wide">OUR INNOVATION</h3>
            <p className="text-white/80 leading-relaxed text-base md:text-lg font-light">
              We stay ahead with the latest roofing technologies and materials, ensuring your roof 
              is built with cutting-edge solutions that stand the test of time.
            </p>
          </div>

          {/* Support Card */}
          <div className="bg-brand-graphite/70 backdrop-blur-md rounded-2xl p-10 border border-brand-line/60 hover:border-brand-purple transition-all duration-500 hover:bg-brand-graphite/60 hover:shadow-2xl hover:shadow-brand-purple/20 transform hover:-translate-y-2">
            <div className="text-brand-purple mb-6">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-5 uppercase tracking-wide">RELIABLE SUPPORT</h3>
            <p className="text-white/80 leading-relaxed text-base md:text-lg font-light">
              From initial consultation to post-installation support, we're here for you every step 
              of the way with responsive service and ongoing maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

