import { Category, Product, CompanyInfo } from '../types';

export const initialCompanyInfo: CompanyInfo = {
  name: "ApexPlast Precision Polymers",
  tagline: "High-Tolerance Industrial Plastic Manufacturing & Custom Moulding",
  establishedYear: 2008,
  experienceYears: 18,
  plantArea: "85,000 Sq. Ft.",
  annualCapacity: "14,500 Metric Tonnes",
  machinesCount: 38,
  certifications: ["ISO 9001:2015 Certified", "Food Contact Grade (FDA Compliant)", "RoHS & REACH Compliant", "BIS Certified"],
  phone: "+1 (800) 458-7527",
  whatsapp: "+1 (555) 019-2834",
  email: "info@apexplast-manufacturing.com",
  salesEmail: "sales@apexplast-manufacturing.com",
  address: "Plot 42-B, Industrial Estate, Sector 7, Manufacturing Corridor",
  city: "Metro Industrial Zone",
  state: "State of Tech",
  country: "United States",
  postalCode: "94016",
  businessHours: "Monday – Saturday: 8:30 AM – 6:30 PM (Production 24/7)",
  googleMapsEmbedUrl: "https://maps.google.com/?q=industrial+park"
};

export const initialCategories: Category[] = [
  {
    id: "cat-industrial-crates",
    name: "Industrial Crates & Logistics Bins",
    slug: "industrial-crates-logistics-bins",
    description: "Heavy-duty stackable and nestable crates engineered for automotive, warehousing, and food distribution.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    status: "active",
    createdAt: "2024-01-15T08:00:00.000Z"
  },
  {
    id: "cat-storage-drums",
    name: "Material Handling & Storage Drums",
    slug: "material-handling-storage-drums",
    description: "High-density blow-molded storage drums, open-top barrels, and intermediate bulk containers (IBC accessories).",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    status: "active",
    createdAt: "2024-01-16T08:00:00.000Z"
  },
  {
    id: "cat-packaging-bottles",
    name: "Packaging Containers & Jerry Cans",
    slug: "packaging-containers-jerry-cans",
    description: "UN-approved chemical resistant jerry cans, lubricant canisters, and tamper-evident wide mouth jars.",
    image: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=800&q=80",
    status: "active",
    createdAt: "2024-01-17T08:00:00.000Z"
  },
  {
    id: "cat-household-commercial",
    name: "Commercial Utility & Household Ware",
    slug: "commercial-utility-household-ware",
    description: "Reinforced utility buckets, pedal waste bins, modular storage containers, and agricultural harvest tubs.",
    image: "https://images.unsplash.com/photo-1595079672139-62294316e69c?auto=format&fit=crop&w=800&q=80",
    status: "active",
    createdAt: "2024-01-18T08:00:00.000Z"
  },
  {
    id: "cat-custom-molding",
    name: "Custom Engineering & OEM Moulding",
    slug: "custom-engineering-oem-moulding",
    description: "High-precision injection moulded components, polymer gears, terminal caps, and bespoke industrial fittings.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    status: "active",
    createdAt: "2024-01-19T08:00:00.000Z"
  }
];

