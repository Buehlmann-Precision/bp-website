import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bühlmann Precision",
    short_name: "Bühlmann Precision",
    description:
      "Schweizer CNC-Fertigung und technischer 3D-Druck.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#0F2346",

    lang: "de-CH",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}