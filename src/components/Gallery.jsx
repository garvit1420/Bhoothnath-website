import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryData = {
    "Signature Dishes": [
      {
        src: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&h=400&fit=crop&auto=format',
        title: 'Dal Bati Churma',
        desc: 'Traditional Rajasthani delicacy - our signature dish'
      },
      {
        src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&h=400&fit=crop&auto=format',
        title: 'Royal Thali',
        desc: 'Complete vegetarian feast with authentic flavors'
      },
      {
        src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=400&fit=crop&auto=format',
        title: 'Gatte Ki Sabzi',
        desc: 'Rajasthani gram flour dumplings in spicy curry'
      }
    ],
    "Street Food": [
      {
        src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=400&fit=crop&auto=format',
        title: 'Kachori',
        desc: 'Crispy deep-fried pastry with spicy filling'
      },
      {
        src: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&h=400&fit=crop&auto=format',
        title: 'Mirchi Bada',
        desc: 'Jodhpur famous spicy chili fritters'
      },
      {
        src: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&h=400&fit=crop&auto=format',
        title: 'Pyaaz Kachori',
        desc: 'Onion stuffed crispy kachori with chutneys'
      }
    ],
    "Sweets": [
      {
        src: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=500&h=400&fit=crop&auto=format',
        title: 'Gulab Jamun',
        desc: 'Soft milk dumplings in rose flavored syrup'
      },
      {
        src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=400&fit=crop&auto=format',
        title: 'Malpua',
        desc: 'Traditional sweet pancakes with rabri'
      },
      {
        src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop&auto=format',
        title: 'Ghevar',
        desc: 'Rajasthani honeycomb sweet delicacy'
      }
    ],
    "Restaurant Ambiance": [
      {
        src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=400&fit=crop&auto=format',
        title: 'Traditional Seating',
        desc: 'Authentic Rajasthani dining experience'
      },
      {
        src: 'https://images.unsplash.com/photo-1552566342-d6513b297357?w=500&h=400&fit=crop&auto=format',
        title: 'Royal Interior',
        desc: 'Premium dining with traditional decor'
      },
      {
        src: 'https://images.unsplash.com/photo-1559329007-40df8eb9b50b?w=500&h=400&fit=crop&auto=format',
        title: 'Kitchen Heritage',
        desc: 'Traditional cooking methods preserved'
      }
    ]
  };

  const [activeTab, setActiveTab] = useState('Signature Dishes');
  const allImages = Object.values(galleryData).flat();

  return (
    <section id="gallery" className="relative py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
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
            AUTHENTIC JODHPUR CUISINE
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-4 text-amber-100">
          Food <span className="text-amber-400">Gallery</span>
        </h2>
        
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-32"></div>
          <div className="mx-4 text-amber-400">✦</div>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-32"></div>
        </div>

        <p className="text-center mb-12 text-amber-200/80 text-lg max-w-2xl mx-auto">
          Experience the authentic flavors of Rajasthan through our carefully curated collection of traditional dishes and restaurant ambiance.
        </p>
        
        {/* Premium Tab Navigation */}
        <div className="flex justify-center mb-12 flex-wrap gap-3">
          {Object.keys(galleryData).map(category => (
            <button 
              key={category} 
              onClick={() => setActiveTab(category)} 
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category 
                ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-gray-900 shadow-lg shadow-amber-400/25' 
                : 'bg-gray-800/50 border border-amber-400/30 text-amber-200 hover:bg-amber-500/10 hover:border-amber-400/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData[activeTab].map((item, i) => (
            <div 
              key={i} 
              className="group cursor-pointer bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-400/20 rounded-2xl shadow-2xl overflow-hidden hover:shadow-amber-400/10 hover:border-amber-400/40 transition-all duration-500 hover:-translate-y-2"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif font-bold text-amber-100 mb-2 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-amber-400/90 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zm-2 9a4 4 0 004-4v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a4 4 0 004 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Image Preview */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-amber-400/90 rounded-full flex items-center justify-center text-gray-900 hover:bg-amber-500 transition z-10"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="w-full h-auto max-h-[70vh] object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-amber-100 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedImage.desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;