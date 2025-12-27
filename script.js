import {
  APP_LOGO,
  COMPANY_NAME,
  COMPANY_DESCRIPTION,
  COMPANY_PHONE,
  COMPANY_EMAIL,
  COMPANY_LOCATION,
  COMPANY_SLOGAN,
  HERO_BACKGROUNDS,
  PRODUCTS,
  GALLERY_IMAGES,
  SOCIAL_LINKS,
} from "./data.js";

let ImageModal;
document.addEventListener("DOMContentLoaded", () => {
  // State variables
  let isMenuOpen = false;
  let bgIndex = 0;
  let imageIndices = {};
  let selectedCategory = "All";
  let selectedProduct = null;
  let isModalOpen = false;

  // Element references
  const header = document.getElementById("header");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuOpenIcon = document.getElementById("menu-open-icon");
  const menuCloseIcon = document.getElementById("menu-close-icon");
  const heroCarousel = document.getElementById("hero-carousel");
  const heroCarouselIndicators = document.getElementById(
    "hero-carousel-indicators"
  );
  const categoryFilters = document.getElementById("category-filters");
  const productsGrid = document.getElementById("products-grid");
  const galleryGrid = document.getElementById("gallery-grid");
  const imageModal = document.getElementById("image-modal");
  const modalCloseButton = document.getElementById("modal-close-button");
  const modalImage = document.getElementById("modal-image");
  ImageModal = modalImage;
  const modalTitle = document.getElementById("modal-title");
  const modalBenefits = document.getElementById("modal-benefits");

  // --- INITIALIZATION ---

  const init = () => {
    // Populate header
    document.getElementById("header-phone").href = `tel:${COMPANY_PHONE}`;
    document.getElementById("header-phone").textContent = COMPANY_PHONE;
    document.getElementById("header-email").href = `mailto:${COMPANY_EMAIL}`;
    document.getElementById("header-email").textContent = COMPANY_EMAIL;
    document.getElementById("header-logo").src = APP_LOGO;
    document.getElementById("header-company-name").textContent = COMPANY_NAME;

    // Populate hero section
    document.getElementById("hero-logo").src = APP_LOGO;
    document.getElementById("hero-company-name").textContent = COMPANY_NAME;
    document.getElementById("hero-slogan").textContent = COMPANY_SLOGAN;
    document.getElementById("hero-slogan2").textContent = COMPANY_SLOGAN;
    document.getElementById("hero-description").textContent =
      COMPANY_DESCRIPTION;

    // Populate contact section
    document.getElementById("contact-phone").href = `tel:${COMPANY_PHONE}`;
    document.getElementById("contact-phone").textContent = COMPANY_PHONE;
    document.getElementById("contact-email").href = `mailto:${COMPANY_EMAIL}`;
    document.getElementById("contact-email").textContent = COMPANY_EMAIL;
    document.getElementById("contact-location").textContent = COMPANY_LOCATION;

    // Populate footer
    document.getElementById("footer-phone").textContent = COMPANY_PHONE;
    document.getElementById("footer-email").textContent = COMPANY_EMAIL;
    document.getElementById("footer-location").textContent = COMPANY_LOCATION;

    // Populate social links
    // const socialLinksHeader = document.getElementById("social-links-header");
    // Object.entries(SOCIAL_LINKS).forEach(([name, url]) => {
    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.title = name.charAt(0).toUpperCase() + name.slice(1);
    //     link.className = "text-primary hover:text-primary/80 transition";
    //     link.innerHTML = `<img src="/images/social/${name}.svg" alt="${name}" class="h-4 w-4">`; // Assuming you have social icons
    //     socialLinksHeader.appendChild(link);
    // });
    // Lines 58-75 (New code block for social icons)
    // Social icon SVGs (Lucide-like)
    const SOCIAL_ICONS = {
      facebook:
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
      twitter:
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2.1-1.1 0-2.1-.6-3-1.6.3 0 .6.1.9.1.4 0 .8-.1 1.2-.2-1.2-.3-2.2-1-2.8-2.2.4.1.8.1 1.2.1-1.3-.7-1.8-2.3-1.8-4 0-.1 0-.2 0-.3.4.2.8.4 1.3.4-1.2-.8-1.8-2.3-1.8-4 0-.9.2-1.7.6-2.4 2.7 3.5 6.8 5.8 11.3 6-1.1-4.2 3.2-6.2 6.4-4.8 1.1-.4 2.1-.8 3.1-1.2-.4 1.3-1.3 2.2-2.4 2.8z"/></svg>',
      url: "https://google.com",
      linkedin:
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
      instagram:
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
    };

    // Populate social links
    const socialLinksHeader = document.getElementById("social-links-header");
    Object.entries(SOCIAL_LINKS).forEach(([name, url]) => {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.title = name.charAt(0).toUpperCase() + name.slice(1);
      link.className = "text-primary hover:text-primary/80 transition";
      link.innerHTML = SOCIAL_ICONS[name] || "";
      socialLinksHeader.appendChild(link);
    });

    // Initialize carousels and dynamic content
    renderHeroCarousel();
    renderCategoryFilters();
    renderProducts();
    renderGallery();
    renderFooterProducts();

    // Start hero carousel rotation
    setInterval(() => {
      bgIndex = (bgIndex + 1) % HERO_BACKGROUNDS.length;
      updateHeroCarousel();
    }, 5000);
  };

  // --- RENDER FUNCTIONS ---

  const renderHeroCarousel = () => {
    heroCarousel.innerHTML = HERO_BACKGROUNDS.map(
      (bg, idx) => `
            <div class="absolute inset-0 transition-opacity duration-1000 ${
              idx === bgIndex ? "opacity-100" : "opacity-0"
            }" 
                 style="background-image: url('${bg}'); background-size: cover; background-position: center;"></div>
        `
    ).join("");
    renderHeroIndicators();
  };

  const renderHeroIndicators = () => {
    heroCarouselIndicators.innerHTML = HERO_BACKGROUNDS.map(
      (_, idx) => `
            <button class="w-3 h-3 rounded-full transition-all ${
              idx === bgIndex ? "bg-primary w-8" : "bg-white/50"
            }" data-index="${idx}"></button>
        `
    ).join("");
  };

  const renderCategoryFilters = () => {
    const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];
    categoryFilters.innerHTML = categories
      .map(
        (cat) => `
            <button class="px-4 py-2 rounded-full font-medium transition-all ${
              selectedCategory === cat
                ? "bg-primary text-white"
                : "bg-background text-foreground border border-primary/20 hover:border-primary"
            }" data-category="${cat}">${cat}</button>
        `
      )
      .join("");
  };

  const renderProducts = () => {
    const filteredProducts =
      selectedCategory === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === selectedCategory);
    productsGrid.innerHTML = filteredProducts
      .map((product) => {
        const currentImageIndex = imageIndices[product.id] || 0;
        const productImages = product.images || [product.image];
        const currentImage = productImages[currentImageIndex];

        return `
                <div class="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer bg-white rounded-lg" data-product-id="${
                  product.id
                }">
                    <div class="relative h-64 overflow-hidden">
                        <img src="${currentImage}" style='object-fit:contain;' alt="${
          product.name
        }" class="product-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        <div class="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold" style='color:#716767; font-weight:bold;'>${
                          currentImageIndex + 1
                        }/${productImages.length}</div>
                        ${
                          productImages.length > 1
                            ? `
                            <button class="prev-image absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition" style='color:black; font-weight:bold;' data-product-id="${product.id}">&lt;</button>
                            <button class="next-image absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition" style='color:black; font-weight:bold;' data-product-id="${product.id}">&gt;</button>
                        `
                            : ""
                        }
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-foreground mb-2">${
                          product.name
                        }</h3>
                        <p class="text-sm text-foreground/70 mb-4">${
                          product.description
                        }</p>
                        <div class="flex justify-between items-center">
                            <span class="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">${
                              product.category
                            }</span>
                            <button class="view-details bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md" data-product-id="${
                              product.id
                            }">View Details</button>
                        </div>
                    </div>
                </div>
            `;
      })
      .join("");
  };

  // --- AUTO IMAGE CAROUSEL (EVERY 3 SECONDS) ---
  setInterval(() => {
    PRODUCTS.forEach((product) => {
      const productImages = product.images || [product.image];
      if (productImages.length > 1) {
        // move to next image
        const current = imageIndices[product.id] || 0;
        const nextIndex = (current + 1) % productImages.length;
        imageIndices[product.id] = nextIndex;
      }
    });

    // re-render UI with updated image indices
    renderProducts();

    document.querySelectorAll(".product-image").forEach((img) => {
      img.classList.remove("image-slide");
      void img.offsetWidth; // 🔥 forces reflow so animation restarts
      img.classList.add("image-slide");
    });
  }, 3000); // every 3 seconds

  const renderGallery = () => {
    galleryGrid.innerHTML = GALLERY_IMAGES.map(
      (img, idx) => `
            <div class="h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <img src="${img}" alt="Gallery ${
        idx + 1
      }" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
            </div>
        `
    ).join("");
  };

  const renderFooterProducts = () => {
    const footerProducts = document.getElementById("footer-products");
    const productLinks = ["Coco Poles", "Hanging Pots", "Door Mats", "More..."];
    footerProducts.innerHTML = productLinks
      .map((link) => `<li><a href="#" class="hover:underline">${link}</a></li>`)
      .join("");
  };

  // --- UPDATE FUNCTIONS ---

  const updateHeroCarousel = () => {
    const slides = heroCarousel.children;
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.toggle("opacity-100", i === bgIndex);
      slides[i].classList.toggle("opacity-0", i !== bgIndex);
    }
    const indicators = heroCarouselIndicators.children;
    for (let i = 0; i < indicators.length; i++) {
      indicators[i].classList.toggle("bg-primary", i === bgIndex);
      indicators[i].classList.toggle("w-8", i === bgIndex);
      indicators[i].classList.toggle("bg-white/50", i !== bgIndex);
    }
  };

  // --- EVENT HANDLERS ---

  const handleScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  };

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle("hidden");
    menuOpenIcon.classList.toggle("hidden");
    menuCloseIcon.classList.toggle("hidden");
  };

  const handleCategoryClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      selectedCategory = e.target.dataset.category;
      renderCategoryFilters();
      renderProducts();
    }
  };

  const handleProductInteraction = (e) => {
    const productId = e.target.dataset.productId;
    if (!productId) return;

    const product = PRODUCTS.find((p) => p.id == productId);
    const productImages = product.images || [product.image];

    if (e.target.classList.contains("prev-image")) {
      e.stopPropagation();
      imageIndices[productId] =
        (imageIndices[productId] || 0) === 0
          ? productImages.length - 1
          : (imageIndices[productId] || 0) - 1;
      renderProducts();
    } else if (e.target.classList.contains("next-image")) {
      e.stopPropagation();
      imageIndices[productId] =
        ((imageIndices[productId] || 0) + 1) % productImages.length;
      renderProducts();
    } else if (
      e.target.classList.contains("view-details") ||
      e.target.closest("[data-product-id]")
    ) {
      const currentImageIndex = imageIndices[product.id] || 0;
      selectedProduct = {
        ...product,
        currentImage: productImages[currentImageIndex],
      };
      openModal();
    }
  };

  const openModal = () => {
    if (!selectedProduct) return;
    isModalOpen = true;

    // Load all images of this product
    modalImages = selectedProduct.images || [selectedProduct.image];

    // Set starting image index (current tile image)
    modalImageIndex = imageIndices[selectedProduct.id] || 0;

    // Update modal image
    modalImage.src = modalImages[modalImageIndex];
    // modalImage.src = selectedProduct.currentImage;
    modalTitle.textContent = selectedProduct.name;
    modalBenefits.innerHTML = selectedProduct.benefits
      .map((b) => `<li>${b}</li>`)
      .join("");
    imageModal.classList.add("active");
  };

  const closeModal = () => {
    isModalOpen = false;
    imageModal.classList.remove("active");
  };

  // --- EVENT LISTENERS ---

  window.addEventListener("scroll", handleScroll);
  mobileMenuButton.addEventListener("click", toggleMenu);
  categoryFilters.addEventListener("click", handleCategoryClick);
  productsGrid.addEventListener("click", handleProductInteraction);
  modalCloseButton.addEventListener("click", closeModal);
  imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) {
      closeModal();
    }
  });

  // --- START THE APP ---
  init();
});

