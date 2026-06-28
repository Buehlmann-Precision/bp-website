import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F2346",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          Bühlmann Precision
        </div>

        <div
          style={{
            fontSize: 34,
            opacity: 0.9,
          }}
        >
          CNC-Fertigung • CAD • Technischer 3D-Druck
        </div>
      </div>
    ),
    size
  );
}