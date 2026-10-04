import { ImageResponse } from "next/og";

export const alt = "Nagina Azhar — Python Developer, AI & Web Developer, AI Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const chips = ["Python", "AI & Automation", "Web Development"];

export default function OgCard() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          backgroundColor: "#0a0b11",
          backgroundImage:
            "linear-gradient(135deg, rgba(109,139,255,0.30) 0%, rgba(10,11,17,0) 55%), linear-gradient(315deg, rgba(168,85,247,0.28) 0%, rgba(10,11,17,0) 55%)",
          padding: "68px 76px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 60,
                height: 60,
                borderRadius: 18,
                backgroundImage: "linear-gradient(135deg, #6d8bff, #a855f7)",
                color: "#ffffff",
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              NA
            </div>
            <div style={{ display: "flex", fontSize: 21, letterSpacing: 4, color: "#aeb8d4" }}>
              PORTFOLIO
            </div>
          </div>

          <div
            style={{
              display: "flex",
              padding: "12px 24px",
              borderRadius: 999,
              border: "1px solid rgba(109,139,255,0.55)",
              backgroundColor: "rgba(109,139,255,0.14)",
              color: "#cdd9ff",
              fontSize: 21,
            }}
          >
            Available for work
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 700, color: "#ffffff", lineHeight: 1.05 }}>
            Nagina Azhar
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 38,
              color: "#aeb8d4",
            }}
          >
            Python Developer · AI &amp; Web Developer · AI Automation
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {chips.map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                padding: "13px 26px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.14)",
                backgroundColor: "rgba(255,255,255,0.05)",
                color: "#e6e9f2",
                fontSize: 23,
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}