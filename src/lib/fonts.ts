import localFont from "next/font/local";

export const foundryPlek = localFont({
  src: "../../public/fonts/FoundryPlek_Medium.ttf",
  variable: "--font-logo",
  weight: "500",
  display: "swap",
});

export const youth = localFont({
  src: "../../public/fonts/Youth_Medium.otf",
  variable: "--font-heading",
  weight: "500",
  display: "swap",
});

export const poppins = localFont({
  src: [
    { path: "../../public/fonts/Poppins_Regular.ttf", weight: "400" },
    { path: "../../public/fonts/Poppins_Medium.ttf", weight: "500" },
  ],
  variable: "--font-body",
  display: "swap",
});
