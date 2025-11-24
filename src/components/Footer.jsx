import React from 'react'

const Footer = () => {
  const areas = [
    'Miami-Dade',
    'Broward County',
    'Palm Beach County',
    'Monroe County'
  ]

  return (
    <footer className="footer border-t border-brand-purple/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-magenta-bright rounded-full blur-3xl"></div>
      </div>
      
      <div className="footer-inner relative z-10">
        {/* Left: Logo */}
        <div>
          <img 
            src="/Logo (1).png" 
            alt="Aspire Roofing Logo" 
            className="h-16 md:h-20 w-auto mb-4 mx-auto md:mx-0"
          />
          <p className="text-white/80 text-lg font-semibold">Aspire For More</p>
        </div>

        {/* Middle: Areas */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Areas we are servicing:</h3>
          <ul className="space-y-4">
            {areas.map((area, index) => (
              <li key={index} className="flex items-center justify-center md:justify-start text-white/90 hover:text-purple-light transition-colors group">
                <svg className="w-5 h-5 text-magenta-bright mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">{area}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact */}
        <div className="footer-cta">
          <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Call for a Free Estimate</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start text-white/90 group">
              <svg className="w-6 h-6 text-magenta-bright mr-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:7868536098" className="hover:text-magenta-bright transition-colors font-semibold text-lg">
                786-853-6098
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start text-white/90 group">
              <svg className="w-6 h-6 text-magenta-bright mr-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:estimates@aspireroofing.com" className="hover:text-magenta-bright transition-colors font-semibold">
                estimates@aspireroofing.com
              </a>
            </div>
          </div>
        </div>

        {/* Fourth Column: Copyright */}
        <div className="col-span-full mt-8 pt-8 border-t border-white/10 flex flex-col items-center justify-center text-center">
          <p className="text-white/60">&copy; {new Date().getFullYear()} Aspire Roofing. All rights reserved.</p>
          <p className="text-white/50 mt-2">
            by{' '}
            <a 
              href="https://azulwebdev.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-magenta-bright hover:text-magenta-accent transition-colors font-semibold underline decoration-2 underline-offset-2 hover:decoration-magenta-accent"
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

