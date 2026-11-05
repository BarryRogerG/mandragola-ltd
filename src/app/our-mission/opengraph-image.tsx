import { ImageResponse } from "next/og";
import { missionCopy, missionMeta } from "@/content/mission";
import { site } from "@/content/site";

export const alt = `${missionMeta.title} | ${site.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px 80px",
          backgroundColor: "#fbf9f6",
          color: "#1a1a1a",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#1f4a3c",
            fontWeight: 500,
          }}
        >
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 58, lineHeight: 1.08, fontWeight: 400, maxWidth: 960 }}>
            {missionCopy.hero.title}
          </div>
          <div style={{ fontSize: 24, color: "#5c5852", maxWidth: 820, lineHeight: 1.45 }}>
            {missionMeta.description}
          </div>
        </div>
        <div style={{ fontSize: 16, color: "#5c5852" }}>{site.demoNotice}</div>
      </div>
    ),
    { ...size },
  );
}
