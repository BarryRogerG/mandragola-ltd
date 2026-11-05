export type AtmospherePhoto = {
  src: string;
  /** Describes the picture only. Never names Mandragola offices, holdings or deals. */
  alt: string;
  width: number;
  height: number;
  credit: string;
  sourceUrl?: string;
  licenseUrl?: string;
};

const unsplashLicense = "https://unsplash.com/license";

const kaufmann = {
  src: "/images/stone-walls-reflecting-pool.jpg",
  alt: "Pale stone walls meeting at a corner above a reflecting pool, under a cloudy sky.",
  width: 4672,
  height: 7008,
  credit: "Alexander Kaufmann / Unsplash",
  sourceUrl: "https://unsplash.com/photos/lRCITdfi7TM",
  licenseUrl: unsplashLicense,
} as const satisfies AtmospherePhoto;

/**
 * Freely licensed stills used as atmosphere only. They do not depict Mandragola
 * offices, holdings or transactions.
 */
export const photos = {
  hero: {
    src: "/images/trials/02-eduardo.jpg",
    alt: "Warm beige interior with a stair and arched opening, lit by a shaft of sunlight.",
    width: 5152,
    height: 7728,
    credit: "Eduardo Gorghetto / Unsplash",
    sourceUrl: "https://unsplash.com/photos/Y9uYq6aDHAU",
    licenseUrl: unsplashLicense,
  },
  philosophy: kaufmann,
  mission: {
    src: "/images/trials/07-tobias.jpg",
    alt: "White angular and fluted facades against a pink sunset sky.",
    width: 6192,
    height: 4128,
    credit: "Tobias Reich / Unsplash",
  },
  approach: {
    src: "/images/mission-courtyard.jpg",
    alt: "White cantilevered modern building against a pale blue sky.",
    width: 2000,
    height: 2831,
    credit: "Unsplash",
  },
  foundations: {
    src: "/images/sunrise-over-golden-field.jpg",
    alt: "Sun rising over a golden grain field, with trees along the horizon and a sky fading from blue to orange.",
    width: 5923,
    height: 3332,
    credit: "Federico Respini / Unsplash",
    sourceUrl: "https://unsplash.com/photos/sYffw0LNr7s",
    licenseUrl: unsplashLicense,
  },
  values: {
    src: "/images/stone-reception-wood-ceiling.jpg",
    alt: "Stone reception desk under a slatted wood ceiling, with a beige sofa and armchairs on polished floors.",
    width: 5000,
    height: 2812,
    credit: "Aalo Lens / Unsplash",
    sourceUrl: "https://unsplash.com/photos/Ypv0MH4izf8",
    licenseUrl: unsplashLicense,
  },
  team: {
    src: "/images/trials/03-philipp.jpg",
    alt: "Warm-toned concrete walls forming a canyon toward a dusk sky.",
    width: 6429,
    height: 4286,
    credit: "Philipp Dusel / Unsplash",
  },
} as const satisfies Record<string, AtmospherePhoto>;

/**
 * Atmosphere stills for the five Values principle cards, in page order.
 * They do not depict Mandragola offices, holdings or transactions.
 */
export const valuePhotos = [
  {
    src: "/images/lounge-arched-niches.jpg",
    alt: "Warm lounge with two dark arched niches, a round chair, and a pale circular table.",
    width: 3648,
    height: 5472,
    credit: "Jason Leung / Unsplash",
    sourceUrl: "https://unsplash.com/photos/zRBaFHC76zA",
    licenseUrl: unsplashLicense,
  },
  {
    src: "/images/circular-lobby-reception.jpg",
    alt: "Circular marble lobby with a reception desk, ringed ceiling lights, and glass walls looking onto trees.",
    width: 5760,
    height: 3240,
    credit: "Can Chu / Unsplash",
    sourceUrl: "https://unsplash.com/photos/EOYHYGuMPwY",
    licenseUrl: unsplashLicense,
  },
  {
    src: "/images/stone-reception-wood-ceiling.jpg",
    alt: "Stone reception desk under a slatted wood ceiling, with a beige sofa and armchairs on polished floors.",
    width: 5000,
    height: 2812,
    credit: "Aalo Lens / Unsplash",
    sourceUrl: "https://unsplash.com/photos/Ypv0MH4izf8",
    licenseUrl: unsplashLicense,
  },
  {
    src: "/images/dim-lounge-armchairs.jpg",
    alt: "Dim lounge with pale armchairs, a low ottoman, and warm lamps on a patterned rug.",
    width: 6000,
    height: 4000,
    credit: "Yanhao Fang / Unsplash",
    sourceUrl: "https://unsplash.com/photos/3yXmsLghPX4",
    licenseUrl: unsplashLicense,
  },
  {
    src: "/images/receding-hotel-corridor.jpg",
    alt: "Long hotel corridor with dark doorways receding toward a bright window at the far end.",
    width: 4983,
    height: 7474,
    credit: "Vitalii Khodzinskyi / Unsplash",
    sourceUrl: "https://unsplash.com/photos/3HYm4QCOeds",
    licenseUrl: unsplashLicense,
  },
] as const satisfies readonly AtmospherePhoto[];

/** Atmosphere stills for the homepage expertise cards, in the same order as the four items. */
export const expertisePhotos = [
  {
    src: "/images/trials/04-tim.jpg",
    alt: "Pale limestone plaza with two concrete columns beside a stone wall.",
    width: 4834,
    height: 3552,
    credit: "Tim Broadbent / Unsplash",
  },
  {
    src: "/images/trials/05-wen.jpg",
    alt: "Pale ribbed facade with a floating white canopy and planting.",
    width: 3120,
    height: 2080,
    credit: "Wen Qiao / Unsplash",
  },
  {
    src: "/images/trials/01-rufat.jpg",
    alt: "Black-and-white sculptural concrete building with a lone figure walking across the plaza.",
    width: 4000,
    height: 2672,
    credit: "Rufat Mammadov / Unsplash",
    sourceUrl: "https://unsplash.com/photos/ak5R4Y7MkW8",
    licenseUrl: unsplashLicense,
  },
  {
    src: "/images/trials/02-eduardo.jpg",
    alt: "Warm beige interior with a stair and arched opening, lit by a shaft of sunlight.",
    width: 5152,
    height: 7728,
    credit: "Eduardo Gorghetto / Unsplash",
    sourceUrl: "https://unsplash.com/photos/Y9uYq6aDHAU",
    licenseUrl: unsplashLicense,
  },
] as const satisfies readonly AtmospherePhoto[];
