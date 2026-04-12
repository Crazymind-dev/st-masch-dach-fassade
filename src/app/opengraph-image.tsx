import { ImageResponse } from "next/og"
import { company } from "@/lib/config"

export const alt = `${company.name} — Dachdecker-Meisterbetrieb in Berlin`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

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
            "radial-gradient(circle at 75% 20%, rgba(255,91,1,0.45) 0%, transparent 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#ff5b01",
              marginBottom: 8,
            }}
          >
            Meisterbetrieb Berlin
          </div>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1 }}>
            ST. MASCH
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#ff5b01",
              marginTop: 16,
            }}
          >
            Dach · Fassade · Solar
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 48,
              fontWeight: 900,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Weil Geborgenheit
            <br />
            beim <span style={{ color: "#ff5b01" }}>Dach</span> beginnt
          </div>
          <div
            style={{
              display: "flex",
              gap: 40,
              marginTop: 32,
              fontSize: 22,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: "#ff5b01", fontWeight: 800 }}>●</span>{" "}
              Dachdecker-Meister
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: "#ff5b01", fontWeight: 800 }}>●</span>{" "}
              BAFA-Energieberater
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: "#ff5b01", fontWeight: 800 }}>●</span>{" "}
              Enphase Solar Partner
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
