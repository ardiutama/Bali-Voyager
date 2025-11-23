import { Area, Regency } from './types';

export const BALI_REGENCIES: Regency[] = [
  { id: 'badung', name: 'Badung' },
  { id: 'bangli', name: 'Bangli' },
  { id: 'buleleng', name: 'Buleleng' },
  { id: 'denpasar', name: 'Denpasar' },
  { id: 'gianyar', name: 'Gianyar' },
  { id: 'jembrana', name: 'Jembrana' },
  { id: 'karangasem', name: 'Karangasem' },
  { id: 'klungkung', name: 'Klungkung' },
  { id: 'tabanan', name: 'Tabanan' },
];

export const BALI_AREAS: Area[] = [
  // BADUNG
  {
    id: 'kuta',
    name: 'Kuta',
    description: 'Iconic beach area known for surfing, shopping malls, and vibrant nightlife.',
    regencyId: 'badung',
    coordinates: { lat: -8.7185, lng: 115.1686 },
    tourPackage: {
      title: "Kuta Sunset & Shopping Spree",
      duration: "6 Hours",
      price: "IDR 400.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Private Transport", "Shopping Mall Drop-off", "Sunset Drink Voucher", "Dinner"],
      description: "Experience the vibrant energy of Kuta with a guided shopping tour followed by a classic sunset on the beach."
    }
  },
  {
    id: 'seminyak',
    name: 'Seminyak',
    description: 'Upscale beach resort area with high-end boutiques, beach clubs, and dining.',
    regencyId: 'badung',
    coordinates: { lat: -8.6829, lng: 115.1547 },
    tourPackage: {
      title: "Seminyak Lifestyle & Beach Club Pass",
      duration: "8 Hours",
      price: "IDR 750.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Beach Club Entry", "Cocktail Class", "Private Driver", "Boutique Discount Card"],
      description: "A chic day out exploring the best boutiques and relaxing at a premium beach club."
    }
  },
  {
    id: 'canggu',
    name: 'Canggu',
    description: 'Hip coastal village popular with digital nomads, offering surf breaks and cafes.',
    regencyId: 'badung',
    coordinates: { lat: -8.6478, lng: 115.1385 },
    tourPackage: {
      title: "Canggu Surf & Cafe Hopping",
      duration: "Full Day (10 Hours)",
      price: "IDR 600.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Surf Lesson (2 Hours)", "Brunch Voucher", "Private Transport", "Coconut at Sunset"],
      description: "Catch your first wave and enjoy the best brunch spots in Bali's trendiest neighborhood."
    }
  },
  {
    id: 'uluwatu',
    name: 'Uluwatu',
    description: 'Famous for the cliff-top Pura Luhur temple and world-class surfing waves.',
    regencyId: 'badung',
    coordinates: { lat: -8.8291, lng: 115.0849 },
    tourPackage: {
      title: "Uluwatu Temple & Kecak Fire Dance",
      duration: "5 Hours",
      price: "IDR 500.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Temple Entrance Fee", "Kecak Dance Ticket", "Private Transport", "Seafood Dinner Add-on"],
      description: "Witness the dramatic cliffside temple and the mesmerizing Kecak dance at sunset."
    }
  },
  {
    id: 'nusadua',
    name: 'Nusa Dua',
    description: 'Gated enclave of luxury five-star resorts, golf courses, and pristine beaches.',
    regencyId: 'badung',
    coordinates: { lat: -8.7946, lng: 115.2243 },
    tourPackage: {
      title: "Nusa Dua Water Sports & Relaxation",
      duration: "6 Hours",
      price: "IDR 800.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Parasailing & Banana Boat", "Lunch", "Hotel Transfer", "Access to Private Beach"],
      description: "Adrenaline pumping water sports followed by relaxation on the most pristine beaches in Bali."
    }
  },
  {
    id: 'jimbaran',
    name: 'Jimbaran',
    description: 'Fishing village famous for its seafood restaurants on the sand and sunsets.',
    regencyId: 'badung',
    coordinates: { lat: -8.78, lng: 115.17 },
    tourPackage: {
      title: "Jimbaran Seafood Romantic Dinner",
      duration: "4 Hours",
      price: "IDR 550.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Seafood Platter for 2", "Sunset View Seating", "Hotel Transfer", "Welcome Drink"],
      description: "The ultimate romantic evening dining on fresh grilled seafood right on the sand."
    }
  },
  {
    id: 'gwk',
    name: 'GWK Cultural Park',
    description: 'Home to the massive Garuda Wisnu Kencana statue and cultural performances.',
    regencyId: 'badung',
    coordinates: { lat: -8.8104, lng: 115.1676 },
    tourPackage: {
      title: "GWK Cultural Heritage Tour",
      duration: "4 Hours",
      price: "IDR 350.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Entrance Ticket", "Buggy Ride", "Cultural Show", "Private Transfer"],
      description: "Explore the massive iconic statue and enjoy traditional Balinese dance performances."
    }
  },
  {
    id: 'pandawa',
    name: 'Pandawa Beach',
    description: 'Beautiful white sand beach hidden behind limestone cliffs with large statues.',
    regencyId: 'badung',
    coordinates: { lat: -8.8465, lng: 115.1856 },
    tourPackage: {
      title: "Pandawa Beach & Canoe Fun",
      duration: "5 Hours",
      price: "IDR 300.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Canoe Rental (1 Hour)", "Sunbed", "Entry Ticket", "Private Transfer"],
      description: "Relax on the secret beach behind the cliffs and paddle through crystal clear waters."
    }
  },

  // DENPASAR
  {
    id: 'sanur',
    name: 'Sanur',
    description: 'Relaxed coastal town with a long paved beach walk, ideal for families and sunrises.',
    regencyId: 'denpasar',
    coordinates: { lat: -8.69, lng: 115.26 },
    tourPackage: {
      title: "Sanur Sunrise Cycling Tour",
      duration: "4 Hours",
      price: "IDR 250.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Bicycle Rental", "Breakfast by the Beach", "Guide", "Mineral Water"],
      description: "Catch the magical sunrise on Sanur beach followed by a leisurely cycle along the promenade."
    }
  },
  {
    id: 'denpasarcity',
    name: 'Denpasar City',
    description: 'The capital city, home to the Bajra Sandhi Monument and Bali Museum.',
    regencyId: 'denpasar',
    coordinates: { lat: -8.65, lng: 115.2166 },
    tourPackage: {
      title: "Denpasar Historical City Tour",
      duration: "5 Hours",
      price: "IDR 300.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Museum Ticket", "Bajra Sandhi Entry", "Local Market Tour", "Lunch"],
      description: "Dive into the history of Bali with visits to the central museum and historical monuments."
    }
  },
  {
    id: 'serangan',
    name: 'Serangan Island',
    description: 'Known for its turtle conservation center and water sports.',
    regencyId: 'denpasar',
    coordinates: { lat: -8.727, lng: 115.234 },
    tourPackage: {
      title: "Serangan Turtle Conservation Experience",
      duration: "3 Hours",
      price: "IDR 200.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Donation to Center", "Guided Tour", "Baby Turtle Release (Seasonal)", "Transfer"],
      description: "Learn about sea turtle conservation and interact with these gentle creatures."
    }
  },

  // GIANYAR
  {
    id: 'ubud',
    name: 'Ubud',
    description: 'The cultural center of Bali, famous for art museums, palaces, and yoga.',
    regencyId: 'gianyar',
    coordinates: { lat: -8.5069, lng: 115.2625 },
    tourPackage: {
      title: "Ubud Arts & Culture Immersion",
      duration: "Full Day (9 Hours)",
      price: "IDR 550.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Palace Entry", "Museum Ticket", "Art Market Visit", "Crispy Duck Lunch"],
      description: "Immerse yourself in Balinese art, visit the royal palace, and shop for traditional crafts."
    }
  },
  {
    id: 'tegallalang',
    name: 'Tegallalang',
    description: 'World-famous rice terraces offering stunning valley views and swings.',
    regencyId: 'gianyar',
    coordinates: { lat: -8.43, lng: 115.28 },
    tourPackage: {
      title: "Tegallalang Swing & Trek",
      duration: "5 Hours",
      price: "IDR 400.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Jungle Swing Ticket", "Rice Field Trekking Guide", "Coconut Drink", "Photo Service"],
      description: "Get the perfect Instagram shot on the jungle swing and trek through lush emerald rice fields."
    }
  },
  {
    id: 'tampaksiring',
    name: 'Tampaksiring',
    description: 'Home to Tirta Empul (Holy Water Temple) and Gunung Kawi ancient tombs.',
    regencyId: 'gianyar',
    coordinates: { lat: -8.41, lng: 115.31 },
    tourPackage: {
      title: "Spiritual Cleansing (Melukat) Tour",
      duration: "6 Hours",
      price: "IDR 450.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Tirta Empul Entry", "Offering (Canang)", "Sarong Rental", "Guide"],
      description: "Experience a traditional purification ritual at the sacred holy water spring."
    }
  },
  {
    id: 'sukawati',
    name: 'Sukawati',
    description: 'Known for its traditional art market selling paintings, wood carvings, and clothes.',
    regencyId: 'gianyar',
    coordinates: { lat: -8.6, lng: 115.29 },
    tourPackage: {
      title: "Sukawati Traditional Shopping Tour",
      duration: "4 Hours",
      price: "IDR 250.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Private Transport", "Shopping Guide", "Mineral Water", "Snack Box"],
      description: "Find the best bargains on wholesale Balinese art, clothes, and handicrafts."
    }
  },
  {
    id: 'monkeyforest',
    name: 'Sacred Monkey Forest',
    description: 'Nature reserve and temple complex in Ubud inhabited by macaques.',
    regencyId: 'gianyar',
    coordinates: { lat: -8.5194, lng: 115.2606 },
    tourPackage: {
      title: "Monkey Forest Adventure",
      duration: "3 Hours",
      price: "IDR 200.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Forest Entrance Ticket", "Guide", "Insurance", "Transfer"],
      description: "Walk through the sacred nutmeg forest and meet the playful long-tailed macaques."
    }
  },
  {
    id: 'balisafari',
    name: 'Bali Safari Marine Park',
    description: 'Large wildlife park offering safari journeys and animal shows.',
    regencyId: 'gianyar',
    coordinates: { lat: -8.584, lng: 115.345 },
    tourPackage: {
      title: "Jungle Hopper Safari Package",
      duration: "Full Day",
      price: "IDR 850.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Safari Journey", "Animal Shows", "Waterpark Access", "Afternoon Tea"],
      description: "A complete family day out meeting animals from Indonesia, India, and Africa."
    }
  },

  // TABANAN
  {
    id: 'bedugul',
    name: 'Bedugul',
    description: 'Mountain lake resort area known for the floating Ulun Danu Beratan Temple.',
    regencyId: 'tabanan',
    coordinates: { lat: -8.275, lng: 115.166 },
    tourPackage: {
      title: "Bedugul Highlands & Lake Temple",
      duration: "Full Day (10 Hours)",
      price: "IDR 700.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Temple Entrance", "Buffet Lunch", "Botanical Garden Ticket", "Private Driver"],
      description: "Escape the heat to the cool mountains, visit the floating temple, and explore the botanical gardens."
    }
  },
  {
    id: 'tanahlot',
    name: 'Tanah Lot',
    description: 'Iconic pilgrimage temple sitting on a rock formation surrounded by the sea.',
    regencyId: 'tabanan',
    coordinates: { lat: -8.6212, lng: 115.0868 },
    tourPackage: {
      title: "Tanah Lot Sunset Spectacular",
      duration: "5 Hours",
      price: "IDR 450.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Temple Ticket", "Sunset Dinner", "Transport", "Guide"],
      description: "Watch the sun dip behind the temple on the rock, one of Bali's most photographed sights."
    }
  },
  {
    id: 'jatiluwih',
    name: 'Jatiluwih',
    description: 'UNESCO World Heritage site featuring vast, panoramic rice terraces.',
    regencyId: 'tabanan',
    coordinates: { lat: -8.37, lng: 115.13 },
    tourPackage: {
      title: "Jatiluwih UNESCO Trekking",
      duration: "6 Hours",
      price: "IDR 500.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Entrance Fee", "Local Trekking Guide", "Red Rice Tea", "Lunch with View"],
      description: "Walk through the breathtaking expanses of rice terraces and learn about the Subak irrigation system."
    }
  },
  {
    id: 'alaskedaton',
    name: 'Alas Kedaton',
    description: 'Megalythic monkey forest with a temple and giant bats.',
    regencyId: 'tabanan',
    coordinates: { lat: -8.533, lng: 115.176 },
    tourPackage: {
      title: "Alas Kedaton Nature Tour",
      duration: "3 Hours",
      price: "IDR 250.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Entrance Fee", "Guide", "Photo with Bat", "Transport"],
      description: "Explore the protected forest, see the giant fruit bats, and visit the moss-covered temple."
    }
  },

  // KLUNGKUNG
  {
    id: 'nusapenida',
    name: 'Nusa Penida',
    description: 'Rugged island known for Kelingking Beach, Angel\'s Billabong, and manta rays.',
    regencyId: 'klungkung',
    coordinates: { lat: -8.72, lng: 115.54 },
    tourPackage: {
      title: "Nusa Penida West Island Tour",
      duration: "1 Day (Return Trip)",
      price: "IDR 950.000 / pax",
      accommodation: "Day Tour (Fast Boat Transfer)",
      inclusions: ["Return Fast Boat", "Island Car Rental", "Lunch", "Kelingking Beach Entry"],
      description: "A comprehensive day trip to the most famous photo spots: Kelingking, Broken Beach, and Angel's Billabong."
    }
  },
  {
    id: 'nusalembongan',
    name: 'Nusa Lembongan',
    description: 'A smaller island paradise known for seaweed farming, diving, and Devil\'s Tear.',
    regencyId: 'klungkung',
    coordinates: { lat: -8.68, lng: 115.45 },
    tourPackage: {
      title: "Lembongan Beach & Snorkel Escape",
      duration: "2 Days 1 Night",
      price: "IDR 1.800.000 / pax",
      accommodation: "Beachfront Bungalow",
      inclusions: ["Boat Transfers", "Snorkeling Tour (3 spots)", "Scooter Rental", "Breakfast"],
      description: "Stay overnight to truly enjoy the laid-back vibe, snorkel with fish, and tour the mangrove forest."
    }
  },
  {
    id: 'nusaceningan',
    name: 'Nusa Ceningan',
    description: 'Tiny island connected to Lembongan by a yellow bridge, known for the Blue Lagoon.',
    regencyId: 'klungkung',
    coordinates: { lat: -8.696, lng: 115.45 },
    tourPackage: {
      title: "Ceningan Blue Lagoon Adventure",
      duration: "6 Hours",
      price: "IDR 450.000 / pax",
      accommodation: "Day Tour (from Lembongan)",
      inclusions: ["Scooter Guide", "Blue Lagoon Visit", "Cliff Jump (Optional)", "Lunch"],
      description: "Cross the Yellow Bridge and explore the stunning blue waters and cliff jumping spots."
    }
  },
  {
    id: 'klungkungcity',
    name: 'Semarapura (Klungkung)',
    description: 'Historical capital featuring the Kerta Gosa Hall of Justice.',
    regencyId: 'klungkung',
    coordinates: { lat: -8.53, lng: 115.40 },
    tourPackage: {
      title: "Royal Klungkung Heritage Tour",
      duration: "4 Hours",
      price: "IDR 300.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Kerta Gosa Ticket", "Museum Entry", "Local Guide", "Snack"],
      description: "Marvel at the classic Wayang style ceiling paintings in the ancient Hall of Justice."
    }
  },
  {
    id: 'goalawah',
    name: 'Goa Lawah',
    description: 'Ancient bat cave temple located on the coast.',
    regencyId: 'klungkung',
    coordinates: { lat: -8.551, lng: 115.469 },
    tourPackage: {
      title: "Goa Lawah & Salt Farmer Tour",
      duration: "3 Hours",
      price: "IDR 250.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Temple Donation", "Sarong", "Salt Farm Visit", "Coconut"],
      description: "Visit the sacred Bat Cave Temple and see traditional salt making on the nearby black sand beach."
    }
  },

  // BANGLI
  {
    id: 'kintamani',
    name: 'Kintamani',
    description: 'Highlands offering spectacular views of the active Mount Batur volcano and lake.',
    regencyId: 'bangli',
    coordinates: { lat: -8.2421, lng: 115.3298 },
    tourPackage: {
      title: "Mount Batur Sunrise Jeep Tour",
      duration: "6 Hours (Start 4 AM)",
      price: "IDR 850.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["4WD Jeep", "Breakfast on Volcano", "Hot Spring Entry", "Driver"],
      description: "Watch the sunrise over the volcano from the comfort of a classic 4WD jeep without the hiking."
    }
  },
  {
    id: 'penglipuran',
    name: 'Penglipuran Village',
    description: 'A beautifully preserved traditional Balinese village known for its cleanliness.',
    regencyId: 'bangli',
    coordinates: { lat: -8.45, lng: 115.36 },
    tourPackage: {
      title: "Penglipuran Bamboo Forest Walk",
      duration: "4 Hours",
      price: "IDR 350.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Village Entrance", "Bamboo Forest Walk", "Local Guide", "Herbal Drink (Loloh)"],
      description: "Stroll through the world's cleanest village and explore the enchanting bamboo forest nearby."
    }
  },
  {
    id: 'tukadcepung',
    name: 'Tukad Cepung',
    description: 'Unique waterfall located inside a cave, famous for light rays.',
    regencyId: 'bangli',
    coordinates: { lat: -8.388, lng: 115.39 },
    tourPackage: {
      title: "Hidden Canyon Waterfall Trek",
      duration: "5 Hours",
      price: "IDR 400.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Trekking Guide", "Entrance Fee", "Waterproof Bag Rental", "Lunch"],
      description: "Wade through the river to find the magical waterfall illuminated by sunbeams inside a cave."
    }
  },
  {
    id: 'kehentemple',
    name: 'Pura Kehen',
    description: 'Majestic temple with a giant Banyan tree, often called the miniature Besakih.',
    regencyId: 'bangli',
    coordinates: { lat: -8.442, lng: 115.361 },
    tourPackage: {
      title: "Ancient Bangli Temple Tour",
      duration: "3 Hours",
      price: "IDR 250.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Entrance Donation", "Sarong", "Guide", "Water"],
      description: "Visit one of Bali's oldest temples with its magnificent tiered shrines and giant banyan tree."
    }
  },

  // KARANGASEM
  {
    id: 'amed',
    name: 'Amed',
    description: 'Peaceful eastern coastline famous for black sand, diving, and snorkeling.',
    regencyId: 'karangasem',
    coordinates: { lat: -8.33, lng: 115.66 },
    tourPackage: {
      title: "Amed Snorkeling & Japanese Shipwreck",
      duration: "Full Day",
      price: "IDR 600.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Snorkel Gear", "Traditional Jukung Boat", "Lunch", "Transport"],
      description: "Snorkel over vibrant coral reefs and a historic shipwreck right off the black sand beach."
    }
  },
  {
    id: 'sidemen',
    name: 'Sidemen',
    description: 'Lush green valley with rice terraces, offering a glimpse of old Bali.',
    regencyId: 'karangasem',
    coordinates: { lat: -8.48, lng: 115.44 },
    tourPackage: {
      title: "Sidemen Village Trekking",
      duration: "5 Hours",
      price: "IDR 450.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Local Guide", "Rice Field Trek", "River Crossing", "Traditional Lunch"],
      description: "Experience the 'Real Bali' with a guided trek through the untouched valleys of Sidemen."
    }
  },
  {
    id: 'candidasa',
    name: 'Candidasa',
    description: 'Relaxed seaside town with a lily pond, serving as a base for East Bali exploration.',
    regencyId: 'karangasem',
    coordinates: { lat: -8.49, lng: 115.56 },
    tourPackage: {
      title: "East Bali Coastal Relax Tour",
      duration: "6 Hours",
      price: "IDR 500.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Transport", "Lotus Lagoon Visit", "Virgin Beach Entry", "Lunch"],
      description: "Visit the famous Lotus Lagoon and relax on the hidden white sands of Virgin Beach."
    }
  },
  {
    id: 'besakih',
    name: 'Besakih Temple',
    description: 'The "Mother Temple" of Bali, the largest and holiest temple complex on Mt. Agung.',
    regencyId: 'karangasem',
    coordinates: { lat: -8.37, lng: 115.45 },
    tourPackage: {
      title: "Besakih Mother Temple Tour",
      duration: "7 Hours",
      price: "IDR 600.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Temple Guide (Mandatory)", "Entrance Ticket", "Sarong", "Buffet Lunch"],
      description: "A spiritual journey to the holiest and highest temple complex on the slopes of Mount Agung."
    }
  },
  {
    id: 'lempuyang',
    name: 'Lempuyang',
    description: 'Famous for the "Gate of Heaven" framing Mount Agung.',
    regencyId: 'karangasem',
    coordinates: { lat: -8.39, lng: 115.62 },
    tourPackage: {
      title: "Gate of Heaven Instagram Tour",
      duration: "9 Hours (Start Early)",
      price: "IDR 700.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Shuttle Bus", "Queue Number Handling", "Sarong", "Breakfast Box"],
      description: "Capture the iconic photo at the Gate of Heaven. Note: Requires early start to beat the queue."
    }
  },
  {
    id: 'tirtagangga',
    name: 'Tirta Gangga',
    description: 'Former royal water palace featuring tiered fountains and stone sculptures.',
    regencyId: 'karangasem',
    coordinates: { lat: -8.412, lng: 115.587 },
    tourPackage: {
      title: "Royal Water Palace Walk",
      duration: "3 Hours",
      price: "IDR 250.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Entrance Ticket", "Fish Food", "Guide", "Transport"],
      description: "Walk on the stepping stones across the pond and feed the koi fish in this royal garden."
    }
  },
  {
    id: 'tamanujung',
    name: 'Taman Ujung',
    description: 'Water palace with a blend of Balinese and European architecture near the sea.',
    regencyId: 'karangasem',
    coordinates: { lat: -8.463, lng: 115.63 },
    tourPackage: {
      title: "Taman Ujung Historical Tour",
      duration: "4 Hours",
      price: "IDR 300.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Entrance Ticket", "Guide", "Transport", "Cold Towel"],
      description: "Explore the vast floating palace grounds and climb the ruins for a panoramic ocean view."
    }
  },

  // BULELENG
  {
    id: 'lovina',
    name: 'Lovina',
    description: 'North Bali coastal area famous for black sand beaches and sunrise dolphin tours.',
    regencyId: 'buleleng',
    coordinates: { lat: -8.16, lng: 115.02 },
    tourPackage: {
      title: "Lovina Dolphin Sunrise Watch",
      duration: "5 Hours (Start 5:30 AM)",
      price: "IDR 350.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Private Boat", "Life Jacket", "Breakfast", "Coffee"],
      description: "Head out to sea at dawn to watch pods of wild dolphins swimming in the calm north Bali waters."
    }
  },
  {
    id: 'munduk',
    name: 'Munduk',
    description: 'Mountain village set among coffee plantations, known for trekking and waterfalls.',
    regencyId: 'buleleng',
    coordinates: { lat: -8.27, lng: 115.07 },
    tourPackage: {
      title: "Munduk Waterfall Trek & Coffee",
      duration: "6 Hours",
      price: "IDR 500.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Trekking Guide", "Coffee Plantation Tour", "Coffee Tasting", "Lunch"],
      description: "Trek to three major waterfalls and enjoy local Luwak coffee in the cool mountain air."
    }
  },
  {
    id: 'pemuteran',
    name: 'Pemuteran',
    description: 'Quiet bay in the northwest known for its biorock coral restoration project.',
    regencyId: 'buleleng',
    coordinates: { lat: -8.14, lng: 114.66 },
    tourPackage: {
      title: "Pemuteran Biorock Snorkeling",
      duration: "4 Hours",
      price: "IDR 400.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Snorkel Gear", "Boat", "Guide", "Donation to Reef Project"],
      description: "Snorkel over the award-winning artificial reef structures teeming with marine life."
    }
  },
  {
    id: 'sekumpul',
    name: 'Sekumpul Waterfall',
    description: 'Often considered the most beautiful collection of waterfalls in Bali.',
    regencyId: 'buleleng',
    coordinates: { lat: -8.175, lng: 115.18 },
    tourPackage: {
      title: "Sekumpul Extreme Trek",
      duration: "7 Hours",
      price: "IDR 550.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Private Guide (Mandatory)", "Entry Fees", "Lunch", "Motorbike Shuttle"],
      description: "A challenging but rewarding hike down to the base of Bali's most majestic twin waterfalls."
    }
  },
  {
    id: 'gitgit',
    name: 'Gitgit Waterfall',
    description: 'One of the most famous and accessible waterfalls in North Bali.',
    regencyId: 'buleleng',
    coordinates: { lat: -8.194, lng: 115.13 },
    tourPackage: {
      title: "Gitgit Nature Walk",
      duration: "3 Hours",
      price: "IDR 250.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Entry Ticket", "Guide", "Mineral Water", "Parking"],
      description: "An easy walk through clove plantations to reach the thundering 35-meter waterfall."
    }
  },
  {
    id: 'banjar',
    name: 'Banjar Hot Springs',
    description: 'Natural hot springs set in a lush garden, popular for healing waters.',
    regencyId: 'buleleng',
    coordinates: { lat: -8.21, lng: 114.96 },
    tourPackage: {
      title: "Banjar Hot Springs & Monastery",
      duration: "5 Hours",
      price: "IDR 300.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Hot Spring Entry", "Locker", "Buddhist Monastery Visit", "Transport"],
      description: "Soak in the healing sulfuric water and visit the nearby Brahmavihara-Arama Buddhist monastery."
    }
  },

  // JEMBRANA
  {
    id: 'medewi',
    name: 'Medewi',
    description: 'Relaxed village with a rocky beach, famous for long left-hand surfing waves.',
    regencyId: 'jembrana',
    coordinates: { lat: -8.42, lng: 114.80 },
    tourPackage: {
      title: "Medewi Surf Camp Experience",
      duration: "2 Days 1 Night",
      price: "IDR 1.200.000 / pax",
      accommodation: "Surf Guesthouse",
      inclusions: ["2 Surf Lessons", "Board Rental", "Breakfast", "BBQ Dinner"],
      description: "Stay in a surfer's lodge and master the longest left-hand wave in Bali."
    }
  },
  {
    id: 'menjangan',
    name: 'West Bali Nat. Park',
    description: 'Conservation area home to the Bali Starling and Menjangan Island diving.',
    regencyId: 'jembrana',
    coordinates: { lat: -8.125, lng: 114.53 },
    tourPackage: {
      title: "Menjangan Island Diving Safari",
      duration: "Full Day",
      price: "IDR 1.100.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["2 Dives", "Equipment", "Dive Master", "Park Fees", "Lunch Box"],
      description: "World-class wall diving with crystal clear visibility in the protected National Park."
    }
  },
  {
    id: 'gilimanuk',
    name: 'Gilimanuk',
    description: 'Port town connecting Bali to Java, gateway to West Bali National Park.',
    regencyId: 'jembrana',
    coordinates: { lat: -8.16, lng: 114.43 },
    tourPackage: {
      title: "Gilimanuk Bay Mangrove Tour",
      duration: "3 Hours",
      price: "IDR 300.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Traditional Boat", "Guide", "Bird Watching Binoculars", "Drink"],
      description: "Explore the mangrove forests by boat and spot rare birds in the bay area."
    }
  },
  {
    id: 'bunutbolong',
    name: 'Bunut Bolong',
    description: 'A sacred banyan tree with a large hole through its trunk that the road passes through.',
    regencyId: 'jembrana',
    coordinates: { lat: -8.38, lng: 114.89 },
    tourPackage: {
      title: "West Bali Mystical Tree Tour",
      duration: "5 Hours",
      price: "IDR 400.000 / pax",
      accommodation: "Day Tour (No Stay)",
      inclusions: ["Transport", "Guide", "Rubber Plantation Walk", "Lunch"],
      description: "Visit the magical giant Bunut Bolong tree and drive through the rubber plantations of West Bali."
    }
  },
];