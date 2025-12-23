// src/components/InvitationCard.tsx
import React, { FC, useEffect, useRef, useState } from "react";
import envelopeHD from "@/assets/envelope.png";

interface InvitationCardProps {
  imageSrc?: string; // final image to show after closing the letter
  envelopeSrc?: string; // optional envelope image (if you have one)
  inviterName?: string;
  title?: string;
  date?: string;
  time?: string;
  venue?: string;
  className?: string;
}

export const InvitationCard: FC<InvitationCardProps> = ({
  imageSrc,
  envelopeSrc,
  inviterName = "Harsimran Kaur Bedi",
  title = "Sangeet Soirée",
  date = "January 21, 2026",
  time = "6:30 PM",
  venue = "Silver Banquet, Agrasen Foundation",
  className,
}) => {
  const [open, setOpen] = useState(false); // overlay open (letter visible)
  const [revealed, setRevealed] = useState(false); // whether final image should replace envelope
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // focus the close button when the overlay opens for accessibility
  useEffect(() => {
    if (open && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [open]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setRevealed(true);
  };

  return (
    <>
      {/* Component-scoped CSS for the animations + pulse CTA */}
      <style>{`
        /* Elegant reveal animation (slide up + slight scale) */
        @keyframes letter-reveal {
          0% { transform: translateY(40px) scale(0.96); opacity: 0 }
          60% { transform: translateY(0) scale(1.02); opacity: 1 }
          100% { transform: translateY(0) scale(1); opacity: 1 }
        }

        /* gentle settling of inner sheet */
        @keyframes sheet-settle {
          0% { transform: translateY(-10px) scale(0.98); opacity: 0 }
          100% { transform: translateY(0) scale(1); opacity: 1 }
        }

        /* soft attention pulse for TAP button */
        @keyframes soft-pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }

        /* overlay fade */
        @keyframes overlay-fade { from { opacity: 0 } to { opacity: 1 } }

        /* small helper: avoid text-selection on CTA */
        .no-select { user-select: none; -webkit-user-select: none; }
      `}</style>

      {/* Golden framed box wrapper */}
      <div
        className={`invitation-box ${className ?? ""}`}
        style={{
          minHeight: 420,
          maxWidth: 660,
          width: "100%",
          margin: "0 auto",
          borderRadius: 12,
          padding: 14,
          background: "linear-gradient(180deg,#fff9f1,#fff7ec)",
          boxShadow: "0 22px 60px rgba(0,0,0,0.15)",
          border: "6px solid rgba(212,169,83,0.95)",
          position: "relative",
          overflow: "hidden",
          transform: "translateZ(0)",
        }}
        aria-hidden={open}
      >
        {/* Envelope or final image */}
        {!revealed ? (
          <div
            className="envelope-wrapper"
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              userSelect: "none",
              position: "relative",
            }}
          >
            {/* If the user provided an envelope image, render it and overlay the big CTA button */}
            {envelopeSrc ? (
              <div style={{ position: "relative", width: "92%", maxWidth: 580, height: "84%" }}>
                <img
                  src={envelopeSrc}
                  alt="Invitation envelope"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: 8,
                    boxShadow: "inset 0 6px 12px rgba(0,0,0,0.06), 0 18px 40px rgba(0,0,0,0.08)",
                  }}
                />

                {/* Big centered TAP TO OPEN button (accessible) */}
                <button
                  onClick={handleOpen}
                  onKeyDown={(e) => { if (e.key === "Enter") handleOpen(); }}
                  aria-label="Open invitation"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    padding: "18px 36px",
                    borderRadius: 999,
                    border: "2px solid rgba(180,120,40,0.7)",
                    background: "linear-gradient(180deg,#fff8e1,#e6c07a)",
                    fontWeight: 900,
                    fontSize: 20,
                    color: "#6b4819",
                    cursor: "pointer",
                    boxShadow: "0 14px 36px rgba(0,0,0,0.18)",
                    animation: "soft-pulse 2000ms ease-in-out infinite",
                    textTransform: "uppercase",
                    letterSpacing: 1.8,
                  }}
                >
                  TAP TO OPEN
                </button>
              </div>
            ) : (
              /* Stylized envelope (no user image) with big centered CTA */
              <div
                style={{
                  width: "92%",
                  maxWidth: 580,
                  height: "84%",
                  background: "linear-gradient(180deg, #fdf7ef 0%, #f5ecd7 40%, #efe1bf 100%)",
                  borderRadius: 10,
                  position: "relative",
                  boxShadow: "inset 0 6px 12px rgba(0,0,0,0.06), 0 18px 50px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={handleOpen}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleOpen();
                }}
                role="button"
                tabIndex={0}
              >
                {/* remove small H&D and center emblem — keep the design clean */}

                {/* Big centered TAP TO OPEN button (as a DOM button for accessibility) */}
                <button
                  onClick={(e) => { e.stopPropagation(); handleOpen(); }}
                  aria-label="Open invitation"
                  style={{
                    padding: "18px 36px",
                    borderRadius: 999,
                    border: "2px solid rgba(180,120,40,0.7)",
                    background: "linear-gradient(180deg,#fff8e1,#e6c07a)",
                    fontWeight: 900,
                    fontSize: 20,
                    color: "#6b4819",
                    cursor: "pointer",
                    boxShadow: "0 14px 36px rgba(0,0,0,0.18)",
                    animation: "soft-pulse 2000ms ease-in-out infinite",
                    textTransform: "uppercase",
                    letterSpacing: 1.8,
                    zIndex: 5,
                  }}
                >
                  TAP TO OPEN
                </button>

                {/* subtle bottom hint (optional, low emphasis) */}
                <div style={{ position: "absolute", bottom: 18, left: "50%", transform: "translateX(-50%)" }}>
                  <div style={{ fontSize: 12, color: "#6b4819", opacity: 0.9 }} className="no-select">Tap the button to open</div>
                </div>
              </div>
            )}
          </div>
        ) : (
          // FINAL IMAGE VIEW (shown after the letter was closed)
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#7a4f1a",
                  fontWeight: 600,
                  padding: 20,
                }}
              >
                Invitation image will appear here
              </div>
            )}
          </div>
        )}
      </div>

      {/* OVERLAY: only mounted when open === true */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Invitation letter"
          className="invitation-overlay"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "overlay-fade 360ms ease forwards",
          }}
        >
          {/* dark backdrop */}
          <div
            onClick={handleClose}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(10,8,6,0.45)",
              backdropFilter: "blur(4px)",
            }}
          />

          {/* Letter container: animates unfolding */}
          <div
            style={{
              width: "min(1100px, 92vw)",
              maxHeight: "92vh",
              overflow: "auto",
              borderRadius: 14,
              zIndex: 90,
              perspective: 1400,
              padding: 8,
            }}
          >
            <div
              style={{
                background: "linear-gradient(180deg,#fbf6ec,#efe3cc)",
                borderRadius: 10,
                padding: 28,
                border: "3px solid rgba(200,160,90,0.95)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.52)",
                transformOrigin: "top center",
                animation: "letter-reveal 900ms ease-out forwards",
              }}
            >
              {/* Top area: centered big title instead of inviter name + H&D box */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 18,
                }}
              >
                <div style={{ fontWeight: 800, color: "#7a4f1a", fontSize: 22 }}>
                  {title}
                </div>
              </div>

              {/* The letter body – vintage style */}
              <div
                style={{
                  background:
                    "repeating-linear-gradient(180deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 8px)",
                  padding: "18px 20px",
                  borderRadius: 6,
                  animation: "sheet-settle 700ms ease 350ms both",
                }}
              >
                <h3
                  style={{
                    fontFamily: "serif",
                    fontSize: 30,
                    margin: "6px 0 14px 0",
                    color: "#7a4f1a",
                    lineHeight: 1.02,
                  }}
                >
                  {title}
                </h3>

                <p style={{ color: "#6b4e27", marginBottom: 14 }}>
                  <strong>{inviterName}</strong> warmly invites you to join the Ladies' Sangeet.
                </p>

                <p style={{ color: "#6b4e27", marginBottom: 14, fontStyle: "italic" }}>
                  {date} • {time}
                </p>

                <p style={{ color: "#6b4e27", marginBottom: 20 }}>{venue}</p>

                <p style={{ color: "#5a4328", lineHeight: 1.6 }}>
                  It gives me immense pleasure to invite you to an evening dedicated to music and celebration. I look forward to your gracious presence as we gather to mark this special occasion. Your being there will truly enhance the joy of the night.
                </p>

                {/* signature */}
                <div style={{ marginTop: 26, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: "#5a4328" }}>
                    With love,
                    <div style={{ fontWeight: 700, marginTop: 6 }}>{inviterName}</div>
                  </div>

                  <div style={{ color: "#6b4e27", fontSize: 12, opacity: 0.9 }}>
                    • {new Date().getFullYear()}
                  </div>
                </div>
              </div>

              {/* Close controls: placed bottom-right of the letter */}
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 22, gap: 10 }}>
                <button
                  ref={closeButtonRef}
                  onClick={handleClose}
                  style={{
                    padding: "10px 16px",
                    borderRadius: 999,
                    border: "1px solid rgba(120,90,40,0.2)",
                    background: "linear-gradient(180deg,#fff,#f3e5cc)",
                    cursor: "pointer",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                    fontWeight: 700,
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InvitationCard;
