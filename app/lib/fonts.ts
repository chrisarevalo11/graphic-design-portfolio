import { Instrument_Sans, Instrument_Serif } from "next/font/google";

export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

export const instrumentSerif = Instrument_Serif({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});
