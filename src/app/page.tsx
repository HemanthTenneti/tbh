"use client";

import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

const MARQUEE_ITEMS = ["launch party invites", "freebies", "tbh insiders", "early access"];

export default function Home() {
  return (
    <>
      {/*
        height: 100dvh + overflow: hidden = hard viewport lock.
        Both sections shrink via flex: 1 1 0 + min-height: 0.
        All sizing is vh-based so nothing overflows at any screen height.
      */}
      <div
        className="page-wrapper"
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
          backgroundColor: "#fbefe1",
        }}
      >
        {/* ── HEADER ── */}
        <div style={{ flexShrink: 0, width: "100%" }}>
          {/* Solid lavender bar */}
          <div
            style={{
              backgroundColor: "#c9b9d6",
              height: "clamp(52px, 7vh, 86px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "clamp(6px, 1vh, 14px)",
            }}
          >
            <Image
              src="/assets/tbh-black.svg"
              alt="the better half"
              width={97}
              height={68}
              priority
              style={{
                objectFit: "contain",
                width: "clamp(52px, 5vw, 84px)",
                height: "auto",
              }}
            />
          </div>

          {/*
            Pure SVG scallop pattern — no JS, SSR-safe, tiles automatically.
            Geometry matches Figma exactly:
              - Each scallop: r=75, spaced 130px (adjacent circles touch at y≈2px)
              - Bump depth: 40px  (circle centre at cy=−35 → bottom at y=40)
              - Count adapts to any viewport width automatically
              - Starts flush at x=0 → no left gap
          */}
          <svg
            width="100%"
            height="40"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            <defs>
              <pattern
                id="scallop-bumps"
                x="0"
                y="0"
                width="130"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                {/* Circle centre 35px above tile top, r=75 → bottom at y=40 */}
                <circle cx="65" cy="-35" r="75" fill="#c9b9d6" />
              </pattern>
            </defs>
            <rect width="100%" height="40" fill="url(#scallop-bumps)" />
          </svg>
        </div>

        {/* ── CREAM SECTION ── capped so it doesn't balloon on XL */}
        <div
          className="page-cream"
          style={{
            flex: "1 0 auto",
            minHeight: "240px",
            maxHeight: "520px",
            backgroundColor: "#fbefe1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "clamp(8px, 1.5vh, 32px) 16px clamp(10px, 1.8vh, 32px)",
          }}
        >
          {/* Mascot — vh-capped so it compresses on short screens */}
          <div
            style={{
              width: "clamp(150px, min(24vw, 28vh), 340px)",
              height: "clamp(170px, min(27vw, 32vh), 390px)",
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/mascot.svg"
              alt="tbh mascot"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>

          <p
            style={{
              fontFamily: '"Bastia Bold", Georgia, serif',
              fontSize: "clamp(20px, min(1.8vw, 2.4vh), 30px)",
              color: "#1a1a1a",
              lineHeight: 1.3,
              marginBottom: "2px",
              marginTop: "clamp(4px, 0.9vh, 14px)",
            }}
          >
            And for the lady, perhaps...
          </p>
          <p
            style={{
              fontFamily: '"Bastia Bold", Georgia, serif',
              fontSize: "clamp(20px, min(1.8vw, 2.4vh), 30px)",
              color: "#f1663b",
              lineHeight: 1.3,
            }}
          >
            a bloody break?
          </p>
        </div>

        {/* ── MARQUEE ── */}
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f3effa",
            height: "clamp(32px, 4.5vh, 54px)",
            borderTop: "1.5px solid #ddd0f0",
            borderBottom: "1.5px solid #ddd0f0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              animation: "ticker 24s linear infinite",
              willChange: "transform",
            }}
          >
            {[...Array(3)].map((_, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
                {MARQUEE_ITEMS.map((item, j) => (
                  <span
                    key={j}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "clamp(7px, 1.1vw, 16px)",
                      paddingRight: "clamp(7px, 1.1vw, 16px)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Helvetica Neue", Arial, sans-serif',
                        fontWeight: 700,
                        fontSize: "clamp(11px, 1.3vw, 19px)",
                        color: "#544396",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item}
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/star.svg"
                      alt=""
                      aria-hidden="true"
                      style={{ width: "clamp(11px, 1.2vw, 17px)", height: "auto", flexShrink: 0 }}
                    />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ── PURPLE SECTION ── capped so it doesn't balloon on XL */}
        <div
          className="page-purple"
          style={{
            flex: "1 0 auto",
            minHeight: "340px",
            maxHeight: "580px",
            backgroundColor: "#544396",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(10px, 2vh, 48px) 16px clamp(10px, 2vh, 36px)",
          }}
        >
          <Image
            src="/assets/tbh-orange.svg"
            alt="tbh."
            width={120}
            height={86}
            className="tbh-logo-purple"
            style={{
              objectFit: "contain",
              width: "clamp(60px, min(7.5vw, 9vh), 120px)",
              height: "auto",
              marginBottom: "clamp(3px, 0.6vh, 10px)",
            }}
          />

          <p
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 700,
              fontSize: "clamp(12px, min(1.6vw, 1.9vh), 22px)",
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "clamp(12px, 2.5vh, 40px)",
            }}
          >
            Girlhood is exhausting. So here we are.
          </p>

          <WaitlistForm />

          <p
            className="page-footer"
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontSize: "clamp(10px, 1vh, 13px)",
              color: "rgba(255,255,255,0.55)",
              marginTop: "clamp(10px, 1.8vh, 28px)",
            }}
          >
            ©️2026 tbh.thebetterhalf
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </>
  );
}
