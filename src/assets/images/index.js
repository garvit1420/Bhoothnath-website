// Image Assets for Bhoothnath Restaurant
// You can easily change these URLs to use your own images
import { SELECTED_BACKGROUND } from './background-config';

// Hero Section Background Images
export const heroBackgrounds = {
  // Main restaurant image - replace this URL with your Bhoothnath restaurant image
  main: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
  // Alternative restaurant images - you can switch between these
  alt1: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  alt2: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
  // Traditional Indian restaurant interior
  traditional: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
  // Elegant dining setting
  elegant: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

// Current active background - automatically picks from background-config.js
export const CURRENT_HERO_BACKGROUND = heroBackgrounds[SELECTED_BACKGROUND] || heroBackgrounds.main;

// Food Images for other components (if needed)
export const foodImages = {
  thali: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2070&auto=format&fit=crop",
  curry: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop",
  bread: "https://images.unsplash.com/photo-1574653853027-5a2d0d9dd4b4?q=80&w=2069&auto=format&fit=crop"
};

// Default export for main hero background
export default CURRENT_HERO_BACKGROUND;