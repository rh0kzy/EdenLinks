# Eden Magazine - Linktree Website

A beautiful, responsive Linktree-style website for Eden Magazine with admin panel functionality.

## Features

### ✨ Core Features
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between dark and light modes with persistent storage
- **Social Media Integration**: Links to all major social platforms
- **Animated Interactions**: Smooth hover effects and loading animations
- **Admin Panel**: Easy-to-use interface for managing content

### 🎨 Design Features
- Modern gradient design with beautiful card layouts
- Category-based color coding for different types of links
- Interactive ripple effects on buttons
- Parallax mouse effects on profile image
- Smooth animations and transitions

### 🔧 Admin Features
- **Profile Management**: Update magazine name, bio, and profile image
- **Link Management**: Add, edit, and delete links with custom icons
- **Social Media**: Update all social media links
- **Real-time Updates**: Changes appear immediately on the page
- **Local Storage**: All changes are saved locally in the browser

## Quick Start

1. **Download or Clone**: Save all files to your project folder
2. **Open**: Open `index.html` in any web browser
3. **Customize**: Click the gear icon (⚙️) to open the admin panel
4. **Deploy**: Upload to any web hosting service

## File Structure

```
EdenLinks/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization Guide

### 🎯 Quick Customization

#### Change Magazine Name and Bio
1. Click the gear icon (⚙️) in the bottom right
2. Update "Magazine Name" and "Bio description"
3. Changes save automatically

#### Add New Links
1. Open the admin panel
2. Fill in the "Add New Link" section:
   - **Title**: Display name for the link
   - **Description**: Brief description
   - **URL**: Full URL (https://...)
   - **Icon**: Choose from dropdown menu
3. Click "Add Link"

#### Update Social Media
1. In the admin panel, scroll to "Social Media Links"
2. Enter your social media URLs
3. Click "Update Social Links"

### 🎨 Advanced Customization

#### Change Colors
Edit `styles.css` and modify the CSS variables in `:root`:

```css
:root {
    --primary-color: #4CAF50;        /* Main brand color */
    --secondary-color: #45a049;      /* Hover color */
    --background-color: #f8f9fa;     /* Page background */
    --card-background: #ffffff;      /* Card background */
}
```

#### Add Custom Categories
In `script.js`, you can add new link categories with custom styling:

```javascript
// Add to linksData array
{
    title: "Your Link Title",
    description: "Your description",
    url: "https://your-url.com",
    icon: "fas fa-your-icon",
    category: "your-category"
}
```

Then add CSS styling for the category:
```css
.link-item[data-category="your-category"] {
    border-left: 4px solid #YOUR_COLOR;
}
```

## Default Links Included

The website comes with these pre-configured links (all pointing to example.com):

1. **Latest Issue** - Newest magazine edition
2. **Shop Merchandise** - Online store
3. **Subscribe** - Premium subscription
4. **Magazine Archive** - Past issues
5. **Blog** - Daily articles
6. **Newsletter** - Email signup
7. **Upcoming Events** - Workshops and meetups
8. **Contact Us** - Contact information

## Admin Panel Access

- **Visual Access**: Click the gear icon (⚙️) in the bottom right
- **Keyboard Shortcut**: `Ctrl + Shift + A`
- **Close**: Click the X button or press `Escape`

## Features in Detail

### 🌙 Theme System
- Automatic theme persistence using localStorage
- Smooth transitions between themes
- System preference detection

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface

### 🎯 Link Management
- Drag-and-drop reordering (future feature)
- Click tracking for analytics
- Custom icons from FontAwesome
- Category-based organization

### 🔒 Data Storage
All customizations are stored locally in your browser using localStorage:
- Profile information
- Custom links
- Social media URLs
- Theme preference

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Deployment Options

### Free Hosting Services
1. **GitHub Pages**: Upload to a GitHub repository
2. **Netlify**: Drag and drop the folder
3. **Vercel**: Connect your GitHub repository
4. **Firebase Hosting**: Use Firebase CLI

### Traditional Hosting
Upload all files to your web hosting provider's public folder (usually `public_html` or `www`).

## Analytics Integration

To track link clicks, uncomment and configure the analytics code in `script.js`:

```javascript
// Google Analytics example
gtag('event', 'click', {
    event_category: 'outbound',
    event_label: linkTitle
});
```

## Performance Features

- Lazy loading for images
- Optimized animations
- Minimal external dependencies
- Compressed assets

## Security Notes

- All data is stored locally (no external database)
- No user authentication required
- HTTPS recommended for production use

## Support

For technical support or feature requests:
1. Check the browser console for error messages
2. Ensure all files are in the same directory
3. Verify that JavaScript is enabled in your browser

## License

This project is open source and available under the MIT License.

## Credits

- **Icons**: FontAwesome (via CDN)
- **Fonts**: System fonts for optimal performance
- **Design**: Custom responsive design

---

**Made with ❤️ for Eden Magazine**

*Last updated: September 2025*