export const initialProducts: Product[] = [
  {
    id: "prod-euro-crate-6432",
    categoryId: "cat-industrial-crates",
    name: "Heavy-Duty Euro Stackable Crate 6432",
    slug: "heavy-duty-euro-stackable-crate-6432",
    shortDescription: "Industrial standard solid wall storage crate with reinforced ribbed base for automated conveyor lines.",
    description: "Manufactured from 100% virgin High-Density Polyethylene (HDPE) or high-impact Polypropylene (PP). Designed with robust ergonomic hand-holds and reinforced perimeter ribs to resist vertical distortion under 500 kg static load. Ideal for automotive assembly lines, automated distribution centers, and wholesale cold-storage transit.",
    productCode: "AP-EC-6432",
    material: "100% Virgin High-Density Polyethylene (HDPE)",
    color: "Industrial Blue, Slate Gray, Safety Red",
    dimensions: "600 mm (L) x 400 mm (W) x 320 mm (H)",
    weight: "2.55 kg ± 2%",
    capacity: "62 Liters / 45 kg Dynamic Load",
    applications: [
      "Automotive component transit",
      "Automated automated storage & retrieval systems (ASRS)",
      "Food processing and cold storage (-30°C to +65°C)",
      "Warehouse bulk picking & staging"
    ],
    images: [
      {
        id: "img-ec-1",
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
        isPrimary: true,
        altText: "Heavy-Duty Euro Stackable Crate angled view"
      },
      {
        id: "img-ec-2",
        imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=80",
        isPrimary: false,
        altText: "Euro crates stacked in warehouse"
      },
      {
        id: "img-ec-3",
        imageUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80",
        isPrimary: false,
        altText: "Detail view of reinforced ribbing and handle"
      }
    ],
    isFeatured: true,
    isPublished: true,
    createdAt: "2024-02-01T10:00:00.000Z",
    updatedAt: "2024-02-10T14:30:00.000Z"
  },
  {
    id: "prod-nestable-crate-vented",
    categoryId: "cat-industrial-crates",
    name: "Perforated Agricultural Harvest & Fruit Crate",
    slug: "perforated-agricultural-harvest-fruit-crate",
    shortDescription: "Perforated wall and mesh base crate engineered for continuous air ventilation in fresh produce distribution.",
    description: "Specially formulated with food-contact certified virgin PP, this vented crate provides optimum airflow to maintain freshness for fruits, vegetables, and horticulture crops. Features smooth interior surfaces to eliminate fruit bruising, interlocking corners for secure stacking, and UV-stabilized compounding for extended outdoor lifespan.",
    productCode: "AP-AC-5428",
    material: "Food-Grade UV-Stabilized Polypropylene (PP)",
    color: "Forest Green, Signal Orange, Deep Blue",
    dimensions: "540 mm (L) x 360 mm (W) x 285 mm (H)",
    weight: "1.85 kg ± 2%",
    capacity: "42 Liters / 25 kg Payload",
    applications: [
      "Agricultural harvesting & orchard handling",
      "Refrigerated vegetable distribution",
      "Supermarket display & backroom staging",
      "Fish and aquaculture processing"
    ],
    images: [
      {
        id: "img-ac-1",
        imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80",
        isPrimary: true,
        altText: "Perforated agricultural crate"
      },
      {
        id: "img-ac-2",
        imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
        isPrimary: false,
        altText: "Agricultural crates loaded with fresh harvest"
      }
    ],
    isFeatured: true,
    isPublished: true,
    createdAt: "2024-02-02T11:00:00.000Z",
    updatedAt: "2024-02-08T09:15:00.000Z"
  },
  {
    id: "prod-industrial-jerry-can-25l",
    categoryId: "cat-packaging-bottles",
    name: "25-Liter UN-Certified Industrial Jerry Can",
    slug: "25-liter-un-certified-industrial-jerry-can",
    shortDescription: "Blow-molded heavy-duty jerry can with anti-glug pour spout and tamper-evident ratchet closure.",
    description: "Extrusion blow-molded using high molecular weight HDPE (HMW-HDPE) delivering superior Environmental Stress Crack Resistance (ESCR). Features integrated triple-handle structure for single or two-person handling, graduated liquid level strip, and UN Packaging Group II & III certification for hazardous liquids.",
    productCode: "AP-JC-25H",
    material: "High Molecular Weight HDPE (HMW-HDPE)",
    color: "Translucent Natural, Ocean Blue, Opaque Black",
    dimensions: "290 mm (L) x 245 mm (W) x 475 mm (H)",
    weight: "1.25 kg (Heavy Duty Spec)",
    capacity: "25 Liters (6.6 Gallons) brimful 26.5L",
    applications: [
      "Specialty industrial chemicals & solvents",
      "Automotive lubricants, coolants & DEF fluid",
      "Agricultural agrochemical concentrates & fertilizers",
      "Commercial liquid sanitation detergents"
    ],
    images: [
      {
        id: "img-jc-1",
        imageUrl: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=1000&q=80",
        isPrimary: true,
        altText: "Industrial 25L plastic jerry can"
      },
      {
        id: "img-jc-2",
        imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80",
        isPrimary: false,
        altText: "Tamper evident cap and spout detail"
      }
    ],
    isFeatured: true,
    isPublished: true,
    createdAt: "2024-02-03T14:20:00.000Z",
    updatedAt: "2024-02-12T16:40:00.000Z"
  },
  {
    id: "prod-open-top-drum-210l",
    categoryId: "cat-storage-drums",
    name: "210-Liter Full Open-Top Chemical Drum",
    slug: "210-liter-full-open-top-chemical-drum",
    shortDescription: "Heavy-gauge storage barrel with galvanized steel lever-lock clamp ring and EPDM airtight gasket.",
    description: "Seamless blow-molded drum designed for powders, solids, viscous liquids, and recycling storage. Resistant to denting, corrosion, and environmental weathering. The removable lid is secured with an electro-galvanized locking ring and safety seal latch for tamper-proof transport.",
    productCode: "AP-DR-210OT",
    material: "High Density Polyethylene (HMW-HDPE)",
    color: "Signal Blue Body with Black Lid",
    dimensions: "Diameter: 590 mm x Height: 980 mm",
    weight: "9.80 kg with lid & locking ring",
    capacity: "210 Liters (55 US Gallons)",
    applications: [
      "Bulk chemical powders and dye pigments",
      "Pharmaceutical ingredients & food pastes",
      "Industrial waste containment and spill kits",
      "Water treatment polymers and flocculants"
    ],
    images: [
      {
        id: "img-dr-1",
        imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80",
        isPrimary: true,
        altText: "210L open top chemical drum with clamp"
      },
      {
        id: "img-dr-2",
        imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80",
        isPrimary: false,
        altText: "Industrial drums stored on warehouse pallets"
      }
    ],
    isFeatured: true,
    isPublished: true,
    createdAt: "2024-02-04T09:00:00.000Z",
    updatedAt: "2024-02-15T10:30:00.000Z"
  },
  {
    id: "prod-reinforced-utility-bucket-20l",
    categoryId: "cat-household-commercial",
    name: "20-Liter Heavy-Duty Industrial Utility Pail",
    slug: "20-liter-heavy-duty-industrial-utility-pail",
    shortDescription: "Graduated bucket with steel wire bail handle, plastic roller grip, and airtight tear-strip lid.",
    description: "High-impact injection molded pail engineered for paints, adhesives, inks, food ingredients, and janitorial operations. Features reinforcing rim collars to maintain roundness during high-speed automated lid pressing and drop impact drop resistance from 1.8 meters.",
    productCode: "AP-PL-20HD",
    material: "Impact Copolymer Polypropylene (ICP-PP)",
    color: "Bright White, Yellow, Black, Custom Tinting Available",
    dimensions: "Top Dia: 310 mm, Base Dia: 265 mm, Height: 380 mm",
    weight: "820 g (Pail) + 210 g (Lid)",
    capacity: "20 Liters (5.28 Gallons)",
    applications: [
      "Architectural paints and chemical coatings",
      "Lubricating greases and construction mastics",
      "Bulk edible oils, syrups, and honey packaging",
      "Commercial cleaning & institutional maintenance"
    ],
    images: [
      {
        id: "img-pl-1",
        imageUrl: "https://images.unsplash.com/photo-1595079672139-62294316e69c?auto=format&fit=crop&w=1000&q=80",
        isPrimary: true,
        altText: "Heavy-duty industrial utility pail with handle"
      },
      {
        id: "img-pl-2",
        imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80",
        isPrimary: false,
        altText: "Stack of commercial plastic containers"
      }
    ],
    isFeatured: false,
    isPublished: true,
    createdAt: "2024-02-05T12:00:00.000Z",
    updatedAt: "2024-02-11T11:00:00.000Z"
  },
  {
    id: "prod-custom-oem-terminal-housing",
    categoryId: "cat-custom-molding",
    name: "Precision Electrical Junction & Terminal Housing",
    slug: "precision-electrical-junction-terminal-housing",
    shortDescription: "Custom precision injection molded flame-retardant electrical enclosure with brass threaded inserts.",
    description: "Molded on our 350-Ton CNC-controlled servo-hydraulic injection machines using UL94-V0 rated flame-retardant Polycarbonate/ABS blend. Features insert-molded threaded brass inserts, IP66 silicone sealing gasket groove, and tight tolerances down to ±0.03 mm. Custom tooling and OEM contract manufacturing available.",
    productCode: "AP-OEM-EJ88",
    material: "Flame Retardant PC/ABS (UL94-V0 Rated)",
    color: "Industrial Light Gray (RAL 7035) or Charcoal",
    dimensions: "180 mm (L) x 130 mm (W) x 65 mm (D)",
    weight: "340 g",
    capacity: "IP66 Ingress Protection Rating",
    applications: [
      "Renewable solar inverter junction boxes",
      "Industrial automation wiring junctions",
      "Outdoor telecommunication transceiver enclosures",
      "Custom OEM equipment control interfaces"
    ],
    images: [
      {
        id: "img-oem-1",
        imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
        isPrimary: true,
        altText: "Precision injection molded technical housing component"
      },
      {
        id: "img-oem-2",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
        isPrimary: false,
        altText: "CNC mould tooling and inspection check"
      }
    ],
    isFeatured: true,
    isPublished: true,
    createdAt: "2024-02-06T15:30:00.000Z",
    updatedAt: "2024-02-18T17:00:00.000Z"
  }
];
