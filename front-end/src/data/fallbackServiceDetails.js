/**
 * Fallback service details data to use when API fails
 */
export const fallbackServiceDetails = {
  'Full Wedding Planning': {
    title: 'Full Wedding Planning',
    image: '/image/venue/5d4f0eb3326ec13db043a54d_beautiful-bouquet-bride-2253843.jpg',
    description: 'Our comprehensive wedding planning service takes care of every detail from start to finish. We handle venue selection, vendor coordination, timeline creation, budget management, and day-of execution so you can focus on enjoying your special day.',
    features: [
      'Initial consultation and vision planning',
      'Venue selection and booking assistance',
      'Vendor recommendations and coordination',
      'Budget creation and management',
      'Timeline development and scheduling',
      'Guest list management',
      'RSVP tracking',
      'Day-of coordination and execution',
      'Post-wedding wrap-up services'
    ],
    pricing: 'Starting at $3,500',
    timeline: '12-18 months before wedding date'
  },
  'Floral Design': {
    title: 'Floral Design',
    image: '/image/cake/golden-3.jpg',
    description: 'Our expert floral designers create stunning arrangements that bring your wedding vision to life. From bouquets and boutonnieres to centerpieces and ceremony décor, we use the freshest blooms to create unforgettable floral experiences.',
    features: [
      'Initial consultation and design concept',
      'Custom bouquets and boutonnieres',
      'Ceremony floral arrangements',
      'Reception centerpieces and table décor',
      'Cake flowers and special accent pieces',
      'Delivery and setup on wedding day',
      'Post-event cleanup and removal'
    ],
    pricing: 'Starting at $1,800',
    timeline: '6-8 months before wedding date'
  },
  'Photography & Video': {
    title: 'Photography & Video',
    image: '/image/cake/golden-3.jpg',
    description: 'Our talented photographers and videographers capture every magical moment of your wedding day. From getting ready to the last dance, we document your celebration with a perfect blend of candid emotions and artistic portraits.',
    features: [
      'Engagement photo session',
      'Full-day wedding coverage',
      'Second shooter for comprehensive coverage',
      'Professional editing and color correction',
      'Online gallery of high-resolution images',
      'Custom wedding album design',
      'Highlight video (3-5 minutes)',
      'Full ceremony and reception video'
    ],
    pricing: 'Starting at $2,800',
    timeline: '9-12 months before wedding date'
  },
  'Catering & Cake': {
    title: 'Catering & Cake',
    image: '/image/cake/golden-3.jpg',
    description: 'Our culinary team creates memorable dining experiences for you and your guests. From elegant plated dinners to casual buffets, we customize menus to match your taste and style. Our pastry chefs design stunning wedding cakes that are as delicious as they are beautiful.',
    features: [
      'Menu consultation and tasting',
      'Customized menu planning',
      'Dietary accommodation options',
      'Professional service staff',
      'Complete setup and cleanup',
      'Bar service and signature cocktails',
      'Custom cake design consultation',
      'Dessert table options'
    ],
    pricing: 'Starting at $75 per person',
    timeline: '6-8 months before wedding date'
  }
};


