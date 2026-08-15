import arya from '../assets/images/projects/arya.webp';
import ira from '../assets/images/projects/ira.webp';
import vivanta from '../assets/images/projects/vivanta.png';
import kingscourt from '../assets/images/projects/kings-court.webp';

export const PROJECTS_DATA = [
  {
    id: 1,
    slug: "tcj-vivanta",
    projectName: "TCJ Vivanta",
    developer: "TCJ Realty",
    tagline: "Where Luxury Meets Legacy",
    reraNumber: "P51700047140",
    status: "OC Received",
    image: vivanta.src ,
    location: {
      address: "Thakurpada Road, Javsai Gaon, Ambernath (W), Maharashtra 421501",
      neighborhood: "Ambernath West",
      description: "Hilltop location overlooking Javsai with picturesque views."
    },
    overview: {
      description: "A 7.5-acre residential community in Ambernath offering thoughtfully designed 1 & 2 BHK homes, open spaces and everyday conveniences — created for families looking for a better quality of life.",
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
      { name: "Library", icon: "Library" },
      { name: "Indoor Games", icon: "Gamepad2" },
      { name: "Kids Swimming Pool", icon: "Waves" },
      { name: "Landscaped Entrance Drive", icon: "Trees" },
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
      { landmark: "Ambernath Station", distance: "7 mins" },
      { landmark: "Balajee Hospital", distance: "1 min" },
      { landmark: "OFA Hospital", distance: "7 mins" },
      { landmark: "Sushrut Hospital", distance: "7 mins" },
      { landmark: "Gurukul School", distance: "1 min" },
      { landmark: "Kendriya Vidyalaya", distance: "7 mins" },
      { landmark: "MPF Sports Ground", distance: "3 mins" },
      { landmark: "Lord Murugan Temple", distance: "1 min" },
      { landmark: "Shree Ayyappa Temple", distance: "2 mins" },
      { landmark: "Matka Chowk", distance: "6 mins" },
      { landmark: "D Mart", distance: "7 mins" }
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
    image: arya.src,
    location: {
      address: "Near Podar International School, Kalyan (W), Maharashtra 421501",
      neighborhood: "Kalyan West"
    },
    overview: {
      description: "TCJ Arya is an intimate, low-density residential address featuring thoughtfully planned, spacious 1 BHK homes. Designed for those who prefer more space, greater privacy, and a quieter way of living.",
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
      { landmark: "Aayush Multispeciality Hospital	", distance: "5 mins" },
      { landmark: "Birla College	", distance: "6 mins" },
      { landmark: "D-Mart, Godrej Hill ", distance: "3 mins" },
      { landmark: "Narayana eTechno School	", distance: "5 mins" },
      { landmark: "Podar International School", distance: "6 mins" },
      { landmark: "The Cambria International School", distance: "6 mins" },
      { landmark: "VIBGYOR Roots & Rise, Khadakpada ", distance: "5 mins" }
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
    image: ira.src ,
    location: {
      address: "Opposite Balajee Hospital, Kalyan West, Maharashtra 421501",
      neighborhood: "Kalyan West"
    },
    overview: {
      description: "TCJ Ira is a low-density residential development offering spacious 1 & 2 BHK homes in a more private, intimate setting. Designed for families who value comfort, efficient planning, and a quieter everyday lifestyle.",
      totalFloors: "Towering structure with scenic city views"
    },
    configurations: [
      { type: "1 BHK Luxe", carpetArea: "400+ Sq. Ft." },
      { type: "2 BHK Luxe", carpetArea: "600+ Sq. Ft." }
    ],
    amenities: [
      { name: "Grand Entrance Lobby", icon: "Sparkles" },
      { name: "Elevators with Power Backup", icon: "Zap" },
      { name: "24x7 CCTV Surveillance", icon: "Video" },
      { name: "Intercom Facility", icon: "PhoneCall" },
      { name: "Gated Community", icon: "ShieldCheck" },
      { name: "Fire Fighting System", icon: "Flame" },
      { name: "Stilt Parking", icon: "Car" },
      { name: "Common Duct for AC piping", icon: "Thermometer" }
    ],
    specifications: {
      flooring: "Large format Vitrified Tiles",
      kitchen: "Main & Service Granite Platforms, Loft for storage",
      bathrooms: "High-end CP & Sanitary fittings, Concealed plumbing",
      windows: "Heavy section Aluminium sliding windows",
      security: "Video Door Phone, 3-tier security"
    },
    connectivity: [
      { landmark: "Aayush Multispeciality Hospital	", distance: "5 mins" },
      { landmark: "Birla College	", distance: "6 mins" },
      { landmark: "D-Mart, Godrej Hill ", distance: "3 mins" },
      { landmark: "Narayana eTechno School	", distance: "5 mins" },
      { landmark: "Podar International School", distance: "6 mins" },
      { landmark: "The Cambria International School", distance: "6 mins" },
      { landmark: "VIBGYOR Roots & Rise, Khadakpada ", distance: "5 mins" }
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
    image: kingscourt.src ,
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