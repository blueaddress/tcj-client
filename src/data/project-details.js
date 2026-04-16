export const PROJECTS_DATA = [
  {
    id: 1,
    slug: "tcj-vivanta",
    projectName: "TCJ Vivanta",
    developer: "TCJ Realty",
    tagline: "Where Luxury Meets Legacy",
    reraNumber: "P51700047140",
    status: "Ready to Move (OC Received)",
    image: "/images/projects/vivanta.jpg",
    location: {
      address: "Thakurpada Road, Javsai Gaon, Ambernath (W), Maharashtra 421501",
      neighborhood: "Ambernath West",
      description: "Hilltop location overlooking Javsai with picturesque views."
    },
    overview: {
      description: "Meticulously crafted residential haven featuring 4 towers of 7 floors each. Designed with an open-concept floor plan connecting living, dining, and kitchen areas. Includes a grand foyer with high ceilings.",
      totalUnits: 144,
      totalTowers: 4,
      totalFloors: 7,
      landArea: "0.72 Acres"
    },
    configurations: [
      { type: "1 BHK", carpetArea: "347 - 465 Sq. Ft.", price: "₹31.00 Lac onwards" },
      { type: "2 BHK", carpetArea: "467 - 657 Sq. Ft.", price: "₹40.00 Lac onwards" }
    ],
    amenities: [
      { name: "Designer Entrance Lobby", icon: "Sparkles" },
      { name: "KONE High-speed Elevators", icon: "ArrowUpCircle" },
      { name: "Lobby Drop-off Area", icon: "Map" },
      { name: "Gymnasium", icon: "Dumbbell" },
      { name: "Grand Clubhouse", icon: "Landmark" },
      { name: "Community Hall", icon: "Users" },
      { name: "Library", icon: "Library" },
      { name: "Indoor Games", icon: "Gamepad2" },
      { name: "Kids Swimming Pool", icon: "Waves" },
      { name: "Landscaped Entrance Drive", icon: "Trees" },
      { name: "Central Green Park", icon: "Trees" },
      { name: "Kids Play Area", icon: "Baby" },
      { name: "Yoga & Meditation Area", icon: "Wind" },
      { name: "Jogging Track", icon: "Construction" },
      { name: "Rainwater Harvesting", icon: "Droplets" }
    ],
    specifications: {
      flooring: "Branded Vitrified Tiles (Kajaria/NITCO)",
      kitchen: "Granite Main & Service Platforms, Stainless Steel Sink, Utility Lofts",
      bathrooms: "Branded CP Fittings (Jaquar/Essco), Designer Wall Tiles",
      windows: "Powder-coated Aluminium Windows",
      livingRoom: "Decorative False Ceiling"
    },
    connectivity: [
      { landmark: "Ambernath Station", distance: "2.5 km" },
      { landmark: "Kalyan Badlapur Road", distance: "2 km" },
      { landmark: "D Mart", distance: "Proximity" }
    ]
  },
  {
    id: 2,
    slug: "tcj-arya",
    projectName: "TCJ Arya",
    developer: "TCJ Realty",
    tagline: "Elegant Living Redefined",
    reraNumber: "P51700029352",
    status: "Ready to Move",
    image: "/images/projects/arya.jpg",
    location: {
      address: "Near Podar International School, Ambernath (W), Maharashtra 421501",
      neighborhood: "Ambernath West"
    },
    overview: {
      description: "A symbol of modern architecture focused on maximizing natural light and ventilation. Modern urban retreat designed for comfort and efficiency.",
      totalFloors: "Ground + 7"
    },
    configurations: [
      { type: "1 BHK", carpetArea: "Standard" },
      { type: "2 BHK", carpetArea: "Standard" }
    ],
    amenities: [
      { name: "Grand Entrance Lobby", icon: "Sparkles" },
      { name: "Elevators with Power Backup", icon: "Zap" },
      { name: "24x7 CCTV Surveillance", icon: "Video" },
      { name: "Intercom Facility", icon: "PhoneCall" },
      { name: "Gated Community", icon: "ShieldCheck" },
      { name: "Fire Fighting System", icon: "Flame" },
      { name: "Refuge Area", icon: "ShieldAlert" },
      { name: "Stilt Parking", icon: "Car" },
      { name: "Common Duct for AC piping", icon: "Thermometer" }
    ],
    specifications: {
      flooring: "Premium Vitrified Flooring in all rooms",
      kitchen: "Black Granite Platform, Glazed tiles up to beam level",
      bathrooms: "Anti-skid tiles, Premium Sanitary ware",
      walls: "Internal Gypsum finish, External Acrylic paint",
      electrical: "Concealed Copper wiring with modular switches"
    },
    connectivity: [
      { landmark: "Podar International School", distance: "0.2 km" },
      { landmark: "Ambernath Station", distance: "1.8 km" },
      { landmark: "Suryodaya Hospital", distance: "1.0 km" }
    ]
  },
  {
    id: 3,
    slug: "tcj-ira",
    projectName: "Ira by TCJ Realty",
    developer: "TCJ Realty",
    tagline: "Luxury Beyond Boundaries",
    reraNumber: "P51700051187",
    status: "Ongoing",
    image: "/images/projects/ira.jpg",
    location: {
      address: "Opposite Balajee Hospital, Ambernath West, Maharashtra 421501",
      neighborhood: "Ambernath West"
    },
    overview: {
      description: "Premium development emphasizing high-end specifications and lifestyle conveniences. Features a rooftop 'Sky Lifestyle' concept for elevated living.",
      totalFloors: "Towering structure with scenic city views"
    },
    configurations: [
      { type: "1 BHK Luxe", carpetArea: "400+ Sq. Ft." },
      { type: "2 BHK Luxe", carpetArea: "600+ Sq. Ft." }
    ],
    amenities: [
      { name: "Rooftop Sky Garden", icon: "Trees" },
      { name: "State-of-the-art Fitness Center", icon: "Dumbbell" },
      { name: "Automated Elevators", icon: "ArrowUpCircle" },
      { name: "Elegant Lobby", icon: "Sparkles" },
      { name: "Landscaped Sit-outs", icon: "LayoutGrid" },
      { name: "EV Charging Station Points", icon: "Zap" },
      { name: "Rainwater Harvesting", icon: "Droplets" },
      { name: "Advanced Fire Safety", icon: "Flame" },
      { name: "Reserved Stilt Parking", icon: "Car" }
    ],
    specifications: {
      flooring: "Large format Vitrified Tiles",
      kitchen: "Main & Service Granite Platforms, Loft for storage",
      bathrooms: "High-end CP & Sanitary fittings, Concealed plumbing",
      windows: "Heavy section Aluminium sliding windows",
      security: "Video Door Phone, 3-tier security"
    },
    connectivity: [
      { landmark: "Balajee Hospital", distance: "Immediate" },
      { landmark: "Forest Naka", distance: "0.5 km" },
      { landmark: "Ambernath West Market", distance: "1.2 km" }
    ]
  },
  {
    id: 4,
    slug: "kings-court",
    projectName: "Kings Court",
    developer: "TCJ Realty",
    tagline: "Live Like Royalty",
    reraNumber: "P51700020120",
    status: "Completed / Ready to Move",
    image: "/images/projects/kings-court.jpg",
    location: {
      address: "Khojgaon, Ambernath West, Maharashtra 421501",
      neighborhood: "Ambernath West"
    },
    overview: {
      description: "Majestic living experience with expansive layouts. Known for its robust construction quality and central location in Khojgaon.",
      composition: "Residential Apartments & Commercial Hub"
    },
    configurations: [
      { type: "1 BHK", price: "All-inclusive pricing" },
      { type: "2 BHK", price: "All-inclusive pricing" },
      { type: "Commercial Shops", area: "Ground floor" }
    ],
    amenities: [
      { name: "Landscaped Garden", icon: "Trees" },
      { name: "Children's Play Zone", icon: "Baby" },
      { name: "Gated Security", icon: "ShieldCheck" },
      { name: "24x7 Water Supply", icon: "Droplets" },
      { name: "Power Backup for Lifts", icon: "Zap" },
      { name: "Rainwater Harvesting", icon: "Droplets" },
      { name: "Internal Roads with Paving", icon: "Map" },
      { name: "Branded Elevators", icon: "ArrowUpCircle" }
    ],
    specifications: {
      flooring: "Vitrified tiles in all rooms",
      kitchen: "Granite platform with SS sink",
      bathrooms: "Full height wall tiles, Branded fittings",
      doors: "Decorative main door with premium hardware",
      walls: "Internal Oil Bound Distemper, External Sand faced plaster"
    },
    connectivity: [
      { landmark: "Ambernath Station", distance: "2.0 km" },
      { landmark: "Chaitanya Hospital", distance: "0.8 km" },
      { landmark: "Weekly Market", distance: "Proximity" }
    ]
  }
];