const locationText = COMPANY_LOCATION;

function getMapLink(address) {
  const encoded = encodeURIComponent(address);
  const userAgent = window.navigator.userAgent.toLowerCase();

  // --- Detect OS ---
  const isWindows = userAgent.includes("windows");
  const isMac = userAgent.includes("macintosh") || userAgent.includes("mac os");
  const isIOS = /iphone|ipad|ipod/.test(userAgent);
  const isAndroid = userAgent.includes("android");

  // --- Platform-based Mapping ---
  if (isIOS || isMac) {
    // Apple Maps
    return `maps://?q=${encoded}`;
  }

  // Windows, Android, Linux → Google Maps
  return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
}

const mapUrl = getMapLink(locationText);

// About us image code section
const locationEl = document.getElementById("contact-location");
locationEl.textContent = locationText;
locationEl.href = mapUrl;
locationEl.target = "_blank";
locationEl.rel = "noopener noreferrer";

const aboutImages = [
  "/images/categories/aboutus/about1.png",
  "/images/categories/aboutus/about2.png",
  "/images/categories/aboutus/about3.jpeg",
  "/images/categories/aboutus/about4.png",
];

const track = document.getElementById("about-slider-track");
let currentIndex = 0;

// Load images into the slider
aboutImages.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.className = "w-full h-96 object-cover flex-shrink-0";
  track.appendChild(img);
});

