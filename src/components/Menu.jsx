import React, { useState } from 'react';

const menuData = {
  Thalis: [
    { 
      name: 'Student Thali', 
      price: '₹150', 
      desc: 'Aloo Sabzi + Dal Fry + Rice + 5 Butter Roti + Achar + Salad', 
      img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&auto=format'
    },
    { 
      name: 'Normal Thali', 
      price: '₹199', 
      desc: 'Paneer Sabzi + Dal Fry + Rice + Raita + 5 Butter Roti + Achar + Papad + Salad', 
      img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&auto=format'
    },
    { 
      name: 'Bhootnath Special Thali', 
      price: '₹279', 
      desc: 'Paneer Sabzi + Sev Tamatar + Dal Fry + Rice + Raita + Gulab Jamun + 5 Butter Roti + Achar + Papad + Salad', 
      img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&auto=format'
    },
    { 
      name: 'Royal Rajasthani Thali', 
      price: '₹399', 
      desc: 'Dal Baati Churma + Gatte Ki Sabzi + Ker Sangri + Rice + Buttermilk + 6 Roti + Pickles + Sweets', 
      img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop&auto=format'
    },
    { 
      name: 'Premium Feast Thali', 
      price: '₹499', 
      desc: 'Paneer Makhani + Chole + Dal Makhani + Jeera Rice + Naan + Raita + Gulab Jamun + Kulfi', 
      img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop&auto=format'
    },
    { 
      name: 'Family Thali (for 2)', 
      price: '₹799', 
      desc: 'Assorted Sabzis + Dal + Rice + 10 Rotis + Raita + Papad + Pickles + Dessert', 
      img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop&auto=format'
    }
  ],
  Starters: [
    { 
      name: 'Paneer Tikka', 
      price: '₹180', 
      desc: 'Cottage cheese marinated in spices and grilled to perfection', 
      img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop&auto=format'
    },
  ],
  Desserts: [
    { 
      name: 'Gulab Jamun', 
      price: '₹80', 
      desc: 'Traditional milk dumplings in rose flavored syrup', 
      img: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop&auto=format'
    },
  ]
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('Thalis');
  return (
    <section id="menu" className="relative py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
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
            PREMIUM MENU COLLECTION
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-4 text-amber-100">
          Our <span className="text-amber-400">Menu</span>
        </h2>
        
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-32"></div>
          <div className="mx-4 text-amber-400">✦</div>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-32"></div>
        </div>

        <p className="text-center mb-12 text-amber-200/80 text-lg max-w-2xl mx-auto">Authentic Rajasthani flavors crafted with royal traditions. Prices in INR, subject to seasonal availability.</p>
        
        {/* Premium Tab Navigation */}
        <div className="flex justify-center mb-12 flex-wrap gap-3">
          {Object.keys(menuData).map(cat => (
            <button 
              key={cat} 
              onClick={() => setActiveTab(cat)} 
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === cat 
                ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-gray-900 shadow-lg shadow-amber-400/25' 
                : 'bg-gray-800/50 border border-amber-400/30 text-amber-200 hover:bg-amber-500/10 hover:border-amber-400/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData[activeTab].map((dish, i) => (
            <div key={i} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-400/20 rounded-2xl shadow-2xl overflow-hidden hover:shadow-amber-400/10 hover:border-amber-400/40 transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={dish.img || 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&auto=format'} 
                  alt={dish.name} 
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-amber-400/90 text-gray-900 text-sm font-bold rounded-full shadow-lg">
                    {dish.price}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-amber-100 mb-3 group-hover:text-amber-300 transition-colors">
                  {dish.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {dish.desc}
                </p>
                
                {/* Premium Action Button */}
                <button className="w-full px-4 py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/30 text-amber-200 font-semibold rounded-full hover:from-amber-400/30 hover:to-yellow-400/30 hover:border-amber-400/50 transition-all duration-300 group-hover:shadow-md">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;