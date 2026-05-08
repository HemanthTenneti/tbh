"use client";

import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

const MARQUEE_ITEMS = ["launch party invites", "freebies", "tbh insiders", "early access"];

export default function Home() {
  return (
    <>
      <div
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
          backgroundColor: "#fbefe1",
        }}
      >
        {/* ── SCALLOPED HEADER ── */}
        <div
          style={{
            position: "relative",
            width: "100%",
            flexShrink: 0,
            height: "clamp(72px, 9vw, 118px)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "-7px",
              right: "-7px",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/header-art.svg"
              alt=""
              aria-hidden="true"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "clamp(14px, 2vw, 28px)",
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
                width: "clamp(54px, 6.5vw, 100px)",
                height: "auto",
              }}
            />
          </div>
        </div>

        {/* ── CREAM SECTION ── */}
        <div
          style={{
            flex: "1 0 auto",
            minHeight: "300px",
            backgroundColor: "#fbefe1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "clamp(12px, 2.5vh, 36px) 16px clamp(16px, 2.5vh, 36px)",
          }}
        >
          <div
            style={{
              width: "clamp(150px, min(26vw, 35vh), 340px)",
              height: "clamp(170px, min(29vw, 40vh), 390px)",
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
              fontSize: "clamp(16px, min(2vw, 2.6vh), 30px)",
              color: "#1a1a1a",
              lineHeight: 1.3,
              marginBottom: "2px",
              marginTop: "clamp(6px, 1.2vh, 16px)",
            }}
          >
            And for the lady, perhaps...
          </p>
          <p
            style={{
              fontFamily: '"Bastia Bold", Georgia, serif',
              fontSize: "clamp(16px, min(2vw, 2.6vh), 30px)",
              color: "#f1663b",
              lineHeight: 1.3,
            }}
          >
            a bloody break?
          </p>
        </div>

        {/* ── MARQUEE TICKER ── */}
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f3effa",
            height: "clamp(36px, 4vh, 56px)",
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
                      gap: "clamp(8px, 1.2vw, 18px)",
                      paddingRight: "clamp(8px, 1.2vw, 18px)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Helvetica Neue", Arial, sans-serif',
                        fontWeight: 700,
                        fontSize: "clamp(12px, 1.4vw, 20px)",
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
                      style={{
                        width: "clamp(12px, 1.3vw, 18px)",
                        height: "auto",
                        flexShrink: 0,
                      }}
                    />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ── PURPLE SECTION ── */}
        <div
          style={{
            flex: "1 0 auto",
            minHeight: "400px",
            backgroundColor: "#544396",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(20px, 3.5vh, 52px) 16px clamp(16px, 3vh, 40px)",
          }}
        >
          <Image
            src="/assets/tbh-orange.svg"
            alt="tbh."
            width={120}
            height={86}
            style={{
              objectFit: "contain",
              width: "clamp(70px, min(8vw, 10vh), 124px)",
              height: "auto",
              marginBottom: "clamp(4px, 0.8vh, 12px)",
            }}
          />

          <p
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 700,
              fontSize: "clamp(13px, min(1.7vw, 2vh), 22px)",
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "clamp(16px, 3vh, 44px)",
            }}
          >
            Girlhood is exhausting. So here we are.
          </p>

          <WaitlistForm />

          <p
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontSize: "clamp(10px, 0.9vw, 13px)",
              color: "rgba(255,255,255,0.55)",
              marginTop: "clamp(16px, 2.5vh, 32px)",
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
