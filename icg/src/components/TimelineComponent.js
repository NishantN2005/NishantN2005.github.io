// components/TimelineComponent.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * Props:
 *  - timelineData: Array<{ leftText?: string, heading: string, content: string }>
 *  - color?: string – dot/line color
 *  - maxWidth?: number | string – container max width (px or CSS string)
 *  - startOn?: "left" | "right" – which side the first item appears on (default "left")
 */
export default function TimelineComponent({
  timelineData,
  color = "#061e2a",
  maxWidth = 1100,
  startOn = "left",
}) {
  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: i * 0.08 },
    }),
  };

  const startIsLeft = startOn === "left";

  return (
    <div style={{ maxWidth, margin: "0 auto" }}>
      {timelineData.map((item, index) => {
        const showLeft = startIsLeft ? index % 2 === 0 : index % 2 !== 0;

        return (
          <motion.div
            key={index}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="tl-row"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 48px 1fr", // left | line | right
              alignItems: "stretch",
              columnGap: 0,
              padding: "28px 0",
            }}
          >
            {/* LEFT side (hug the line) */}
            <div
              className="tl-left"
              style={{
                justifySelf: "end",
                paddingRight: 12,  // tiny gap next to line
                maxWidth: 560,
                textAlign: "right",
                // Render only when this row belongs on the left
                visibility: showLeft ? "visible" : "hidden",
              }}
            >
              {showLeft && <ItemBlock item={item} align="end" />}
            </div>

            {/* CENTER column: auto-filling line + dot */}
            <div
              aria-hidden
              className="tl-center"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              {/* Top connector (transparent on very first row) */}
              <div
                style={{
                  flex: 1,
                  width: 3,
                  borderRadius: 2,
                  backgroundColor: index === 0 ? "transparent" : color,
                }}
              />
              {/* Dot */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: color,
                  boxShadow: "0 0 0 2px rgba(0,0,0,0.05)",
                  margin: "4px 0",
                }}
              />
              {/* Bottom connector (transparent on very last row) */}
              <div
                style={{
                  flex: 1,
                  width: 3,
                  borderRadius: 2,
                  backgroundColor:
                    index === timelineData.length - 1 ? "transparent" : color,
                }}
              />
            </div>

            {/* RIGHT side (hug the line) */}
            <div
              className="tl-right"
              style={{
                justifySelf: "start",
                paddingLeft: 12,   // tiny gap next to line
                maxWidth: 560,
                textAlign: "left",
                // Render only when this row belongs on the right
                visibility: showLeft ? "hidden" : "visible",
              }}
            >
              {!showLeft && <ItemBlock item={item} align="start" />}
            </div>

            {/* Responsive: stack on the right under 900px */}
            <style>{`
              @media (max-width: 900px) {
                .tl-row {
                  grid-template-columns: 12px 36px 1fr !important;
                }
                .tl-left {
                  visibility: hidden !important;
                }
                .tl-right {
                  visibility: visible !important;
                }
              }
            `}</style>
          </motion.div>
        );
      })}
    </div>
  );
}

function ItemBlock({ item, align }) {
  const right = align === "end";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: right ? "flex-end" : "flex-start",
        textAlign: right ? "right" : "left",
      }}
      aria-label={item.heading}
    >
      {item.leftText && (
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#1c66d6",
            marginBottom: 4,
            display: "block",
          }}
        >
          {item.leftText}
        </span>
      )}
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          color: "#061e2a",
          margin: 0,
          marginBottom: 8,
          lineHeight: 1.1,
          letterSpacing: "-0.01em",
        }}
      >
        {item.heading}
      </h2>
      <p
        style={{
          fontSize: "1.0625rem",
          color: "rgba(6,30,42,0.75)",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {item.content}
      </p>
    </div>
  );
}
