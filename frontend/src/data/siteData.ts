
// =============================================
// NIVAS INTERIORS — SITE DATA
// =============================================

export const SITE_CONFIG = {
  name: 'Nivas Interiors',
  tagline: 'Designing Spaces. Creating Stories.',
  phone: '+918850562032',
  email: 'abrarulhaque9920@gmail.com',
  address: 'Mumbai, India',
  whatsapp: '+918850562032',
  instagram: 'https://www.instagram.com/nivas.interior/',
  facebook: 'https://www.instagram.com/nivas.interior/',
  pinterest: 'https://www.instagram.com/nivas.interior/',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Our Process', href: '/process' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    id: 'living-room',
    title: 'Living Room Interiors',
    slug: 'living-room-interiors',
    description: 'Elegant living spaces designed for comfort, conversation and style.',
    longDescription:
      'Your living room is the heart of your home. We craft living spaces that balance aesthetics and function — curating furniture, lighting, textures and art to create a space that reflects your personality and welcomes everyone who enters.',
    features: [
      'Custom furniture layout planning',
      'Accent wall and panelling design',
      'Lighting design and placement',
      'Sofa and seating selection',
      'Rug, cushion and décor curation',
      'TV unit and display wall integration',
    ],
    benefits: [
      'Thoughtful space planning that maximises comfort',
      'Cohesive colour palette and material selection',
      'Personalised aesthetic that reflects your lifestyle',
    ],
    image: '/images/services/living-room.jpg',
    category: 'Residential',
  },
  {
    id: 'bedroom',
    title: 'Bedroom Interiors',
    slug: 'bedroom-interiors',
    description: 'Restful sanctuaries designed for calm, comfort and personal expression.',
    longDescription:
      'A bedroom should be a sanctuary — a place of rest and renewal. We design bedrooms that balance tranquility and personality, creating spaces where every element contributes to a sense of peace and comfort.',
    features: [
      'Bed frame and headboard design',
      'Wardrobe integration and planning',
      'Ambient and task lighting',
      'Bedside unit and storage solutions',
      'Soft furnishing selection',
      'Accent elements and artwork',
    ],
    benefits: [
      'Calming colour palettes tailored to your preference',
      'Optimised storage without visual clutter',
      'Personalised atmosphere for rest and relaxation',
    ],
    image: '/images/services/bedroom.jpg',
    category: 'Residential',
  },
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen',
    slug: 'modular-kitchen',
    description: 'Functional, beautiful kitchens designed around how you cook and live.',
    longDescription:
      'A well-designed kitchen is the engine of a home. We create modular kitchens that are as beautiful as they are functional — optimising workflow, maximising storage and choosing materials that are durable and elegant.',
    features: [
      'L-shape, U-shape and island layouts',
      'Custom modular cabinet planning',
      'Countertop material selection',
      'Appliance integration and placement',
      'Backsplash design',
      'Under-cabinet and accent lighting',
    ],
    benefits: [
      'Ergonomic workflow and space optimisation',
      'Premium materials with long-lasting durability',
      'Intelligent storage for every utensil and appliance',
    ],
    image: '/images/services/modular-kitchen.jpg',
    category: 'Residential',
  },
  {
    id: 'wardrobe-design',
    title: 'Wardrobe Design',
    slug: 'wardrobe-design',
    description: 'Custom wardrobes with intelligent storage tailored to your wardrobe.',
    longDescription:
      'A thoughtfully designed wardrobe transforms morning routines. We create custom wardrobe solutions — from walk-in closets to sliding door wardrobes — with intelligent compartments, lighting and finishes that make storage both functional and beautiful.',
    features: [
      'Walk-in and built-in wardrobe designs',
      'Sliding, hinged and open wardrobe options',
      'Custom internal storage organisation',
      'Internal lighting integration',
      'Mirror panel options',
      'Premium hardware and finish selection',
    ],
    benefits: [
      'Maximum storage in minimum space',
      'Personalised organisation for your lifestyle',
      'Elegant finishes that complement your bedroom',
    ],
    image: '/images/services/wardrobe.jpg',
    category: 'Residential',
  },
  {
    id: 'tv-units',
    title: 'TV Units',
    slug: 'tv-units',
    description: 'Statement entertainment walls that anchor your living space with style.',
    longDescription:
      'A TV unit is more than a screen holder — it is a design statement. We create custom TV walls and entertainment units that balance screen placement, storage, lighting and aesthetics into a cohesive focal point.',
    features: [
      'Full-wall entertainment unit design',
      'Floating and floor-standing options',
      'Integrated storage and display shelving',
      'Concealed wire management',
      'LED cove and accent lighting',
      'Panel and veneer finish options',
    ],
    benefits: [
      'Clean, clutter-free entertainment zone',
      'Custom designed to your room dimensions',
      'Dramatic focal point with ambient lighting',
    ],
    image: '/images/services/tv-unit.jpg',
    category: 'Residential',
  },
  {
    id: 'false-ceiling',
    title: 'False Ceiling',
    slug: 'false-ceiling',
    description: 'Sophisticated ceiling designs that transform your spaces with light and form.',
    longDescription:
      'A false ceiling design can completely transform a space — adding depth, character and the perfect lighting architecture. We design gypsum, POP and wooden false ceilings that enhance every room.',
    features: [
      'Gypsum and POP false ceiling design',
      'Cove lighting and LED strip integration',
      'Coffered and tray ceiling designs',
      'Wooden slat ceiling options',
      'Acoustic ceiling panels',
      'Ceiling fan and light fitting planning',
    ],
    benefits: [
      'Enhanced lighting atmosphere and ambience',
      'Concealment of electrical and AC ducting',
      'Added visual height and architectural interest',
    ],
    image: '/images/services/false-ceiling.jpg',
    category: 'Residential',
  },
  {
    id: 'office-interiors',
    title: 'Office Interiors',
    slug: 'office-interiors',
    description: 'Professional workspaces designed to inspire productivity and reflect your brand.',
    longDescription:
      'A well-designed office communicates professionalism and inspires the people within it. We create office interiors for small studios, home offices and commercial spaces — designing spaces that are functional, motivating and brand-aligned.',
    features: [
      'Workstation and desk layout planning',
      'Meeting room and cabin design',
      'Reception and lobby design',
      'Storage and filing solutions',
      'Acoustic panel integration',
      'Branding and signage design',
    ],
    benefits: [
      'Productivity-enhancing workspace design',
      'Professional appearance that reflects your brand',
      'Ergonomic and comfortable work environment',
    ],
    image: '/images/services/office.jpg',
    category: 'Commercial',
  },
  {
    id: 'complete-home',
    title: 'Complete Home Interiors',
    slug: 'complete-home-interiors',
    description: 'End-to-end interior design for your entire home, seamlessly integrated.',
    longDescription:
      'Our complete home interior solution covers every space in your home — from entrance to balcony — with a unified design language, consistent materials and a seamless aesthetic that ties every room together.',
    features: [
      'Full home space planning and layout',
      'Unified design concept across all rooms',
      'Complete material and finish specification',
      'Furniture, lighting and décor coordination',
      'Contractor and vendor management',
      'Final styling and handover',
    ],
    benefits: [
      'Cohesive aesthetic throughout your entire home',
      'Single point of contact for the entire project',
      'Stress-free execution from concept to completion',
    ],
    image: '/images/services/complete-home.jpg',
    category: 'Residential',
  },
];

