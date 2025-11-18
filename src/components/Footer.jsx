import React from 'react'

const Footer = () => {
  const areas = [
    'Miami-Dade',
    'Broward County',
    'Palm Beach County',
    'Monroe County'
  ]

  return (
    <footer className="bg-gradient-to-b from-brand-ink to-black border-t border-brand-line/60 py-16 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/25 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {/* Left: Logo */}
          <div>
            <div className="mb-6">
              <img
                src="/Logo.png"
                alt="Aspire Roofing Logo"
                className="h-16 md:h-20 w-auto mb-4 drop-shadow-[0_8px_22px_rgba(0,0,0,0.55)]"
              />
              <p className="text-white/80 text-xl font-semibold mb-2">Aspire For More</p>
              <p className="text-white/60 text-sm font-medium">Est. 2017</p>
            </div>
          </div>

          {/* Middle: Areas */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Areas we are servicing:</h3>
            <ul className="space-y-4">
              {areas.map((area, index) => (
                <li key={index} className="flex items-center text-white/90 hover:text-brand-purple transition-colors group">
                  <svg className="w-5 h-5 text-brand-purple mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact */}
          <div className="bg-brand-graphite/70 backdrop-blur-md rounded-2xl p-8 border border-brand-line/60 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Call for a Free Estimate</h3>
            <div className="space-y-4">
              <div className="flex items-center text-white/90 group">
                <svg className="w-6 h-6 text-brand-purple mr-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:7866566098" className="hover:text-brand-purple transition-colors font-semibold text-lg">
                  786-656-6098
                </a>
              </div>
              <div className="flex items-center text-white/90 group">
                <svg className="w-6 h-6 text-brand-purple mr-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:estimates@aspireroofing.com" className="hover:text-brand-purple transition-colors font-semibold">
                  estimates@aspireroofing.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center space-y-2">
          <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} Aspire Roofing. All rights reserved.</p>
          <p className="text-white/50 text-xs">
            by{' '}
            <a 
              href="https://azulwebdev.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-purple hover:text-brand-purple-soft transition-colors font-semibold underline decoration-2 underline-offset-2 hover:decoration-brand-purple-soft"
            >
              Azul
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

