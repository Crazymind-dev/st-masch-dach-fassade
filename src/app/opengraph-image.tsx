import { ImageResponse } from "next/og"
import { company } from "@/lib/config"

export const alt = `${company.name} — Dachdecker-Meisterbetrieb in Berlin`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * OG image rendered via Satori (next/og). Satori only supports
 * flexbox, so every container with more than one child must have an
 * explicit display: flex (or contents/none).
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#1a1a1a",
          backgroundImage:
            "radial-gradient(circle at 75% 20%, rgba(236,102,8,0.45) 0%, transparent 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: logo lockup */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#EC6608",
              marginBottom: 8,
            }}
          >
            Meisterbetrieb Berlin
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            ST. MASCH
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#EC6608",
              marginTop: 16,
            }}
          >
            Dach · Fassade · Solar
          </div>
        </div>

        {/* Bottom: claim + credentials */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 56,
              fontWeight: 900,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            <div style={{ display: "flex" }}>Weil Geborgenheit</div>
            <div style={{ display: "flex", color: "#EC6608" }}>
              beim Dach beginnt.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 40,
              marginTop: 40,
              fontSize: 22,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              ● Dachdecker-Meister
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              ● BAFA-Energieberater
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              ● Enphase Solar Partner
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
