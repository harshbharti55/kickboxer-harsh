import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Harsh Bharti | Official Athlete Website";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000",
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
            color: "#D4AF37",
          }}
        >
          Harsh Bharti
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 34,
          }}
        >
          Indian Full Contact Kickboxer
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 22,
            color: "#cccccc",
          }}
        >
          Official Website • Athlete • National Medalist
        </div>
      </div>
    ),
    size
  );
}
