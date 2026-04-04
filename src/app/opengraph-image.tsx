import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DeMarkuss Day — The Unfair Systems Advantage";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#000000",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(circle, rgba(0, 255, 255, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#00FFFF",
              borderRadius: "50%",
            }}
          />
          <span
            style={{
              fontSize: "14px",
              color: "rgba(0, 255, 255, 0.5)",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              fontFamily: "monospace",
              fontWeight: 700,
            }}
          >
            Dallas-Fort Worth
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            marginBottom: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>THE UNFAIR</span>
          <span style={{ color: "#00FFFF", fontStyle: "italic" }}>SYSTEMS</span>
          <span>ADVANTAGE.</span>
        </div>

        {/* Subhead */}
        <div
          style={{
            fontSize: "20px",
            color: "rgba(255, 255, 255, 0.4)",
            lineHeight: 1.5,
            maxWidth: "500px",
            fontWeight: 300,
          }}
        >
          AI-Powered Business Automation. Local SEO. Websites. Sales Agents.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            paddingTop: "20px",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              color: "rgba(255, 255, 255, 0.3)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontFamily: "monospace",
              fontWeight: 700,
            }}
          >
            DEMARKUSS DAY
          </span>
          <span
            style={{
              fontSize: "13px",
              color: "rgba(0, 255, 255, 0.4)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontFamily: "monospace",
              fontWeight: 700,
            }}
          >
            demarkussday.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
