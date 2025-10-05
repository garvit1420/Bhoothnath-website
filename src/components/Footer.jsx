
import React from 'react';

const Footer = () => (
  <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden text-gray-100">
    <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-amber-800/30"></div>
    <div className="container mx-auto px-6 py-16 relative z-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        {/* Brand / About */}
        <div className="max-w-md">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">B</div>
            <div>
              <h3 className="text-2xl font-serif font-bold leading-tight">Bhoothnath</h3>
              <p className="text-sm text-amber-200">Premium Vegetarian Restaurant</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Experience royal Rajasthani cuisine crafted from seasonal, locally-sourced ingredients and time-honored recipes.
          </p>

          <div className="mt-6 flex items-center space-x-3">
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12.07C22 6.49 17.52 2 11.94 2S1.88 6.49 1.88 12.07C1.88 17.06 5.81 21.15 10.58 21.93v-7.13H8.07v-2.73h2.51V9.41c0-2.48 1.48-3.85 3.74-3.85 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.62.77-1.62 1.56v1.88h2.77l-.44 2.73h-2.33v7.13C18.19 21.15 22 17.06 22 12.07z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.4-.9a1.12 1.12 0 1 1-1.12-1.12A1.12 1.12 0 0 1 18.4 7.3zM12 9.6A2.4 2.4 0 1 1 9.6 12 2.4 2.4 0 0 1 12 9.6z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 5.92c-.63.28-1.3.46-2 .55a3.48 3.48 0 0 0 1.53-1.92 6.93 6.93 0 0 1-2.2.84 3.46 3.46 0 0 0-5.9 3.15A9.82 9.82 0 0 1 3.2 4.87a3.46 3.46 0 0 0 1.07 4.62 3.4 3.4 0 0 1-1.57-.43v.04a3.47 3.47 0 0 0 2.77 3.4c-.5.14-1.02.17-1.56.06a3.47 3.47 0 0 0 3.23 2.41A6.95 6.95 0 0 1 2 19.54a9.8 9.8 0 0 0 5.3 1.55c6.36 0 9.85-5.27 9.85-9.84v-.45A7 7 0 0 0 22 5.92z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links / Contact / Hours */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-1">
          <div>
            <h4 className="text-sm font-semibold text-amber-200 mb-3">Explore</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-amber-300">Home</a></li>
              <li><a href="/menu" className="hover:text-amber-300">Menu</a></li>
              <li><a href="/gallery" className="hover:text-amber-300">Gallery</a></li>
              <li><a href="/reviews" className="hover:text-amber-300">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-amber-200 mb-3">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="text-sm">📍 12 Blue City Lane, Jodhpur</li>
              <li className="text-sm">📞 <a href="tel:+911234567890" className="hover:text-amber-300">+91 12345 67890</a></li>
              <li className="text-sm">✉️ <a href="mailto:hello@bhoothnath.example" className="hover:text-amber-300">hello@bhoothnath.example</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-amber-200 mb-3">Hours</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Mon - Fri: 11:00 AM — 10:30 PM</li>
              <li>Sat - Sun: 10:30 AM — 11:30 PM</li>
              <li className="text-gray-400">Private dining & events by appointment</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter / Bottom */}
      <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-3 max-w-md w-full">
          <label htmlFor="footer-email" className="sr-only">Email address</label>
          <input id="footer-email" type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-full bg-white/5 placeholder-gray-300 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400" />
          <button type="submit" className="px-5 py-3 bg-amber-400 text-gray-900 font-semibold rounded-full hover:bg-amber-500 transition">Subscribe</button>
        </form>

        <div className="text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Bhoothnath Restaurant. All rights reserved.</p>
          <p className="mt-1">Designed with care • <a href="/privacy" className="hover:text-amber-300">Privacy</a> • <a href="/terms" className="hover:text-amber-300">Terms</a></p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

