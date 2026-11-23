/**
 * ==========================================================================
 * THE ROYAL PLATE - HAUTE REGAL CUISINE
 * Main JavaScript Application Script
 * Academic Project: First-Year B.Tech Web Development
 * ==========================================================================
 */

// Food database for Quick View modals & enriched details
const FOOD_CATALOG = {
  1: {
    name: "Shahi Galouti Kebab",
    category: "Starters • Lucknowi Royalty",
    price: "₹795",
    desc: "Created originally for the toothless Nawab Asad-ud-Daula of Awadh, these ultra-tender lamb patties are perfumed with 160 aromatic botanicals, smoked over live betel leaf coal, and melt instantly on the palate.",
    prep: "25 mins",
    style: "Awadhi Nawabi Durbar",
    secret: "Raw green papaya tenderizer & smoked clove infusion",
    img: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80",
    diet: "nonveg",
    special: "Chef's Pride"
  },
  2: {
    name: "Paneer Tikka Angara",
    category: "Starters • Tandoor Specialty",
    price: "₹595",
    desc: "Generous chunks of fresh malai paneer steeped in roasted mustard oil, hand-crushed yellow chillies, carom seeds, and hung yogurt, charred over blazing charcoal in our clay tandoor.",
    prep: "20 mins",
    style: "Royal Rajputana",
    secret: "Cold-pressed Kachi Ghani mustard marinade",
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&auto=format&fit=crop&q=80",
    diet: "veg",
    special: ""
  },
  3: {
    name: "Kakori Seekh Kebab",
    category: "Starters • Awadhi Heritage",
    price: "₹845",
    desc: "The world's softest seekh kebab, originating from Kakori near Lucknow. Minced baby lamb blended with khoya, saffron, rose petals, and roasted gram flour, roasted carefully on silver skewers.",
    prep: "25 mins",
    style: "Kakori Imperial Estate",
    secret: "Edible rose petal water & dried mace",
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=80",
    diet: "nonveg",
    special: "Best Seller"
  },
  4: {
    name: "Dahi Ke Shahi Kebab",
    category: "Starters • Imperial Vegetarian",
    price: "₹545",
    desc: "A regal vegetarian masterpiece featuring drained hung curd blended with crushed pistachios, roasted cumin, and fresh mint, encapsulated in a delicate golden pan-seared shell.",
    prep: "18 mins",
    style: "Delhi Mughal Durbar",
    secret: "24-hour muslin cloth hung curd & pomegranate seeds",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
    diet: "veg",
    special: ""
  },
  5: {
    name: "Awadhi Nalli Nihari",
    category: "Main Course • Slow Cooked",
    price: "₹1,095",
    desc: "A revered breakfast stew of royalty, tender lamb shanks are slow-simmered overnight over smoldering coals with 32 fragrant spices, producing an unctuous, deeply savory velvet broth.",
    prep: "30 mins",
    style: "18th-Century Awadhi Court",
    secret: "Overnight dum cooking in sealed degchi",
    img: "https://images.unsplash.com/photo-1545247181-516773cae754?w=800&auto=format&fit=crop&q=80",
    diet: "nonveg",
    special: "Imperial Signature"
  },
  6: {
    name: "Dal Bukhara Royal",
    category: "Main Course • 18-Hour Simmer",
    price: "₹645",
    desc: "The legendary whole black urad dal, slow-cooked for over 18 continuous hours over charcoal embers with rich tomato reduction, garlic, ginger, and generous churned butter.",
    prep: "15 mins",
    style: "Northwest Frontier Heritage",
    secret: "18-hour continuous simmering & churned white butter",
    img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
    diet: "veg",
    special: "Legendary"
  },
  7: {
    name: "Murgh Makhani Shahi",
    category: "Main Course • Delhi Durbar",
    price: "₹895",
    desc: "Charred boneless tandoori chicken simmered in an indulgent gravy of sweet San Marzano plum tomatoes, dried Kasuri methi, honey, cashew paste, and fresh cream.",
    prep: "25 mins",
    style: "Mughal Imperial Banquet",
    secret: "Stone-ground roasted fenugreek leaves & honey kiss",
    img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&auto=format&fit=crop&q=80",
    diet: "nonveg",
    special: ""
  },
  8: {
    name: "Shahi Paneer Lazeez",
    category: "Main Course • Royal Gravy",
    price: "₹695",
    desc: "Pillow-soft fresh malai paneer cut into royal triangles and poached gently in an aromatic white gravy of cashew nuts, melon seeds, cardamom, and Kashmiri saffron milk.",
    prep: "20 mins",
    style: "Nawabi White Korma",
    secret: "Green cardamom infused cashew paste",
    img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop&q=80",
    diet: "veg",
    special: ""
  },
  9: {
    name: "Dum Gosht Lucknowi Biryani",
    category: "Biryani • Awadhi Sealed Handi",
    price: "₹995",
    desc: "Long-grain 2-year aged basmati rice layered with baby mutton pieces marinated in brown onions, whole spices, and saffron milk, sealed with dough in an artisanal copper handi.",
    prep: "30 mins",
    style: "Pakki Biryani Tradition",
    secret: "Natural Meetha Ittar & whole green cardamom",
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    diet: "nonveg",
    special: "Royal Classic"
  },
  10: {
    name: "Subz Noorani Biryani",
    category: "Biryani • Garden Harvest",
    price: "₹695",
    desc: "A celebration of seasonal farm vegetables including baby carrots, haricot beans, cauliflower, green peas, and paneer cubes, dum-steamed with fragrant whole spices and rose water.",
    prep: "25 mins",
    style: "Royal Court Vegetarian",
    secret: "Slow-roasted caraway seeds (shahi jeera) & mint leaves",
    img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&auto=format&fit=crop&q=80",
    diet: "veg",
    special: ""
  },
  11: {
    name: "Murgh Dum Pukht Biryani",
    category: "Biryani • Nizami Special",
    price: "₹845",
    desc: "Tender chicken drumsticks and thighs cooked on slow dum with kewra essence, crisp barista onions, fresh mint sprigs, and two-tone saffron basmati rice.",
    prep: "25 mins",
    style: "Hyderabad & Awadh Confluence",
    secret: "Dough-sealed handi dum process",
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=80",
    diet: "nonveg",
    special: "Chef's Choice"
  },
  12: {
    name: "Zafraani Jhinga Biryani",
    category: "Biryani • Arabian Sea Jumbo Prawns",
    price: "₹1,195",
    desc: "Succulent jumbo Arabian Sea prawns tossed in saffron court-bouillon and cracked pepper, layered with fragrant basmati and finished with toasted almond slivers.",
    prep: "25 mins",
    style: "Coastal Royal Durbar",
    secret: "Saffron steeped in warm full-cream milk",
    img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=80",
    diet: "nonveg",
    special: "Luxury Seafood"
  },
  13: {
    name: "Royal Shahi Tukda",
    category: "Desserts • Imperial Awadh",
    price: "₹445",
    desc: "Crisp artisanal brioche triangles deep-fried in desi cow ghee, dipped in cardamom-infused syrup, topped with thick 6-hour slow-reduced rabdi, edible 24K silver vark, and crushed pistachios.",
    prep: "15 mins",
    style: "Mughal Banqueting Finale",
    secret: "Desi cow ghee frying & saffron-cardamom rabdi",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80",
    diet: "veg",
    special: "Crown Dessert"
  },
  14: {
    name: "Kesar Pista Phirni",
    category: "Desserts • Chilled Clay Matka",
    price: "₹395",
    desc: "Creamy ground basmati rice slow-cooked in thick whole milk until velvety, scented with Kashmiri saffron and cardamom, chilled in rustic terracotta bowls for an authentic earthy aroma.",
    prep: "Chilled",
    style: "Ancient North Indian Tradition",
    secret: "Earthen clay matka porosity enhancing aromatics",
    img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    diet: "veg",
    special: ""
  },
  15: {
    name: "Baked Gulab Jamun with Rabdi",
    category: "Desserts • Warm Fusion",
    price: "₹425",
    desc: "Warm khoya dumplings smothered in pistachio rabdi and baked in our tandoor oven until an aromatic caramel crust forms across the surface. Served hot with rose petals.",
    prep: "15 mins",
    style: "Royal Pastry Fusion",
    secret: "Tandoor gratin finish",
    img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&auto=format&fit=crop&q=80",
    diet: "veg",
    special: ""
  },
  16: {
    name: "Saffron Badam Kahwa",
    category: "Beverages • Kashmiri Samovar",
    price: "₹295",
    desc: "A soothing royal elixir brewed from green tea leaves, whole Kashmiri saffron threads, cinnamon bark, cracked green cardamom, and freshly shredded blanched almonds.",
    prep: "10 mins",
    style: "Kashmiri Royal Hospitality",
    secret: "Copper samovar slow boiling",
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80",
    diet: "veg",
    special: "Warm Regal Brew"
  },
  17: {
    name: "Royal Rose & Cardamom Sharbat",
    category: "Beverages • Summer Elixir",
    price: "₹285",
    desc: "Natural Damask rose petal reduction combined with crushed cardamom pods, swollen basil seeds (sabja/tukmaria), and freshly squeezed Persian lime juice over crushed ice.",
    prep: "Chilled",
    style: "Mughal Summer Refreshment",
    secret: "Organic Kannauj rose water extract",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80",
    diet: "veg",
    special: ""
  },
  18: {
    name: "Kesar Mango Lassi Imperial",
    category: "Beverages • Alphonso Harvest",
    price: "₹345",
    desc: "A velvety blend of cultured artisanal curd, fresh Alphonso mango pulp, saffron honey, and a hint of nutmeg, topped with roasted pistachio crunch.",
    prep: "Chilled",
    style: "Rajput Summer Classic",
    secret: "100% Ratnagiri Alphonso mango & wild saffron honey",
    img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=800&auto=format&fit=crop&q=80",
    diet: "veg",
    special: "House Signature"
  }
};

