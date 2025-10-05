import React, { useState, useEffect } from 'react';

const reviews = [
  {
    quote: "Can't describe how good this experience was. The paneer sabji included in their thali was the best thing I've tried in India so far. So authentic and unpretentious, a little gem I'm so glad I discovered.",
    stars: 5,
    reviewer: "Vittoria Lapomarda",
    date: "Recent",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b3e4?w=300&h=300&fit=crop&auto=format",
    alt: "Smiling woman enjoying paneer dish at Indian restaurant"
  },
  {
    quote: "We absolutely loved our meal here and will return without a doubt. A very friendly atmosphere and made to feel very welcome. Our best meal in India so far.",
    stars: 5,
    reviewer: "Adam Whitehead",
    date: "Recent",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop&auto=format",
    alt: "Happy group of friends sharing Indian thali"
  },
  {
    quote: "Best place in Jodhpur—must try Indian & Chinese food. Highly recommend kadhai paneer & malai kofta. Menu is all vegetarian!",
    stars: 5,
    reviewer: "Shivam Gupta",
    date: "10 months ago",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&auto=format",
    alt: "Family laughing over vegetarian curry meal"
  },
  {
    quote: "Good food with adequate quantity. Great value for money in Ratanada.",
    stars: 4,
    reviewer: "Brahmanand",
    date: "Mar 27, 2024",
    img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=300&h=300&fit=crop&auto=format",
    alt: "Customer savoring spicy Indian vegetarian platter"
  },
  {
    quote: "Our favourite restaurant in Jodhpur by far! Food is honestly so amazing and prices are very cheap. We went twice and have found nowhere as good.",
    stars: 5,
    reviewer: "Anonymous Traveler",
    date: "Recent",
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=300&h=300&fit=crop&auto=format",
    alt: "Diverse group toasting with Indian dishes"
  },
  {
    quote: "My experience was exceptional! Reasonably priced menu with generous portions and great value. The ambiance with live music created a vibrant atmosphere.",
    stars: 5,
    reviewer: "Local Foodie",
    date: "Recent",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&auto=format",
    alt: "Happy diners with fresh vegetarian naan and curry"
  },
  {
    quote: "Their normal thali was good, but the spicy dishes really stood out. As someone who loves spice, the variety was delightful with just the right kick.",
    stars: 4.5,
    reviewer: "Spice Lover",
    date: "Recent",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&auto=format",
    alt: "Individual smiling at spicy Indian vegetarian food"
  },
  {
    quote: "Exceptional vegetarian spot—thalis are a must! Affordable, tasty, and welcoming for families.",
    stars: 5,
    reviewer: "Family Diner",
    date: "Recent",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&h=300&fit=crop&auto=format",
    alt: "Family enjoying traditional Indian thali together"
  },
  {
    quote: "I haven't eaten such delicious food anywhere in Jodhpur! The dal bati churma was absolutely amazing. Got the exact taste of home-cooked food here.",
    stars: 5,
    reviewer: "Rajesh Sharma",
    date: "2 weeks ago",
    img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=300&h=300&fit=crop&auto=format",
    alt: "Happy Indian customer enjoying traditional meal"
  },
  {
    quote: "Very happy after eating at Bhoothnath Restaurant. The taste of paneer sabzi and gatte ki sabzi here is excellent. Our whole family was satisfied with the meal.",
    stars: 5,
    reviewer: "Sunita Devi",
    date: "1 month ago",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&auto=format",
    alt: "Satisfied Indian woman customer"
  },
  {
    quote: "Best Rajasthani food in Ratanada area! The kachori and mirchi bada were amazing. Staff is also very good. This is definitely a value for money restaurant.",
    stars: 4.5,
    reviewer: "Amit Gupta",
    date: "3 weeks ago",
    img: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=300&h=300&fit=crop&auto=format",
    alt: "Young Indian male customer"
  },
  {
    quote: "Had dinner here with our friends. All dishes were fresh and tasty. Especially the dal fry and jeera rice were excellent. Will definitely visit again.",
    stars: 5,
    reviewer: "Priya Agarwal",
    date: "Recent",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&auto=format",
    alt: "Happy Indian woman with friends"
  },
  {
    quote: "Every tourist coming to Jodhpur should definitely visit here. You get authentic Marwari food here. Everything in the thali is in perfect quantity and taste is superb.",
    stars: 5,
    reviewer: "Manoj Kumar",
    date: "1 week ago",
    img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&auto=format",
    alt: "Satisfied middle-aged Indian customer"
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center justify-center gap-1 text-amber-400">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg className="w-5 h-5 text-amber-400" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="half-star">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
      </div>
    );
  };

  return (
    <section id="reviews" className="relative py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
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
            CUSTOMER TESTIMONIALS
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-4 text-amber-100">
          What Our <span className="text-amber-400">Guests Say</span>
        </h2>
        
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-32"></div>
          <div className="mx-4 text-amber-400">✦</div>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-32"></div>
        </div>

        {/* Rating Summary */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-8 py-4">
            <div className="text-4xl font-bold text-amber-400">4.9</div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                {renderStars(5)}
              </div>
              <div className="text-amber-200/80 text-sm">Based on 420+ reviews</div>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8 shadow-2xl">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Customer Image */}
                        <div className="flex-shrink-0">
                          <img 
                            src={review.img} 
                            alt={review.alt}
                            className="w-20 h-20 rounded-full object-cover border-3 border-amber-400/30 shadow-lg"
                          />
                        </div>
                        
                        {/* Review Content */}
                        <div className="flex-1 text-center md:text-left">
                          <div className="mb-4">
                            {renderStars(review.stars)}
                          </div>
                          
                          <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 italic">
                            "{review.quote}"
                          </blockquote>
                          
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <div>
                              <div className="text-amber-300 font-semibold text-lg">
                                {review.reviewer}
                              </div>
                              <div className="text-amber-200/60 text-sm">
                                {review.date}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={() => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-amber-500/20 hover:bg-amber-400/30 border border-amber-400/30 hover:border-amber-400/50 rounded-full flex items-center justify-center text-amber-200 hover:text-amber-100 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>

            <button 
              onClick={() => setCurrentIndex((prev) => (prev + 1) % reviews.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-amber-500/20 hover:bg-amber-400/30 border border-amber-400/30 hover:border-amber-400/50 rounded-full flex items-center justify-center text-amber-200 hover:text-amber-100 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-400 scale-125' 
                    : 'bg-amber-400/30 hover:bg-amber-400/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;