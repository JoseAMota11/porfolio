import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#0a0a0a" }}>
      <svg width="180" height="180" viewBox="0 0 180 180">
        <path d="M43 52h20v53c0 22-10 34-31 34v-19c8 0 11-4 11-15V52Zm35 86V52h21l18 34 18-34h20v86h-20V91l-18 32-19-32v47H78Z" fill="#c9f24d" />
      </svg>
    </div>,
    size,
  );
}