export const PROJECTS = [
  {
    id: '1',
    title: 'The Veranda Residence',
    category: 'Residential',
    location: 'Bangalore, India',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
    overview: 'A complete home transformation blending warm textures with clean contemporary lines.',
    concept: 'The design concept centred on creating a warm, grounded residence using natural materials, earthy tones and carefully curated furniture.',
    colors: ['#F7F4EE', '#C8B69E', '#80664F', '#292824'],
    materials: ['Travertine', 'Solid Oak', 'Linen', 'Brushed Brass'],
    gallery: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
    ],
  },
  {
    id: '2',
    title: 'Warm Living Suite',
    category: 'Living Room',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80',
    overview: 'A spacious living room designed around natural light and textural warmth.',
    concept: 'Maximising natural light while creating intimate conversation zones with layered textures.',
    colors: ['#F7F4EE', '#E9E1D5', '#C8B69E'],
    materials: ['Marble', 'Rattan', 'Linen', 'Teak'],
    gallery: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=80',
    ],
  },
  {
    id: '3',
    title: 'The Serenity Bedroom',
    category: 'Bedroom',
    location: 'Hyderabad, India',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&q=80',
    overview: 'A tranquil master bedroom sanctuary with custom walnut panelling and soft linen.',
    concept: 'Creating a hotel-like retreat that feels deeply personal and utterly restful.',
    colors: ['#292824', '#F7F4EE', '#C8B69E'],
    materials: ['Walnut Wood', 'Linen', 'Marble', 'Velvet'],
    gallery: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    ],
  },
  {
    id: '4',
    title: 'Modern Chef\'s Kitchen',
    category: 'Kitchen',
    location: 'Pune, India',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
    overview: 'A sleek, functional kitchen designed for serious cooking and elegant entertaining.',
    concept: 'Blending professional functionality with residential warmth through material contrast.',
    colors: ['#292824', '#FFFFFF', '#C8B69E'],
    materials: ['Quartz', 'Lacquered MDF', 'Stainless Steel', 'Oak Veneer'],
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
      'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=900&q=80',
    ],
  },
  {
    id: '5',
    title: 'The Studio Office',
    category: 'Commercial',
    location: 'Chennai, India',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
    overview: 'A creative studio workspace balancing collaboration zones with focused work areas.',
    concept: 'Designing a professional environment that inspires creativity and productivity.',
    colors: ['#F7F4EE', '#292824', '#C8B69E'],
    materials: ['Polished Concrete', 'Glass', 'Oak', 'Black Steel'],
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
    ],
  },
  {
    id: '6',
    title: 'Terracotta Living',
    category: 'Living Room',
    location: 'Delhi, India',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=80',
    overview: 'A warm, earthy living room inspired by Indian craftsmanship and contemporary design.',
    concept: 'Celebrating Indian craft traditions through contemporary spatial design.',
    colors: ['#C8B69E', '#80664F', '#F7F4EE'],
    materials: ['Terracotta', 'Jute', 'Brass', 'Sheesham Wood'],
    gallery: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=80',
    ],
  },
];

