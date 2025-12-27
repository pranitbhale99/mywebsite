// data.js
// All constants and product data extracted from kalpavriksha_website/client/src/const.ts

export const APP_LOGO = "/images/logo.png"; // CocoVriksha logo

// Company Information
export const COMPANY_NAME = "CocoVriksha";
export const COMPANY_DESCRIPTION =
  "Sustainable coconut coir products crafted with nature in mind. Innovative, eco-friendly solutions for gardening and beyond.";
export const COMPANY_PHONE = "+91 8799839403";
export const COMPANY_EMAIL = "info@cocovriksha.com";
export const COMPANY_LOCATION = "Naigaon East, Maharashtra 401208, India";
export const COMPANY_SLOGAN = "Shaping a Greener Tomorrow !";

export const HERO_BACKGROUNDS = [
  "/images/bg1.png",
  "/images/bg2.jpeg",
  "/images/black soil 2.jpg",
];

// Products with image stacks and benefits
export const PRODUCTS = [
  {
    id: 1,
    name: "Black Soil",
    description: "Premium quality black soil enriched with natural nutrients",
    category: "Soil",
    benefits: [
      "Rich in organic matter and nutrients",
      "Improves soil structure and water retention",
      "Perfect for all types of plants and vegetables",
      "Naturally fertile and eco-friendly",
      "Promotes healthy plant growth",
    ],
    image: "/images/categories/Black soil/blacksoil1.jpeg",
    images: [
      "/images/categories/Black soil/blacksoil1.jpeg",
      "/images/categories/Black soil/blacksoil2.jpg",
      "/images/categories/Black soil/blacksoil3.jpg",
    ],
  },
  {
    id: 2,
    name: "Coco Pole",
    description: "Natural coconut coir poles for plant support and climbing",
    category: "Support",
    benefits: [
      "Made from 100% natural coconut coir",
      "Durable and long-lasting support structure",
      "Perfect for climbing plants and vines",
      "Biodegradable and eco-friendly",
      "Promotes vertical gardening",
    ],
    image: "/images/categories/Coco Pole/pole1.jpg",
    images: [
      "/images/categories/Coco Pole/pole1.jpg",
      "/images/categories/Coco Pole/pole2.jpg",
      "/images/categories/Coco Pole/pole3.jpg",
      "/images/categories/Coco Pole/pole4.jpg",
    ],
  },
  {
    id: 3,
    name: "Coco Door Mats",
    description: "Durable and eco-friendly coconut coir door mats",
    category: "Home",
    benefits: [
      "Made from sustainable coconut coir",
      "Highly durable and long-lasting",
      "Excellent dirt and moisture absorption",
      "Natural antimicrobial properties",
      "Biodegradable and environmentally friendly",
    ],
    image: "/images/categories/Coco Door Mats/coco mat.png",
    images: [
      "/images/categories/Coco Door Mats/coco mat.png",
      "/images/categories/Coco Door Mats/coco mat (2).png",
      "/images/categories/Coco Door Mats/coco mat 3.png",
      "/images/categories/Coco Door Mats/door mat 4.png",
    ],
  },
  {
    id: 4,
    name: "Coco Pith",
    description: "Premium coconut coir pith for gardening and horticulture",
    category: "Growing Media",
    benefits: [
      "Excellent water retention properties",
      "Lightweight and easy to handle",
      "Perfect for seed germination",
      "Reduces soil compaction",
      "Sustainable alternative to peat moss",
    ],
    image: "/images/categories/Coco Pith/coco_pith_1.jpeg",
    images: [
            "/images/categories/Coco Pith/coco_pith_1.jpeg",
            "/images/categories/Coco Pith/coco_pith_2.png",
    ],
  },
  {
    id: 5,
    name: "Coco Rope",
    description: "Strong and flexible coconut coir rope for various uses",
    category: "Rope & Twine",
    benefits: [
      "Made from natural coconut fibers",
      "Strong tensile strength",
      "Perfect for plant support and binding",
      "Weather-resistant and durable",
      "Completely biodegradable",
    ],
    image: "/images/categories/Coco Rope/rope 2.png",
    images: [
      "/images/categories/Coco Rope/rope 2.png",
      "/images/categories/Coco Rope/rope 3.png",
      "/images/categories/Coco Rope/rope 4.jpeg",
    ],
  },
  {
    id: 6,
    name: "Conical Hanging Pot",
    description: "Elegant conical hanging pots made from coconut coir",
    category: "Pots",
    benefits: [
      "Unique conical design for visual appeal",
      "Made from sustainable coconut coir",
      "Perfect for hanging gardens",
      "Excellent drainage properties",
      "Lightweight and easy to install",
    ],
    image: "/images/categories/Conical Hanging Pot/conical pot 1.png",
    images: [
      //"/images/categories/Conical Hanging Pot/conical pot 1.png",
      "/images/categories/Conical Hanging Pot/conical pot 2.png",
      "/images/categories/Conical Hanging Pot/conical pot 3 (1).webp",
      "/images/categories/Conical Hanging Pot/conical pot 4.webp",
    ],
  },
  {
    id: 7,
    name: "Round Hanging Pots",
    description: "Beautiful round hanging pots for vertical gardening",
    category: "Pots",
    benefits: [
      "Classic round design",
      "Made from eco-friendly coconut coir",
      "Ideal for flowers and small plants",
      "Promotes vertical space utilization",
      "Natural and attractive appearance",
    ],
    image: "/images/categories/Round hanging coco pots/coco pot 1.jpg",
    images: [
      "/images/categories/Round hanging coco pots/coco pot 1.jpg",
      "/images/categories/Round hanging coco pots/coco pot 2.webp",
      "/images/categories/Round hanging coco pots/coco pot 3.jpg",
    ],
  },
  {
    id: 8,
    name: "Utensils Scrubber",
    description: "Natural coconut coir scrubbers for kitchen cleaning",
    category: "Cleaning",
    benefits: [
      "Made from 100% natural coconut fibers",
      "Effective for tough cleaning tasks",
      "Non-toxic and safe for all surfaces",
      "Biodegradable and eco-friendly",
      "Long-lasting and durable",
    ],
    image: "/images/categories/Utensils Scrubber/scrub tool.jpg",
    images: [
      "/images/categories/Utensils Scrubber/scrub tool.jpg",
      "/images/categories/Utensils Scrubber/scrub tool 3.jpg",
      "/images/categories/Utensils Scrubber/scrub utensiles.png",
    ],
  },
  {
    id: 9,
    name: "Body Scrubber",
    description: "Gentle natural coconut coir body scrubbers",
    category: "Personal Care",
    benefits: [
      "Gentle exfoliation for skin",
      "Made from natural coconut fibers",
      "Promotes blood circulation",
      "Biodegradable and eco-friendly",
      "Long-lasting and effective",
    ],
    image: "/images/categories/Body Scruber/coco scrubber.png",
    images: [
      "/images/categories/Body Scruber/coco scrubber.png",
      "/images/categories/Body Scruber/images_1.jpg",
      "/images/categories/Body Scruber/natural-bath-brush-500x500.jpg",
    ],
  },
  {
    id: 10,
    name: "Coco Mulch Mat",
    description: "Protective coconut coir mulch mats for gardening",
    category: "Garden Protection",
    benefits: [
      "Retains soil moisture",
      "Suppresses weed growth",
      "Regulates soil temperature",
      "Biodegradable and natural",
      "Improves soil quality over time",
    ],
    image: "/images/categories/Coco Mulch Mat/coco Mulch Mat 1.jpeg",
    images: [
      "/images/categories/Coco Mulch Mat/coco Mulch Mat 1.jpeg",
      "/images/categories/Coco Mulch Mat/coco mulch mat 3.jpg",
      "/images/categories/Coco Mulch Mat/mulch mat 2.jpg",
    ],
  },
  {
    id: 11,
    name: "Red Soil",
    description: "Natural red soil rich in iron and minerals",
    category: "Soil",
    benefits: [
      "High in iron and essential minerals",
      "Excellent for flowering plants",
      "Improves soil drainage",
      "Natural and chemical-free",
      "Perfect for landscaping projects",
    ],
    image: "/images/categories/Red Soil/red soil.jpg",
    images: [
      "/images/categories/Red Soil/red soil.jpg",
      "/images/categories/Red Soil/red soil 2.jpg",
      "/images/categories/Red Soil/red soil 3.webp",
    ],
  },
  {
    id: 12,
    name: "Goat Manure",
    description: "Organic goat manure for natural soil enrichment",
    category: "Fertilizer",
    benefits: [
      "Rich in nutrients and organic matter",
      "Improves soil fertility naturally",
      "Promotes healthy plant growth",
      "Slow-release nutrient source",
      "Completely organic and eco-friendly",
    ],
    image: "/images/categories/Goat manure/goat manure1.jpg",
    images: [
      "/images/categories/Goat manure/goat manure1.jpg",
      "/images/categories/Goat manure/goat manure 2.jpg",
      "/images/categories/Goat manure/goat manure 2.webp",
      "/images/categories/Goat manure/goat manure 3.png",
    ],
  },
  {
    id: 13,
    name: "Coconut",
    description: "Natural coconut products and byproducts",
    category: "Raw Materials",
    benefits: [
      "100% natural coconut source",
      "Sustainable harvesting practices",
      "Versatile applications",
      "High quality and purity",
      "Eco-friendly processing",
    ],
    image: "/images/categories/Coconut/coconut.jpeg",
    images: ["/images/categories/Coconut/coconut.jpeg"],
  },
  {
    id: 14,
    name: "Wall Hanging Coco Pot",
    description: "Eco-friendly coir material that enhances plant health naturally.",
    category: "Pots",
    benefits: [
      "Excellent moisture balance with breathable, root-friendly aeration.",
      "Lightweight, durable, and weather-resistant for indoor & outdoor use.",
      "Space-saving wall-hanging design perfect for balconies and small areas.",
      "Adds a natural, aesthetic look to any home or garden décor.",
    ],
    image: "/images/categories/wall hanging pot/wall hanging 1.png",
    images: ["/images/categories/wall hanging pot/wall hanging 1.png",
             "/images/categories/wall hanging pot/wall hanging 2.jpg",
             "/images/categories/wall hanging pot/wall hanging 3.jpg",
            ],
  },
];

export const GALLERY_IMAGES = [
  "/images/gallery/2.png",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpeg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
  "/images/gallery/9.jpg",
  "/images/gallery/10.jpg",
  "/images/gallery/11.jpg",
];

export const SOCIAL_LINKS = {
  facebook: "#",
  twitter: "https://google.com",
  linkedin: "#",
  instagram: "#",
};
