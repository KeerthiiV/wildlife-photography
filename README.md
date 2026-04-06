# 🌿 Wildlife Photography Architecture & UI

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[![Live Demo](https://img.shields.io/badge/Live_Demo-🚀-brightgreen)](https://keerthiiv.github.io/wildlife-photography/)

A modern, responsive, and high-performance photography portfolio designed to showcase high-resolution wildlife imagery. This project focuses on **UI/UX principles**, **fluid layouts**, and **frontend optimization**.

## 🌍 Live Demo
🔗 **[Experience the Live Site Here](https://keerthiiv.github.io/wildlife-photography/)**

## 🚀 Key Features

- **Responsive Grid System:** Uses CSS Grid and Flexbox to ensure the gallery looks perfect on 4K monitors, tablets, and smartphones.
- **Optimized Asset Loading:** Implemented techniques to handle high-resolution images without sacrificing page load speed.
- **Interactive UI:** Smooth hover effects and transitions for an immersive user experience.
- **Clean Architecture:** Semantic HTML5 for better SEO and accessibility.

---

## 🖼️ Screenshots

### 🌄 Hero Section
![Hero Section](images/screenshot/hero.png)

### 📱 About Section
![About Section](images/screenshot/about.png)

### 🐾 Gallery Section
![Gallery Section](images/screenshot/gallery.png)

## 🛠️ Tech Stack & Tools
- **Framework:** Tailwind CSS (Utility-first styling)
- **Language:** HTML5, Modern JavaScript (ES6+)
- **Version Control:** Git/GitHub
- **Deployment:** GitHub Pages

## 🛠️ Technical Challenges & Solutions

### 1. The Aspect Ratio Problem
**Challenge:** Wildlife photos come in various sizes (Landscape vs. Portrait). A standard grid often crops images awkwardly.
**Solution:** Utilized the `object-fit: cover` property combined with `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` to create a masonry-style feel that maintains visual balance regardless of the image orientation.

### 2. Performance Optimization
**Challenge:** Loading multiple high-res photos can slow down a site significantly.
**Solution:** Optimized image assets and used CSS transitions instead of heavy JavaScript libraries to keep the "Lightweight" feel of the site.

---

## 📈 Future Roadmap

- [ ] Implement a **Lightbox** feature for full-screen image viewing.
- [ ] Add a **Python/Flask Backend** for a functional "Contact Me" and "Booking" system.
