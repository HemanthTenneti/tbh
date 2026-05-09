"use client";

import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

const MARQUEE_ITEMS = ["launch party invites", "freebies", "tbh insiders", "early access"];
const MARQUEE_REPEAT_COUNT = 50;
const MARQUEE_BASE_DURATION_SECONDS = 24;
const MARQUEE_DURATION_SECONDS = MARQUEE_BASE_DURATION_SECONDS * MARQUEE_REPEAT_COUNT;
const MARQUEE_SEQUENCE = Array.from({ length: MARQUEE_REPEAT_COUNT }, () => MARQUEE_ITEMS).flat();

export default function Home() {
  return (
    <>
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
        <div className="page-top">
          {/* ── HEADER ── */}
          <div className="header-wrap">
            <Image
              src="/assets/navbar-scallop.svg"
              alt=""
              aria-hidden="true"
              width={1900}
              height={123}
              priority
              className="header-scallop-image header-scallop-desktop"
            />
            <Image
              src="/assets/header-scallop-mobile.svg"
              alt=""
              aria-hidden="true"
              width={402}
              height={84}
              priority
              className="header-scallop-image header-scallop-mobile"
            />
            <div className="nav-logo-wrap">
              <Image
                className="nav-logo-image"
                src="/assets/tbh-violet.svg"
                alt="the better half"
                width={120}
                height={82}
                priority
                style={{
                  objectFit: "contain",
                  width: "clamp(72px, 9vw, 124px)",
                  height: "auto",
                  maxHeight: "100%",
                }}
              />
            </div>
          </div>

          {/* ── CREAM SECTION ── */}
          <div
            className="page-cream"
            style={{
              flex: 1,
              minHeight: 0,
              backgroundColor: "#fbefe1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div className="hero-mascot-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/mascot.svg"
                alt="tbh mascot"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>

            <p
              className="hero-copy"
              style={{
                fontFamily: '"Bastia Bold", Georgia, serif',
                color: "#1a1a1a",
              }}
            >
              And for the lady, perhaps...
            </p>
            <p
              className="hero-copy"
              style={{
                fontFamily: '"Bastia Bold", Georgia, serif',
                color: "#f1663b",
              }}
            >
              a bloody break?
            </p>
          </div>
        </div>

        {/* ── MARQUEE ── */}
        <div
          className="marquee-shell"
          style={{
            width: "100%",
            overflow: "hidden",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            backgroundColor: "transparent",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            className="marquee-rail"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(18px, 2vw, 30px)",
              whiteSpace: "nowrap",
              animation: `ticker ${MARQUEE_DURATION_SECONDS}s linear infinite`,
              willChange: "transform",
              transform: "translate3d(0,0,0)",
              lineHeight: 1,
              width: "max-content",
              minWidth: "max-content",
            }}
          >
            {[0, 1].map((sequenceIndex) => (
              <span
                key={sequenceIndex}
                className="marquee-sequence"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "clamp(18px, 2vw, 30px)",
                }}
              >
                {MARQUEE_SEQUENCE.map((item, itemIndex) => (
                  <span
                    key={`${sequenceIndex}-${itemIndex}-${item}`}
                    className="marquee-token"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "clamp(8px, 1.2vw, 16px)",
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
                      style={{
                        width: "clamp(11px, 1.2vw, 17px)",
                        height: "auto",
                        minWidth: "clamp(11px, 1.2vw, 17px)",
                        flexShrink: 0,
                      }}
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
            maxHeight: "none",
            backgroundColor: "#544396",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(10px, 2vh, 48px) 16px clamp(26px, 4.8vh, 82px)",
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
            className="purple-intro"
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 700,
              fontSize: "clamp(12px, min(1.6vw, 1.9vh), 22px)",
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "clamp(8px, 1.7vh, 24px)",
            }}
          >
            Girlhood is exhausting. So here we are.
          </p>

          <p
            className="purple-join-line"
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontWeight: 700,
              fontSize: "clamp(12px, min(1.5vw, 1.8vh), 20px)",
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "clamp(14px, 2.8vh, 44px)",
            }}
          >
            join the{" "}
            <span style={{ color: "#f1663b" }}>waitlist</span>
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
            © 2026 tbh.thebetterhalf
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}