export const GALLERY_IMAGES = [
  { id: '1', category: 'Living Rooms', image: '/images/services/livingRoom.jpg', alt: 'Modern living room with neutral tones' },
  { id: '2', category: 'Bedrooms', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80', alt: 'Serene bedroom with wooden panelling' },
  { id: '3', category: 'Kitchens', image: '/images/services/modular-kitchen.jpg', alt: 'My kitchen interior design' },
  { id: '4', category: 'Living Rooms', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80', alt: 'Warm contemporary living space' },
  { id: '5', category: 'Wardrobes', image: '/images/services/wardrobe.jpg', alt: 'Custom built-in wardrobe design' },
  { id: '6', category: 'Offices', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80', alt: 'Contemporary office interior' },
  { id: '7', category: 'Living Rooms', image:'/images/services/details.jpg', alt: 'Elegant ceiling detail with lighting' },
  { id: '8', category: 'Living Rooms', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=700&q=80', alt: 'Earthy contemporary living room' },
  { id: '9', category: 'Bedrooms', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=700&q=80', alt: 'Minimalist bedroom with warm accents' },
  { id: '10', category: 'Kitchens', image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=700&q=80', alt: 'Elegant white kitchen with marble' },
  { id: '11', category: 'Living Rooms', image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=700&q=80', alt: 'Luxury living room with fireplace' },
  { id: '12', category: 'Offices', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=80', alt: 'Bright modern office space' },
  { id: '13', category: 'Wardrobes', image: 'images/war.jpg', alt: 'Walk-in wardrobe with island' },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Priya Sharma',
    project: 'Complete Home Interiors',
    location: 'Bangalore',
    rating: 5,
    review:
      'The team at Nivas Interiors transformed our apartment into a space we are truly proud of. Every detail was considered and the final result exceeded our expectations. We cannot imagine our home looking any other way.',
  },
  {
    id: '2',
    name: 'Arjun Mehta',
    project: 'Living Room & Bedroom',
    location: 'Mumbai',
    rating: 5,
    review:
      'Professional, thoughtful and genuinely passionate about their work. They understood our vision from the very first consultation and brought it to life beautifully. The quality of materials and finishes is outstanding.',
  },
  {
    id: '3',
    name: 'Kavitha Reddy',
    project: 'Modular Kitchen',
    location: 'Hyderabad',
    rating: 5,
    review:
      'Our new kitchen is everything we dreamed of. The design is both stunning and incredibly functional. The team was patient, communicative and delivered everything on time. Highly recommend Nivas Interiors.',
  },
  {
    id: '4',
    name: 'Suresh Nair',
    project: 'Office Interiors',
    location: 'Chennai',
    rating: 5,
    review:
      'They designed our office beautifully. The space now reflects our brand perfectly and our team absolutely loves working in it. Very professional approach from planning to execution.',
  },
  {
    id: '5',
    name: 'Anjali Patel',
    project: 'Bedroom & Wardrobe',
    location: 'Ahmedabad',
    rating: 5,
    review:
      'The bedroom and wardrobe design is absolutely stunning. The team listened carefully to our needs and delivered a space that feels both luxurious and personal. Could not be happier with the outcome.',
  },
];

export const FAQS = [
  {
    q: 'What services does Nivas Interiors provide?',
    a: 'Nivas Interiors offers a comprehensive range of interior design services including living room interiors, bedroom interiors, modular kitchens, wardrobe design, TV units, false ceiling design, office interiors and complete home interior solutions.',
  },
  {
    q: 'Do you offer complete home interior solutions?',
    a: 'Yes. Our complete home interior service covers every space in your home — from the entrance and living areas to bedrooms, kitchen, bathrooms and balconies — with a unified design concept and seamless execution.',
  },
  {
    q: 'Can I customise my interior design?',
    a: 'Absolutely. Every project we undertake is fully customised to reflect your lifestyle, preferences, budget and the unique character of your space. We do not work with pre-made templates.',
  },
  {
    q: 'How does the consultation process work?',
    a: 'We begin with an initial consultation — either in-person or virtual — where we understand your needs, preferences, budget and timeline. Following this, we prepare a design concept and proposal tailored to your project.',
  },
  {
    q: 'Do you work with different budgets?',
    a: 'Yes. We work with a range of budgets and tailor our design recommendations and material selections accordingly. We are committed to delivering maximum value at every budget level.',
  },
  {
    q: 'How long does an interior project take?',
    a: 'Project timelines vary depending on the scope of work. A single room typically takes 4–8 weeks, while a complete home interior project may take 3–6 months. We provide a detailed timeline during the planning phase.',
  },
  {
    q: 'Can I see your previous projects?',
    a: 'Yes. You can explore our portfolio in the Projects section of our website. We also encourage you to visit our showroom or schedule a consultation where we can share additional project references.',
  },
  {
    q: 'How can I book a consultation?',
    a: 'You can book a consultation through our Contact page, by calling us directly or by reaching out via WhatsApp. We will get back to you within 24 hours to schedule your initial meeting.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Consultation',
    description:
      'We begin by listening. Our first conversation is about understanding your space, your lifestyle, your aspirations and your budget. This forms the foundation of everything we design.',
    details: [
      'In-person or virtual site visit',
      'Lifestyle and preference discussion',
      'Budget and timeline alignment',
      'Initial concept direction',
    ],
  },
  {
    step: '02',
    title: 'Concept & Planning',
    description:
      'We translate your brief into a detailed design concept — floor plans, mood boards, material palettes and 3D visualisations — so you can see your space before it is built.',
    details: [
      'Space planning and layout design',
      'Mood board and colour palette',
      '3D design visualisations',
      'Material and finish specification',
    ],
  },
  {
    step: '03',
    title: 'Design & Execution',
    description:
      'Once the design is approved, our team brings it to life with precision and care — coordinating materials, craftsmen and installations to deliver exactly what was envisioned.',
    details: [
      'Material procurement and quality checks',
      'Skilled craftsman coordination',
      'Regular progress updates',
      'Strict quality control at every stage',
    ],
  },
  {
    step: '04',
    title: 'Final Handover',
    description:
      'We walk through every detail of the completed space together, ensure everything meets the highest standard, and hand over your transformed home with pride.',
    details: [
      'Thorough quality inspection',
      'Final styling and accessorising',
      'Client walkthrough and sign-off',
      'Aftercare and support guidance',
    ],
  },
];
