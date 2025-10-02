export default function Footer() {
  return (
    <footer className="border-t border-primary/10 mt-20" style={{ backgroundColor: '#1D3557' }}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">MokuSetu Group G.K.</h3>
            <p className="text-sm text-white leading-relaxed">
              Your trusted partner in innovation and excellence. Building the future together.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3 text-sm text-white">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@mokusetu.com" className="hover:text-primary transition-colors duration-300">
                  info@mokusetu.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+81-3-1234-5678" className="hover:text-primary transition-colors duration-300">
                  +81-3-1234-5678
                </a>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a 
                  href="https://maps.google.com/?q=6-50-10+Honchō,+Naka-ku,+Yokohama-shi,+Kanagawa-ken,+231-0005,+Japan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  View Location
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Location</h3>
            <div className="space-y-3 text-sm text-white">
              <div>
                <p className="font-medium text-white">Headquarters</p>
                <p>Yokohama, Kanagawa</p>
              </div>
              <div>
                <p className="font-medium text-white">Address</p>
                <p>6-50-10 Honchō, Naka-ku</p>
                <p>Yokohama-shi, Kanagawa-ken</p>
                <p>231-0005, Japan</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-3 text-sm">
              <a href="#about" className="block hover:text-primary transition-colors duration-300 text-white">About Us</a>
              <a href="#services" className="block hover:text-primary transition-colors duration-300 text-white">Services</a>
              <a href="#blog" className="block hover:text-primary transition-colors duration-300 text-white">Blog</a>
              <a href="#contact" className="block hover:text-primary transition-colors duration-300 text-white">Contact</a>
            </div>
          </div>
        </div>

         <div className="mb-12 opacity-50 border-t border-white"></div>

        <div className="border-t border-primary/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.linkedin.com/company/mokusetu-group" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center p-2 text-primary hover:text-white transition-all duration-300"
                  aria-label="Visit our LinkedIn page"
                >
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                </a>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-white">
              <a href="/privacy-policy" className="hover:text-primary transition-colors duration-300 font-medium">Privacy Policy</a>
              <a href="/terms-and-conditions" className="hover:text-primary transition-colors duration-300 font-medium">Terms and Conditions</a>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-primary/5">
            <p className="text-center text-sm text-white">
              © 2025 MokuSetu Group G.K. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


