import React, { useState } from 'react';

const Location = () => {
  const [activeTab, setActiveTab] = useState('location');

  const contactInfo = {
    address: "Gali 1, Bhagvati Colony, Sector A, Near PWD Office, Main High Court Road, Ratanada, Jodhpur, Rajasthan 342001",
    phone: "+91 95092 80086",
    email: "hello@bhoothnath.restaurant",
    hours: {
      weekdays: "11:00 AM - 11:00 PM",
      weekends: "10:30 AM - 11:30 PM"
    }
  };

  const landmarks = [
    { name: "PWD Office", distance: "50m", icon: "🏢" },
    { name: "High Court Road", distance: "100m", icon: "🏛️" },
    { name: "Ratanada Circle", distance: "200m", icon: "🚦" },
    { name: "Jodhpur Railway Station", distance: "3.5 km", icon: "🚂" }
  ];

  return (
    <section id="location" className="relative py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-amber-800/15"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Premium Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-amber-600/20 backdrop-blur-sm border border-amber-400/30 rounded-full text-amber-200 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
            VISIT OUR RESTAURANT
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-4 text-amber-100">
          Find <span className="text-amber-400">Us</span>
        </h2>
        
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-32"></div>
          <div className="mx-4 text-amber-400">✦</div>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-32"></div>
        </div>

        <p className="text-center mb-12 text-amber-200/80 text-lg max-w-2xl mx-auto">
          Located in the heart of Ratanada, Jodhpur - easily accessible and close to major landmarks.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 flex-wrap gap-3">
          {['location', 'contact', 'directions'].map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)} 
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                activeTab === tab 
                ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-gray-900 shadow-lg shadow-amber-400/25' 
                : 'bg-gray-800/50 border border-amber-400/30 text-amber-200 hover:bg-amber-500/10 hover:border-amber-400/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'location' && (
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Map Section */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-400/20 rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.123456789!2d73.012345!3d26.278901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDE2JzQ0LjQiTiA3M8KwMDEnMTIuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%" 
                  height="400" 
                  className="border-0"
                  allowFullScreen=""
                  loading="lazy"
                  title="Bhoothnath Restaurant Location"
                />
              </div>

              {/* Location Details */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-6 shadow-2xl">
                  <h3 className="text-2xl font-serif font-bold text-amber-100 mb-4 flex items-center">
                    <svg className="w-6 h-6 text-amber-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Address
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {contactInfo.address}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-6 shadow-2xl">
                  <h3 className="text-2xl font-serif font-bold text-amber-100 mb-4 flex items-center">
                    <svg className="w-6 h-6 text-amber-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Nearby Landmarks
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {landmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-700/30 rounded-lg p-3">
                        <div className="flex items-center">
                          <span className="text-lg mr-2">{landmark.icon}</span>
                          <span className="text-gray-300 text-sm">{landmark.name}</span>
                        </div>
                        <span className="text-amber-400 text-xs font-semibold">{landmark.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Phone */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8 text-center shadow-2xl hover:shadow-amber-400/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-amber-100 mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-amber-400 hover:text-amber-300 transition">
                  {contactInfo.phone}
                </a>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8 text-center shadow-2xl hover:shadow-amber-400/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-amber-100 mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-amber-400 hover:text-amber-300 transition">
                  {contactInfo.email}
                </a>
              </div>

              {/* Hours */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8 text-center shadow-2xl hover:shadow-amber-400/10 transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-amber-100 mb-2">Opening Hours</h3>
                <div className="text-amber-400 space-y-1">
                  <p>Mon - Fri: {contactInfo.hours.weekdays}</p>
                  <p>Sat - Sun: {contactInfo.hours.weekends}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'directions' && (
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold text-amber-100 mb-6 text-center">How to Reach Us</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-amber-300 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    By Car/Taxi
                  </h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Take High Court Road towards Ratanada</li>
                    <li>• Look for PWD Office landmark</li>
                    <li>• Turn into Bhagvati Colony, Sector A</li>
                    <li>• Restaurant is in Gali 1</li>
                    <li>• Parking available nearby</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-amber-300 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-amber-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                    Public Transport
                  </h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Auto-rickshaw from Railway Station (₹50-70)</li>
                    <li>• City bus routes 12, 15, 18 stop nearby</li>
                    <li>• Ratanada Circle is 200m walking distance</li>
                    <li>• Local taxi/cab services available</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-500/10 border border-amber-400/30 rounded-lg">
                <p className="text-amber-200 text-sm text-center">
                  <strong>Pro Tip:</strong> Call us at {contactInfo.phone} if you need directions or can't find us!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Location;
