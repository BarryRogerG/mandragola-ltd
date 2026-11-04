import type { LogoAsset } from "@/types/content";

const logo = (file: string, alt: string, width: number, height: number): LogoAsset => ({
  src: `/logos/${file}.svg`,
  alt,
  width,
  height,
});

/** Intrinsic sizes are the SVG viewBox dimensions of the files published on mandragolaltd.com. */
export const logos = {
  arrivair: logo("arrivair-ll-1", "ArrivAir II", 163, 97),
  biomx: logo("biomx", "BiomX", 150, 39),
  bladeranger: logo("bladeranger", "BladeRanger", 242, 41),
  continual: logo("continual", "Continual", 207, 37),
  dfsl: logo("dfsl", "DFSL", 158, 56),
  enigma: logo("enigma-new", "Enigma", 177, 34),
  kochav: logo("kochav", "Kochav", 153, 30),
  mia: logo("mia", "Mia Dynamics", 233, 27),
  motomea: logo("motomea", "Motomea", 242, 31),
  omegamore: logo("omegamore", "OmegaMore", 178, 31),
  samba: logo("samba-formerly-dentfreak", "Samba (formerly DentFreak)", 149, 30),
  sciii: logo("sciii", "SCiiI", 381, 162),
  shikunBinui: logo("shikun-and-binui", "Shikun & Binui", 133, 37),
  star26: logo("star26", "Star26", 158, 37),
  t3: logo("t3-horizontal", "T3 Defense", 275, 27),
  tessera: logo("tessera", "Tessera", 266, 49),
  tsoock: logo("tsoock-defense", "Tsoock Defense", 288, 102),
  versamed: logo("versamed-by-ge-healthcare", "VersaMed by GE HealthCare", 232, 39),
  visionwave: logo("visionwave", "VisionWave", 207, 31),
  waterio: logo("water-io", "Water.io", 117, 23),
  zorronet: logo("zorronet", "Zorronet", 157, 58),
} as const satisfies Record<string, LogoAsset>;

/** Logos shown in the original homepage's transactions showcase. */
export const featuredCompanyLogos: readonly LogoAsset[] = [
  logos.dfsl,
  logos.versamed,
  logos.tessera,
  logos.zorronet,
  logos.kochav,
  logos.t3,
  logos.mia,
  logos.star26,
  logos.visionwave,
  logos.tsoock,
  logos.bladeranger,
  logos.motomea,
  logos.sciii,
  logos.enigma,
  logos.omegamore,
  logos.waterio,
  logos.continual,
  logos.samba,
];
