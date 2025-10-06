# Bhoothnath Restaurant Images

## How to Change the Hero Background Image

### Method 1: Replace with your own image file
1. Add your Bhoothnath restaurant image to this folder (`src/assets/images/`)
2. Name it something like `bhoothnath-restaurant.jpg` or `hero-bg.jpg`
3. Open `index.js` in this folder
4. Update the `main` property in `heroBackgrounds` to import your local image:

```javascript
// Instead of URL, use local import
import bhoothnathImage from './bhoothnath-restaurant.jpg';

export const heroBackgrounds = {
  main: bhoothnathImage,
  // ... rest of the code
};
```

### Method 2: Change the image URL
1. Open `index.js` in this folder
2. Replace the URL in `heroBackgrounds.main` with your new image URL
3. The image will automatically update in the Hero section

### Current Images:
- **Main Hero Background**: Restaurant interior with elegant ambiance
- **Alternative Options**: Available in the `heroBackgrounds` object

### Image Requirements:
- **Recommended Size**: 1920x1080 or higher
- **Format**: JPG, PNG, or WebP
- **Aspect Ratio**: 16:9 (landscape)
- **Quality**: High resolution for crisp display

### Tips:
- Choose images with good contrast areas for text overlay
- Darker images work better with the current amber text styling
- Restaurant interior or food images create the best atmosphere