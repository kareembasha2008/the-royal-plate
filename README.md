# THE ROYAL PLATE — Haute Regal Cuisine
> **Tagline:** Fresh Flavours. Royal Experience.  
> **Academic Project:** First-Year B.Tech Web Development Showcase  
> **Live Demo:** [https://kareembasha2008.github.io/the-royal-plate/](https://kareembasha2008.github.io/the-royal-plate/)

---

## 👑 About The Royal Plate

**THE ROYAL PLATE** is a premium, modern, and fully responsive fine-dining restaurant website inspired by the royal culinary heritage of Awadh, Rajasthan, and the Mughal courts. 

Built entirely using **semantic HTML5, modern CSS3, and vanilla JavaScript (ES6+)**, this project demonstrates high-end commercial frontend architecture without any external frameworks, paid APIs, or backend dependencies.

---

## ✨ Key Features & Architectural Highlights

1. **Regal Brand Identity & Aesthetic:**
   - **Theme:** Luxury Obsidian Black (`#07080b`), Imperial Gold gradients (`#f5e2a3` to `#d4af37`), and Warm Ivory typography (`#fbf8f0`).
   - **Typography:** Classic Google Fonts pairing `Cinzel` & `Playfair Display` serif headings with `Plus Jakarta Sans` body typography.
   - **Depth & Polish:** Glassmorphism headers (`backdrop-filter`), multi-tiered shadows, rounded cards (`12px–20px`), and gold shimmer keyframe animations.

2. **Full Section Structure:**
   - **Navigation Bar:** Sticky blur header with crown crest, active scrollspy highlighting, reservation button, and an animated mobile drawer menu.
   - **Hero Section:** Full-screen presentation with dark vignette overlay, animated headlines, dual CTAs (*Explore Menu* & *Book a Table*), and live numbers counter (*25+ Years, 4.9★, 100% Authentic Spices, 18+ Master Chefs*).
   - **About Section:** Awadhi & Rajputana culinary narrative, 4 core pillars (*Dum Pukht, Heirloom Spices, Hospitality, Regal Ambience*), and master chef quote.
   - **Food Menu (18 Culinary Creations):**
     - Interactive category tabs (*All, Starters, Main Course, Biryani, Desserts, Beverages*).
     - Live keyword search bar with instant empty-state handling.
     - Veg / Non-Veg diet badges and Chef's Special badges.
     - **Quick-View Recipe Notes Modal:** Deep dive into dish history, preparation time, and chef secret techniques.
     - **"Select for Table" Feature:** Pre-loads selected dishes directly into your table reservation requests with instant toast notifications.
   - **Special Promotional Offers:**
     - 3 curated promotional packages (*The Royal Dastarkhwan Feast*, *Nawabi Biryani & Kebab Platter*, *Imperial Couple Candlelight Feast*).
     - 1-Click promo code copy buttons (`ROYALFAM25`, `WEEKENDROYAL`, `REGALLOVE20`) with clipboard feedback.
     - *"Claim Offer"* buttons that auto-populate party size and promo code into the booking form.
   - **Guest Reviews:** Testimonial cards with star ratings, quotes, verified patron badges, and clearly noted sample fictional guest profiles.
   - **Visual Gallery & Lightbox:** Responsive grid with category filtering (*All, Signature Dishes, Imperial Ambience, Kitchen Artistry*) and a full-screen Lightbox with Previous/Next controls and keyboard arrow navigation (`ArrowLeft` / `ArrowRight`).
   - **Table Reservation & Receipt Generator:**
     - Pure JavaScript validation (Full Name, RFC email, 10-digit mobile number, past date prevention, time slot, and guest size).
     - Simulated booking confirmation modal with randomized booking IDs (`TRP-2026-XXXX`).
     - Dedicated `@media print` stylesheet for printing clean reservation vouchers.
   - **Contact & Concierge:** Demo address, opening hours, interactive Google Maps embed, inquiry contact form, and social media links.
   - **Footer:** Brand accreditations, quick navigational links, newsletter form, and course academic project disclaimer.

3. **Performance & Reliability:**
   - **Zero Broken Images:** Window-level capturing image error fallback replaces any blocked image with an inline SVG royal crest placeholder.
   - **Fully Responsive:** Custom media queries tested across desktop (1440px+), tablet (768px–1024px), and small mobile screens (320px–480px).

---

## 📁 Repository Structure

```
the-royal-plate/
├── index.html        # Complete semantic HTML5 structure (all 10 sections)
├── style.css         # Custom CSS3 styling, variables, keyframes & media queries
├── script.js         # Vanilla JavaScript (ES6+) for filtering, modals & validation
├── server.js         # Zero-dependency local Node.js development server
└── README.md         # Documentation and project guide
```

---

## 🚀 How to Run Locally

### Option 1: Direct File Launch
Double click `index.html` or open it directly in any modern web browser.

### Option 2: Using the Included Node Server
```bash
node server.js
```
Then visit `http://localhost:3000` in your browser.

---

## 🎓 Academic Viva & Evaluation Notes

| Criterion | Implementation |
| :--- | :--- |
| **HTML5 Semantics** | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`, ARIA roles |
| **CSS3 Techniques** | Custom Properties (`:root`), Flexbox, CSS Grid, Glassmorphism, `@keyframes`, `@media print` |
| **JavaScript Concepts** | DOM API, `IntersectionObserver`, regex validation, Clipboard API, event delegation |
| **UX Standards** | Form validation with inline errors, toast notification alerts, modal management |

---

## 📜 License & Academic Notice

This project is created for educational and academic evaluation purposes in a First-Year B.Tech Web Development curriculum. "THE ROYAL PLATE" is a simulated fictional fine-dining establishment.
