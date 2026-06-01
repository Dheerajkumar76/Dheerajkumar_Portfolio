# Dheerajkumar's Retro 90s Portfolio

A production-ready personal portfolio website with a retro 90s game aesthetic, built with vanilla HTML, CSS, and JavaScript.

## 📁 Project Structure

```
portfolio/
├── index.html           # Main HTML file
├── style.css            # Styling with retro theme
├── script.js            # Interactive features
├── assets/              # Folder for your resume and images
│   └── Dheeraj_Resume.pdf  # Add your resume here
└── README.md            # This file
```

## 🚀 Quick Start - Running Locally

### Option 1: Using VS Code Live Server

1. **Install Live Server Extension**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server" by Ritwick Dey
   - Click Install

2. **Launch the Portfolio**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your browser will open at `http://localhost:5500`

### Option 2: Using Python (Simple HTTP Server)

**Python 3:**
```bash
cd path/to/portfolio
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

**Python 2:**
```bash
cd path/to/portfolio
python -m SimpleHTTPServer 8000
```

### Option 3: Using Node.js (http-server)

```bash
# Install globally (one time)
npm install -g http-server

# Run from portfolio directory
http-server

# Visit http://localhost:8080
```

### Option 4: Direct File Opening

Simply open `index.html` directly in your browser (limited functionality for local resume downloads).

## 📱 Features

✓ **Retro 90s Aesthetic** - Pixel art borders, CRT scanlines, neon colors
✓ **Dark/Light Theme Toggle** - Preferences saved to browser
✓ **Responsive Design** - Desktop, tablet, and mobile optimized
✓ **Smooth Navigation** - Sticky navbar with active section highlighting
✓ **Semantic HTML** - Accessible and SEO-friendly
✓ **No External Dependencies** - Pure HTML, CSS, JavaScript
✓ **Performance Optimized** - Fast loading, lightweight
✓ **Mobile Menu** - Hamburger menu for small screens

## ⚙️ Customization Guide

### 1. Add Your Resume

1. Save your resume as `Dheeraj_Resume.pdf` (or any PDF name)
2. Place it in the `assets/` folder
3. Update the resume link in `index.html`:

```html
<!-- Find this line (around line 45) -->
<a href="assets/Dheeraj_Resume.pdf" class="btn btn-secondary" download>DOWNLOAD RESUME</a>

<!-- Update the file path if needed -->
<a href="assets/YOUR_RESUME_FILENAME.pdf" class="btn btn-secondary" download>DOWNLOAD RESUME</a>
```

### 2. Add GitHub Link

Find and replace `YOUR_GITHUB_LINK_HERE` with your GitHub username or profile URL:

**In index.html:**
- Line 66: GitHub social link in hero
- Line 282: GitHub contact link

Example: `https://github.com/yourusername`

### 3. Add LinkedIn Link

Find and replace `YOUR_LINKEDIN_LINK_HERE` with your LinkedIn profile URL:

**In index.html:**
- Line 71: LinkedIn social link in hero
- Line 286: LinkedIn contact link

Example: `https://linkedin.com/in/yourprofile`

### 4. Update Your Email

The email `dheeraj94187@gmail.com` is already set throughout the site. To change it, find and replace all occurrences in `index.html`.

### 5. Customize Colors (Advanced)

Edit the CSS variables at the top of `style.css`:

```css
:root {
    --accent-primary: #00d9ff;      /* Cyan */
    --accent-secondary: #ff006e;    /* Pink */
    --accent-tertiary: #00ff41;     /* Green */
    /* ...other colors... */
}
```

### 6. Update Content

All text content is directly in `index.html`. Edit sections to customize:

- **Hero Section** (lines 38-66): Main intro and CTA
- **About** (lines 86-115): About me section
- **Projects** (lines 189-275): Project descriptions
- **Skills** (lines 137-186): Skill levels
- **Education** (lines 299-335): Education details
- **Certifications** (lines 349-380): Certification list

## 🌐 Deployment

### Deploy to GitHub Pages (Free & Recommended)

1. **Create a GitHub Repository**
   - Go to github.com and create a new repository named `yourusername.github.io`
   - Choose "Public"

2. **Push Your Code to GitHub**
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Select "Deploy from a branch"
   - Branch: Select "main" and "/(root)"
   - Save
   - Your site will be live at `https://yourusername.github.io`

### Deploy to Netlify

1. **Push to GitHub** (if not already done)

2. **Connect to Netlify**
   - Go to netlify.com and sign up
   - Click "New site from Git"
   - Connect your GitHub repository
   - Select the `yourusername.github.io` repo
   - Click Deploy

3. **Your site is live!**
   - Netlify will auto-deploy on every push

### Deploy to Vercel

1. **Push to GitHub** (if not already done)

2. **Connect to Vercel**
   - Go to vercel.com and sign up
   - Click "New Project"
   - Import your GitHub repository
   - Deploy

3. **Your site is live!**
   - Vercel provides a custom domain

## 🔧 Browser Support

- Chrome/Edge: ✓ Full support
- Firefox: ✓ Full support
- Safari: ✓ Full support
- Mobile browsers: ✓ Responsive & optimized

## ♿ Accessibility

- ✓ Semantic HTML structure
- ✓ ARIA labels on interactive elements
- ✓ High contrast color scheme
- ✓ Keyboard navigation support
- ✓ Respects `prefers-reduced-motion`

## 📝 Customization Checklist

Before going live, make sure to update:

- [ ] Your resume PDF in `assets/Dheeraj_Resume.pdf`
- [ ] GitHub link (replace `YOUR_GITHUB_LINK_HERE`)
- [ ] LinkedIn link (replace `YOUR_LINKEDIN_LINK_HERE`)
- [ ] Email address (currently `dheeraj94187@gmail.com`)
- [ ] Check all project descriptions are accurate
- [ ] Verify all links work correctly
- [ ] Test on mobile devices
- [ ] Test theme toggle (dark/light mode)
- [ ] Check that skills section looks good
- [ ] Verify social media links work

## 🎨 Design Highlights

- **Hero Section**: Eye-catching with CRT scanlines and pixel frames
- **Skill Tree**: Game-inspired skill bars with gradient fills
- **Project Cards**: Hover effects with animated top border
- **Timeline Education**: Visual progression with gradient line
- **Responsive Grid**: Auto-adjusting layout for all screen sizes
- **Smooth Animations**: Tasteful transitions respecting motion preferences

## 🐛 Troubleshooting

**Resume download not working:**
- Ensure the PDF file exists in the `assets/` folder
- Check the file path in `index.html` matches your file name

**Links not working:**
- Make sure you've replaced placeholder links with actual URLs
- For GitHub and LinkedIn, use full profile URLs

**Theme not saving:**
- Check if localStorage is enabled in your browser
- Clear browser cache if issues persist

**Mobile menu not showing:**
- This is expected on desktop. Resize window to < 768px to see hamburger menu

## 💡 Tips

- **SEO**: The site is optimized with semantic HTML and proper meta tags
- **Performance**: No heavy frameworks = fast loading times
- **Editing**: All content is in `index.html` - easy to update
- **Styling**: All CSS is in `style.css` - organized and commented
- **JavaScript**: All interactive features are in `script.js` - clean and modular

## 📄 License

This portfolio template is provided as-is. Feel free to use and modify for your personal portfolio.

## 🎮 Easter Egg

Check the browser console (F12 → Console) for a fun message!

---

**Happy coding! 🚀**

For questions or updates, contact: dheeraj94187@gmail.com
