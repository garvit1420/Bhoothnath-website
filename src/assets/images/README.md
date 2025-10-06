# Bhoothnath Restaurant Images

## 🎯 How to Change Hero Background Image (SUPER EASY!)

### ⚡ Quick Change Method:
**Open `index.js` file in this folder and change this single line:**

```javascript
// Line 18 - Change this to switch background instantly
export const CURRENT_HERO_BACKGROUND = heroBackgrounds.main;
```

**Change to any of these options:**
```javascript
export const CURRENT_HERO_BACKGROUND = heroBackgrounds.main;        // Current restaurant
export const CURRENT_HERO_BACKGROUND = heroBackgrounds.alt1;        // Alternative 1
export const CURRENT_HERO_BACKGROUND = heroBackgrounds.alt2;        // Alternative 2  
export const CURRENT_HERO_BACKGROUND = heroBackgrounds.traditional; // Traditional Indian
export const CURRENT_HERO_BACKGROUND = heroBackgrounds.elegant;     // Elegant dining
```

### 🔥 Add Your Own Image:

**Method 1: Add URL**
```javascript
// Add your image URL to heroBackgrounds object
bhoothnath: "YOUR_BHOOTHNATH_RESTAURANT_IMAGE_URL_HERE",

// Then use it
export const CURRENT_HERO_BACKGROUND = heroBackgrounds.bhoothnath;
```

**Method 2: Local Image File**
1. Put your image in this folder: `src/assets/images/bhoothnath-bg.jpg`
2. Import it in `index.js`:
```javascript
import bhoothnathImage from './bhoothnath-bg.jpg';
export const CURRENT_HERO_BACKGROUND = bhoothnathImage;
```

### 📸 Image Requirements:
- **Size**: 1920x1080 or higher
- **Format**: JPG, PNG, WebP
- **Style**: Restaurant interiors work best
- **Lighting**: Darker images show text better

### 🎨 Current Available Images:
- **main**: Elegant restaurant interior
- **alt1**: Modern dining space  
- **alt2**: Cozy restaurant atmosphere
- **traditional**: Indian restaurant style
- **elegant**: Fine dining setting

**Just change ONE line in `index.js` and your background changes instantly!** 🚀