// Show slide
function showSlide(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
}

// Auto Slide Every 4 Seconds for About us section
let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % aboutImages.length;
  showSlide(currentIndex);
}, 3000);

// Manual Controls
document.getElementById("about-prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + aboutImages.length) % aboutImages.length;
  showSlide(currentIndex);
});

document.getElementById("about-next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % aboutImages.length;
  showSlide(currentIndex);
});

export function downloadBrochure() {
  const link = document.createElement("a");
  link.href = "/brochure.pdf"; // local or external URL
  link.download = "Kalpavriksha-Brochure.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

//
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const phoneNumber = 8080782005; // e.g. 919876543210 (without +)

  const text = `
    *New Contact Message*  
    --------------------
    *Name:* ${name}
    *Email:* ${email}
    *Subject:* ${subject}
    *Message:* ${message}
    *Time:* ${new Date().toLocaleString()}`;

  // window.open(whatsappUrl, "_blank");
  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    // Force open WhatsApp App
    window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      text
    )}`;
  } else {
    // Desktop → WhatsApp Web
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;
  }
});

let modalImageIndex = 0;
let modalImages = [];
export function modalNextImage() {
  modalImageIndex = (modalImageIndex + 1) % modalImages.length;
  ImageModal.src = modalImages[modalImageIndex];
}

export function modalPrevImage() {
  modalImageIndex =
    (modalImageIndex - 1 + modalImages.length) % modalImages.length;
  ImageModal.src = modalImages[modalImageIndex];
}