/**
 * Main Application Controller Object
 */
const app = {
  // Application initialization
  init() {
    this.initNavbar();
    this.initMobileNav();
    this.initScrollSpy();
    this.initSmoothScroll();
    this.initBackToTop();
    this.initMenuFilter();
    this.initMenuSearch();
    this.initFoodModals();
    this.initOffers();
    this.initGallery();
    this.initReservationForm();
    this.initContactForm();
    this.initNewsletterForm();
    this.initImageFallbacks();
    this.initCredentialsCounter();
  },

  /* ------------------------------------------------------------------------
     1. NAVBAR & SCROLL EFFECTS
     ------------------------------------------------------------------------ */
  initNavbar() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  },

  /* ------------------------------------------------------------------------
     2. MOBILE NAVIGATION DRAWER
     ------------------------------------------------------------------------ */
  initMobileNav() {
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const drawer = document.getElementById('mobileNavDrawer');
    const backdrop = document.getElementById('mobileNavBackdrop');
    const closeBtn = document.getElementById('mobileNavClose');
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-drawer-btn');

    if (!toggleBtn || !drawer || !backdrop) return;

    const openDrawer = () => {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      toggleBtn.classList.add('active');
      document.body.classList.add('menu-open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
    };

    const closeDrawer = () => {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
      toggleBtn.classList.remove('active');
      document.body.classList.remove('menu-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    };

    toggleBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', closeDrawer);

    mobileLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('active')) {
        closeDrawer();
      }
    });
  },

  /* ------------------------------------------------------------------------
     3. ACTIVE NAVIGATION HIGHLIGHTING (SCROLLSPY)
     ------------------------------------------------------------------------ */
  initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links .mobile-link');

    if (!('IntersectionObserver' in window)) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');

          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });

          mobileLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Handle bottom of page scroll for Contact section
    window.addEventListener('scroll', () => {
      if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60)) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === '#contact') link.classList.add('active');
          else link.classList.remove('active');
        });
      }
    }, { passive: true });
  },

  /* ------------------------------------------------------------------------
     4. SMOOTH SCROLLING WITH OFFSET
     ------------------------------------------------------------------------ */
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;

        if (targetId === '#home') {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          return;
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 76;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  },

  /* ------------------------------------------------------------------------
     5. BACK TO TOP BUTTON
     ------------------------------------------------------------------------ */
  initBackToTop() {
    const backBtn = document.getElementById('backToTopBtn');
    if (!backBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backBtn.classList.add('show');
      } else {
        backBtn.classList.remove('show');
      }
    }, { passive: true });

    backBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  },

  /* ------------------------------------------------------------------------
     6. FOOD MENU CATEGORY FILTERING
     ------------------------------------------------------------------------ */
  initMenuFilter() {
    const filterButtons = document.querySelectorAll('.menu-filter-container .filter-btn');
    const foodCards = document.querySelectorAll('.food-card');
    const searchInput = document.getElementById('menuSearchInput');
    const emptyState = document.getElementById('menuEmptyState');
    const resetBtn = document.getElementById('resetMenuBtn');

    if (!filterButtons.length || !foodCards.length) return;

    const filterCards = (selectedCategory, searchQuery = '') => {
      let visibleCount = 0;
      const query = searchQuery.trim().toLowerCase();

      foodCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardName = (card.getAttribute('data-name') || '').toLowerCase();
        const cardDesc = card.querySelector('.food-desc')?.textContent.toLowerCase() || '';

        const matchesCategory = (selectedCategory === 'all' || cardCategory === selectedCategory);
        const matchesSearch = query === '' || cardName.includes(query) || cardDesc.includes(query);

        if (matchesCategory && matchesSearch) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    };

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const category = btn.getAttribute('data-category');
        const currentQuery = searchInput ? searchInput.value : '';
        filterCards(category, currentQuery);
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        const allBtn = document.querySelector('.menu-filter-container .filter-btn[data-category="all"]');
        if (allBtn) allBtn.click();
      });
    }
  },

  /* ------------------------------------------------------------------------
     7. MENU LIVE SEARCH
     ------------------------------------------------------------------------ */
  initMenuSearch() {
    const searchInput = document.getElementById('menuSearchInput');
    const clearBtn = document.getElementById('menuSearchClear');
    const foodCards = document.querySelectorAll('.food-card');
    const emptyState = document.getElementById('menuEmptyState');

    if (!searchInput) return;

    const performSearch = () => {
      const query = searchInput.value.trim().toLowerCase();
      const activeFilterBtn = document.querySelector('.menu-filter-container .filter-btn.active');
      const activeCategory = activeFilterBtn ? activeFilterBtn.getAttribute('data-category') : 'all';

      if (clearBtn) {
        if (query.length > 0) {
          clearBtn.classList.add('visible');
        } else {
          clearBtn.classList.remove('visible');
        }
      }

      let visibleCount = 0;
      foodCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardName = (card.getAttribute('data-name') || '').toLowerCase();
        const cardDesc = card.querySelector('.food-desc')?.textContent.toLowerCase() || '';

        const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);
        const matchesSearch = query === '' || cardName.includes(query) || cardDesc.includes(query);

        if (matchesCategory && matchesSearch) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    };

    searchInput.addEventListener('input', performSearch);

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.classList.remove('visible');
        performSearch();
        searchInput.focus();
      });
    }
  },

  /* ------------------------------------------------------------------------
     8. FOOD QUICK VIEW MODAL & DISH SELECTION
     ------------------------------------------------------------------------ */
  initFoodModals() {
    const modal = document.getElementById('foodDetailModal');
    const closeBtn = document.getElementById('closeFoodModal');
    const quickViewButtons = document.querySelectorAll('.quick-view-btn');
    const selectForResBtn = document.getElementById('foodModalSelectBtn');

    if (!modal) return;

    let currentModalItem = null;

    const openFoodModal = (id) => {
      const item = FOOD_CATALOG[id];
      if (!item) return;

      currentModalItem = item;

      // Populate modal fields
      const img = document.getElementById('foodModalImg');
      const cat = document.getElementById('foodModalCat');
      const title = document.getElementById('foodModalTitle');
      const price = document.getElementById('foodModalPrice');
      const desc = document.getElementById('foodModalDesc');
      const prep = document.getElementById('foodModalPrep');
      const style = document.getElementById('foodModalStyle');
      const secret = document.getElementById('foodModalSecret');
      const badgesContainer = document.getElementById('foodModalBadges');

      if (img) {
        img.src = item.img;
        img.alt = item.name;
      }
      if (cat) cat.textContent = item.category;
      if (title) title.textContent = item.name;
      if (price) price.textContent = item.price;
      if (desc) desc.textContent = item.desc;
      if (prep) prep.textContent = item.prep;
      if (style) style.textContent = item.style;
      if (secret) secret.textContent = item.secret;

      if (badgesContainer) {
        badgesContainer.innerHTML = '';
        if (item.special) {
          const specSpan = document.createElement('span');
          specSpan.className = 'badge-special';
          specSpan.innerHTML = `<i class="fa-solid fa-crown"></i> ${item.special}`;
          badgesContainer.appendChild(specSpan);
        }
      }

      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('menu-open');
    };

    const closeFoodModal = () => {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
      currentModalItem = null;
    };

    quickViewButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        openFoodModal(id);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeFoodModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeFoodModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeFoodModal();
      }
    });

    if (selectForResBtn) {
      selectForResBtn.addEventListener('click', () => {
        if (!currentModalItem) return;
        closeFoodModal();
        app.openOrderModal(currentModalItem.name, currentModalItem.price, currentModalItem.category);
      });
    }
  },

  /**
   * Called when user clicks "Select for Table" on a card or inside quick view modal
   */
  openOrderModal(dishName, price, category) {
    const specialReqInput = document.getElementById('resSpecial');
    if (specialReqInput) {
      const existing = specialReqInput.value.trim();
      const addition = `Requested Dish: ${dishName}`;
      if (!existing.includes(dishName)) {
        specialReqInput.value = existing ? `${existing} | ${addition}` : addition;
      }
    }

    this.showToast(`Selected "${dishName}" for your royal reservation!`, 'fa-circle-check');

    // Smooth scroll to reservation form
    const reservationSection = document.getElementById('reservation');
    if (reservationSection) {
      const headerOffset = 80;
      const elementPosition = reservationSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  },

  /* ------------------------------------------------------------------------
     9. SPECIAL OFFERS (COPY PROMO & CLAIM DEAL)
     ------------------------------------------------------------------------ */
  initOffers() {
    // 1-Click Copy Promo Code
    const copyButtons = document.querySelectorAll('.btn-copy-code');
    copyButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const code = btn.getAttribute('data-code');
        if (!code) return;

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(code).then(() => {
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
            setTimeout(() => {
              btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
            }, 2500);
            app.showToast(`Promo Code "${code}" copied to clipboard!`, 'fa-tag');
          }).catch(() => {
            fallbackCopy(code, btn);
          });
        } else {
          fallbackCopy(code, btn);
        }
      });
    });

    const fallbackCopy = (code, btn) => {
      const tempInput = document.createElement('input');
      tempInput.value = code;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);

      btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
      setTimeout(() => {
        btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
      }, 2500);
      app.showToast(`Promo Code "${code}" copied to clipboard!`, 'fa-tag');
    };

    // Offer Action Buttons (Autofills Reservation Form)
    const offerCtaButtons = document.querySelectorAll('.offer-cta-btn');
    offerCtaButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const promoCode = btn.getAttribute('data-offer');
        const partySize = btn.getAttribute('data-guests');
        const offerTitle = btn.getAttribute('data-title');

        const promoInput = document.getElementById('resPromo');
        const guestsInput = document.getElementById('resGuests');
        const specialReq = document.getElementById('resSpecial');
        const promoHelp = document.getElementById('promoStatusMessage');

        if (promoInput) promoInput.value = promoCode;
        if (promoHelp) promoHelp.textContent = `Applied: ${offerTitle} (${promoCode})`;

        if (guestsInput && partySize) {
          guestsInput.value = partySize;
        }

        if (specialReq && offerTitle) {
          const current = specialReq.value.trim();
          if (!current.includes(offerTitle)) {
            specialReq.value = current ? `${current} | Offer: ${offerTitle}` : `Claiming Offer: ${offerTitle}`;
          }
        }

        app.showToast(`Applied ${offerTitle}! Redirecting to table booking...`, 'fa-gift');

        // Scroll down to reservation form
        const reservationSection = document.getElementById('reservation');
        if (reservationSection) {
          const headerOffset = 80;
          const elementPosition = reservationSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  },

  /* ------------------------------------------------------------------------
     10. GALLERY FILTERING & LIGHTBOX MODAL
     ------------------------------------------------------------------------ */
  initGallery() {
    const tabs = document.querySelectorAll('.gallery-tab');
    const items = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeLightboxBtn = document.getElementById('closeLightboxBtn');
    const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
    const lightboxNextBtn = document.getElementById('lightboxNextBtn');

    // Build array of gallery photos for full carousel navigation
    const zoomButtons = Array.from(document.querySelectorAll('.gallery-zoom-btn'));
    const galleryItems = zoomButtons.map(btn => ({
      full: btn.getAttribute('data-full'),
      caption: btn.getAttribute('data-caption') || 'The Royal Plate'
    }));

    let currentLightboxIdx = 0;

    const showLightboxIndex = (index) => {
      if (!galleryItems.length) return;
      if (index < 0) index = galleryItems.length - 1;
      if (index >= galleryItems.length) index = 0;
      currentLightboxIdx = index;

      const item = galleryItems[currentLightboxIdx];
      if (item && lightboxImg && lightboxCaption) {
        lightboxImg.style.opacity = '0.4';
        setTimeout(() => {
          lightboxImg.src = item.full;
          lightboxCaption.textContent = item.caption;
          lightboxImg.style.opacity = '1';
        }, 120);
      }
    };

    // Gallery Category Filtering
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');
        items.forEach(item => {
          const group = item.getAttribute('data-group');
          if (filter === 'all' || group === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // Lightbox Open on Button Click
    zoomButtons.forEach((btn, idx) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentLightboxIdx = idx;

        if (lightbox && lightboxImg) {
          showLightboxIndex(currentLightboxIdx);
          lightbox.classList.add('active');
          lightbox.setAttribute('aria-hidden', 'false');
          document.body.classList.add('menu-open');
        }
      });
    });

    // Lightbox Open on Card Click
    const galleryCards = document.querySelectorAll('.gallery-card');
    galleryCards.forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.gallery-zoom-btn')) return; // already handled
        const zoomBtn = card.querySelector('.gallery-zoom-btn');
        if (zoomBtn) zoomBtn.click();
      });
    });

    // Previous and Next Buttons
    if (lightboxPrevBtn) {
      lightboxPrevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showLightboxIndex(currentLightboxIdx - 1);
      });
    }

    if (lightboxNextBtn) {
      lightboxNextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showLightboxIndex(currentLightboxIdx + 1);
      });
    }

    // Close Lightbox
    const closeLightbox = () => {
      if (!lightbox) return;
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
    };

    if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showLightboxIndex(currentLightboxIdx - 1);
        if (e.key === 'ArrowRight') showLightboxIndex(currentLightboxIdx + 1);
      }
    });
  },

  /* ------------------------------------------------------------------------
     11. RESERVATION FORM VALIDATION & CONFIRMATION RECEIPT
     ------------------------------------------------------------------------ */
  initReservationForm() {
    const form = document.getElementById('reservationForm');
    const submitBtn = document.getElementById('resSubmitBtn');
    const btnSpinner = document.getElementById('resBtnSpinner');
    const btnText = document.getElementById('resBtnText');

    const dateInput = document.getElementById('resDate');
    const modal = document.getElementById('reservationModal');
    const closeModalBtn = document.getElementById('closeReservationModal');
    const confirmDismissBtn = document.getElementById('confirmDismissBtn');
    const printReceiptBtn = document.getElementById('printReceiptBtn');

    if (!form) return;

    // Set minimum date to today (cannot reserve in the past)
    if (dateInput) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      dateInput.min = `${yyyy}-${mm}-${dd}`;
      dateInput.value = `${yyyy}-${mm}-${dd}`;
    }

    // Validation helper functions
    const validateEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone) => {
      // Normalize: remove spaces, dashes, parentheses, +, leading 91 or 0
      const digits = phone.replace(/[\s\-\+\(\)]/g, '').replace(/^91/, '').replace(/^0/, '');
      return /^\d{10}$/.test(digits);
    };

    const showError = (fieldId, errorId, msg) => {
      const field = document.getElementById(fieldId);
      const errorSpan = document.getElementById(errorId);
      if (field) field.classList.add('is-invalid');
      if (errorSpan) errorSpan.textContent = msg;
    };

    const clearError = (fieldId, errorId) => {
      const field = document.getElementById(fieldId);
      const errorSpan = document.getElementById(errorId);
      if (field) field.classList.remove('is-invalid');
      if (errorSpan) errorSpan.textContent = '';
    };

    // Live validation clears on input
    ['resName', 'resEmail', 'resPhone', 'resDate', 'resTime', 'resGuests'].forEach(id => {
      const elem = document.getElementById(id);
      if (elem) {
        elem.addEventListener('input', () => clearError(id, `${id}Error`));
        elem.addEventListener('change', () => clearError(id, `${id}Error`));
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // 1. Name Check
      const name = document.getElementById('resName').value.trim();
      if (name.length < 3) {
        showError('resName', 'resNameError', 'Please enter your full name (minimum 3 characters).');
        isValid = false;
      } else {
        clearError('resName', 'resNameError');
      }

      // 2. Email Check
      const email = document.getElementById('resEmail').value.trim();
      if (!validateEmail(email)) {
        showError('resEmail', 'resEmailError', 'Please provide a valid email address.');
        isValid = false;
      } else {
        clearError('resEmail', 'resEmailError');
      }

      // 3. Phone Check (10 digits Indian mobile)
      const phone = document.getElementById('resPhone').value.trim();
      if (!validatePhone(phone)) {
        showError('resPhone', 'resPhoneError', 'Please enter a valid 10-digit mobile number.');
        isValid = false;
      } else {
        clearError('resPhone', 'resPhoneError');
      }

      // 4. Date Check
      const date = document.getElementById('resDate').value;
      const todayStr = new Date().toISOString().split('T')[0];
      if (!date) {
        showError('resDate', 'resDateError', 'Please select a dining date.');
        isValid = false;
      } else if (date < todayStr) {
        showError('resDate', 'resDateError', 'Dining date cannot be in the past.');
        isValid = false;
      } else {
        clearError('resDate', 'resDateError');
      }

      // 5. Time Slot Check
      const time = document.getElementById('resTime').value;
      if (!time) {
        showError('resTime', 'resTimeError', 'Please choose a banquet time slot.');
        isValid = false;
      } else {
        clearError('resTime', 'resTimeError');
      }

      // 6. Party Size Check
      const guests = document.getElementById('resGuests').value;
      if (!guests) {
        showError('resGuests', 'resGuestsError', 'Please select party size.');
        isValid = false;
      } else {
        clearError('resGuests', 'resGuestsError');
      }

      if (!isValid) {
        app.showToast('Please correct the highlighted fields.', 'fa-circle-exclamation');
        return;
      }

      // Show loading indicator
      if (btnSpinner) btnSpinner.style.display = 'inline-block';
      if (btnText) btnText.innerHTML = 'Securing Royal Table...';
      if (submitBtn) submitBtn.disabled = true;

      // Simulate network request latency (800ms)
      setTimeout(() => {
        if (btnSpinner) btnSpinner.style.display = 'none';
        if (btnText) btnText.innerHTML = '<i class="fa-solid fa-crown"></i> Confirm Royal Reservation';
        if (submitBtn) submitBtn.disabled = false;

        // Generate Simulated Booking ID
        const randomBookingNum = Math.floor(1000 + Math.random() * 9000);
        const bookingId = `TRP-2026-${randomBookingNum}`;

        // Populate receipt modal
        const seating = document.getElementById('resSeating').value || 'The Grand Durbar Hall';
        const promo = document.getElementById('resPromo').value.trim();
        const special = document.getElementById('resSpecial').value.trim();

        document.getElementById('receiptBookingId').textContent = bookingId;
        document.getElementById('receiptName').textContent = name;
        document.getElementById('receiptDate').textContent = date;
        document.getElementById('receiptTime').textContent = time;
        document.getElementById('receiptGuests').textContent = `${guests} Guests`;
        document.getElementById('receiptSeating').textContent = seating;

        const promoRow = document.getElementById('receiptPromoRow');
        const promoVal = document.getElementById('receiptPromo');
        if (promo) {
          promoRow.style.display = 'flex';
          promoVal.textContent = promo;
        } else {
          promoRow.style.display = 'none';
        }

        const dietRow = document.getElementById('receiptDietRow');
        const dietVal = document.getElementById('receiptDiet');
        if (special) {
          dietRow.style.display = 'flex';
          dietVal.textContent = special;
        } else {
          dietRow.style.display = 'none';
        }

        // Open modal
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('menu-open');

        app.showToast(`Royal Table Confirmed! Booking ID: ${bookingId}`, 'fa-champagne-glasses');

        // Reset form
        form.reset();
        if (dateInput) {
          const today = new Date();
          const yyyy = today.getFullYear();
          const mm = String(today.getMonth() + 1).padStart(2, '0');
          const dd = String(today.getDate()).padStart(2, '0');
          dateInput.value = `${yyyy}-${mm}-${dd}`;
        }
        const promoHelp = document.getElementById('promoStatusMessage');
        if (promoHelp) promoHelp.textContent = '';
      }, 850);
    });

    // Close receipt modal
    const closeReceiptModal = () => {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
    };

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeReceiptModal);
    if (confirmDismissBtn) confirmDismissBtn.addEventListener('click', closeReceiptModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeReceiptModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeReceiptModal();
      }
    });

    // Print Receipt Handler
    if (printReceiptBtn) {
      printReceiptBtn.addEventListener('click', () => {
        window.print();
      });
    }
  },

  /* ------------------------------------------------------------------------
     12. CONTACT / INQUIRY FORM VALIDATION
     ------------------------------------------------------------------------ */
  initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const msg = document.getElementById('contactMessage').value.trim();

      const nameError = document.getElementById('contactNameError');
      const emailError = document.getElementById('contactEmailError');
      const msgError = document.getElementById('contactMessageError');

      if (name.length < 2) {
        if (nameError) nameError.textContent = 'Please enter your name.';
        document.getElementById('contactName').classList.add('is-invalid');
        isValid = false;
      } else {
        if (nameError) nameError.textContent = '';
        document.getElementById('contactName').classList.remove('is-invalid');
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (emailError) emailError.textContent = 'Please enter a valid email address.';
        document.getElementById('contactEmail').classList.add('is-invalid');
        isValid = false;
      } else {
        if (emailError) emailError.textContent = '';
        document.getElementById('contactEmail').classList.remove('is-invalid');
      }

      if (msg.length < 10) {
        if (msgError) msgError.textContent = 'Please enter your message (at least 10 characters).';
        document.getElementById('contactMessage').classList.add('is-invalid');
        isValid = false;
      } else {
        if (msgError) msgError.textContent = '';
        document.getElementById('contactMessage').classList.remove('is-invalid');
      }

      if (!isValid) return;

      app.showToast('Your inscription has been received by the Royal Concierge!', 'fa-envelope-circle-check');
      form.reset();
    });
  },

  /* ------------------------------------------------------------------------
     13. NEWSLETTER SUBSCRIPTION FORM
     ------------------------------------------------------------------------ */
  initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('newsletterEmail');
    const errorSpan = document.getElementById('newsletterError');

    if (!form || !emailInput) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (errorSpan) errorSpan.textContent = 'Please enter a valid email address.';
        return;
      }

      if (errorSpan) errorSpan.textContent = '';
      app.showToast('Welcome to the Royal Circle! You are now subscribed.', 'fa-gem');
      form.reset();
    });
  },

  /* ------------------------------------------------------------------------
     14. TOAST NOTIFICATION SYSTEM
     ------------------------------------------------------------------------ */
  showToast(message, iconClass = 'fa-circle-info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <i class="fa-solid ${iconClass} toast-icon"></i>
      <span class="toast-message">${message}</span>
      <button class="toast-close" aria-label="Close notification"><i class="fa-solid fa-xmark"></i></button>
    `;

    container.appendChild(toast);

    const closeBtn = toast.querySelector('.toast-close');
    const dismiss = () => {
      toast.classList.add('toast-hiding');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 350);
    };

    closeBtn.addEventListener('click', dismiss);
    setTimeout(dismiss, 4200);
  },

  /* ------------------------------------------------------------------------
     15. IMAGE FALLBACK SYSTEM (NO BROKEN IMAGES EVER)
     ------------------------------------------------------------------------ */
  initImageFallbacks() {
    // Elegant SVG placeholder with royal crest
    const svgFallback = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23121319'/%3E%3Ccircle cx='400' cy='270' r='80' fill='none' stroke='%23D4AF37' stroke-width='3' stroke-dasharray='6,6'/%3E%3Cpath d='M360 290 L380 230 L400 270 L420 230 L440 290 Z' fill='%23D4AF37'/%3E%3Ctext x='400' y='390' font-family='Georgia, serif' font-size='26' fill='%23FBF8F0' font-weight='bold' text-anchor='middle'%3ETHE ROYAL PLATE%3C/text%3E%3Ctext x='400' y='425' font-family='sans-serif' font-size='14' fill='%23D4AF37' letter-spacing='3' text-anchor='middle'%3EHAUTE REGAL CUISINE%3C/text%3E%3C/svg%3E";

    // Global capturing listener for all images (present and dynamically added)
    window.addEventListener('error', (e) => {
      if (e.target && e.target.tagName === 'IMG') {
        if (e.target.src !== svgFallback) {
          e.target.src = svgFallback;
        }
      }
    }, true);

    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('error', function () {
        if (this.src !== svgFallback) {
          this.src = svgFallback;
        }
      });
    });
  },

  /* ------------------------------------------------------------------------
     16. HERO CREDENTIALS NUMBER COUNTER
     ------------------------------------------------------------------------ */
  initCredentialsCounter() {
    const credNumbers = document.querySelectorAll('.cred-number');
    if (!credNumbers.length) return;

    let hasAnimated = false;

    const animateCounters = () => {
      if (hasAnimated) return;
      hasAnimated = true;

      credNumbers.forEach(elem => {
        const targetStr = elem.getAttribute('data-target');
        if (!targetStr) return;

        if (targetStr.includes('.')) {
          // Decimal counter (e.g. 4.9)
          const target = parseFloat(targetStr);
          let current = 3.0;
          const interval = setInterval(() => {
            current += 0.1;
            if (current >= target) {
              elem.textContent = `${target.toFixed(1)}★`;
              clearInterval(interval);
            } else {
              elem.textContent = `${current.toFixed(1)}★`;
            }
          }, 60);
        } else {
          // Integer counter
          const target = parseInt(targetStr, 10);
          let current = 0;
          const isPercent = (target === 100);
          const step = Math.ceil(target / 25);
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              elem.textContent = isPercent ? `${target}%` : `${target}+`;
              clearInterval(interval);
            } else {
              elem.textContent = isPercent ? `${current}%` : `${current}+`;
            }
          }, 50);
        }
      });
    };

    // Trigger when in view using IntersectionObserver
    const credBar = document.querySelector('.hero-credentials');
    if ('IntersectionObserver' in window && credBar) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      }, { threshold: 0.15 });
      observer.observe(credBar);
    } else {
      setTimeout(animateCounters, 600);
    }
  }
};

// Expose app globally on window for inline event handlers
window.app = app;

// Launch application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