export  const fallbackVendors = {
  'Full Wedding Planning': [
    {
      id: 'wp-1',
      name: 'Elite Wedding Planners',
      image: '/images/vendors/wedding-planner-1.jpg',
      description: 'Award-winning wedding planners with over 15 years of experience creating dream weddings.',
      rating: 4.9,
      reviewCount: 127,
      pricing: 'Starting at $4,500',
      location: 'New York, NY'
    },
    {
      id: 'wp-2',
      name: 'Blissful Beginnings',
      image: '/images/vendors/wedding-planner-2.jpg',
      description: 'Specializing in personalized wedding experiences that reflect your unique love story.',
      rating: 4.8,
      reviewCount: 98,
      pricing: 'Starting at $3,800',
      location: 'Boston, MA'
    },
    {
      id: 'wp-3',
      name: 'Forever Moments Planning',
      image: '/images/vendors/wedding-planner-3.jpg',
      description: 'Creating timeless celebrations with attention to every detail and personalized service.',
      rating: 4.7,
      reviewCount: 85,
      pricing: 'Starting at $3,200',
      location: 'Chicago, IL'
    }
  ],
  'Floral Design': [
    {
      id: 'fd-1',
      name: 'Blooming Elegance',
      image: '/images/vendors/florist-1.jpg',
      description: 'Luxury floral designs using seasonal blooms to create stunning arrangements for your special day.',
      rating: 4.9,
      reviewCount: 112,
      pricing: 'Starting at $2,200',
      location: 'Miami, FL'
    },
    {
      id: 'fd-2',
      name: 'Petal & Stem',
      image: '/images/vendors/florist-2.jpg',
      description: 'Eco-friendly floral studio specializing in garden-inspired arrangements and sustainable practices.',
      rating: 4.8,
      reviewCount: 76,
      pricing: 'Starting at $1,800',
      location: 'Portland, OR'
    },
    {
      id: 'fd-3',
      name: 'Floral Symphony',
      image: '/images/vendors/florist-3.jpg',
      description: 'Creating breathtaking floral experiences that transform venues into romantic wonderlands.',
      rating: 4.7,
      reviewCount: 93,
      pricing: 'Starting at $2,000',
      location: 'San Francisco, CA'
    }
  ],
  'Photography & Video': [
    {
      id: 'pv-1',
      name: 'Captured Moments',
      image: '/images/vendors/photographer-1.jpg',
      description: 'Documentary-style photography capturing authentic emotions and candid moments of your celebration.',
      rating: 4.9,
      reviewCount: 145,
      pricing: 'Starting at $3,200',
      location: 'Los Angeles, CA'
    },
    {
      id: 'pv-2',
      name: 'Timeless Visuals',
      image: '/images/vendors/photographer-2.jpg',
      description: 'Fine art photography and cinematic videography for couples who value artistic storytelling.',
      rating: 4.8,
      reviewCount: 118,
      pricing: 'Starting at $3,800',
      location: 'Seattle, WA'
    },
    {
      id: 'pv-3',
      name: 'Love in Focus',
      image: '/images/vendors/photographer-3.jpg',
      description: 'Husband and wife team offering both photography and videography with a romantic, editorial style.',
      rating: 4.7,
      reviewCount: 87,
      pricing: 'Starting at $2,900',
      location: 'Nashville, TN'
    }
  ],
  'Catering & Cake': [
    {
      id: 'cc-1',
      name: 'Gourmet Celebrations',
      image: '/images/vendors/caterer-1.jpg',
      description: 'Farm-to-table catering with customized menus featuring seasonal ingredients and global influences.',
      rating: 4.9,
      reviewCount: 132,
      pricing: 'Starting at $85 per person',
      location: 'Austin, TX'
    },
    {
      id: 'cc-2',
      name: 'Sweet Creations Bakery',
      image: '/images/vendors/baker-1.jpg',
      description: 'Award-winning cake designs that taste as amazing as they look, with custom flavors and decorations.',
      rating: 4.8,
      reviewCount: 104,
      pricing: 'Starting at $8 per serving',
      location: 'Denver, CO'
    },
    {
      id: 'cc-3',
      name: 'Culinary Delights',
      image: '/images/vendors/caterer-2.jpg',
      description: 'Full-service catering and cake design with a focus on luxury presentation and exceptional taste.',
      rating: 4.7,
      reviewCount: 91,
      pricing: 'Starting at $95 per person',
      location: 'Atlanta, GA'
    }
  ]
};

// Fallback data for when API is not available
export const fallbackVendorData = {
  id: "v1",
  name: "Elegant Events",
  image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
  description: "Elegant Events is a premier wedding planning service with over 10 years of experience creating memorable celebrations. Our team of dedicated professionals will handle every detail of your special day.",
  rating: 4.8,
  reviewCount: 124,
  location: "New York, NY",
  contactEmail: "info@elegantevents.com",
  contactPhone: "(555) 123-4567",
  website: "https://www.elegantevents.com",
  packages: [
    {
      id: "p1",
      name: "Silver Package",
      description: "Our basic package includes venue selection assistance, vendor recommendations, and day-of coordination.",
      price: 2500,
      features: [
        "Venue selection assistance",
        "Vendor recommendations",
        "Day-of coordination (8 hours)",
        "Timeline creation",
        "Budget management"
      ]
    },
    {
      id: "p2",
      name: "Gold Package",
      description: "Our most popular package includes everything in Silver plus full planning services and premium vendor access.",
      price: 5000,
      features: [
        "Everything in Silver package",
        "Full planning services",
        "Premium vendor access",
        "Guest list management",
        "RSVP tracking",
        "Rehearsal dinner coordination",
        "Extended day-of coverage (12 hours)"
      ]
    },
    {
      id: "p3",
      name: "Platinum Package",
      description: "Our all-inclusive luxury package with personalized service and exclusive vendor partnerships.",
      price: 8500,
      features: [
        "Everything in Gold package",
        "Personalized wedding design",
        "Exclusive vendor partnerships",
        "Custom wedding website",
        "Honeymoon planning assistance",
        "Wedding weekend activities coordination",
        "Post-wedding brunch planning",
        "Unlimited consultations",
        "Premium day-of coverage (16 hours)"
      ]
    }
  ]
};
