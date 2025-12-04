import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bad Time Simulator",
  description:
    "Bad Time Simulator – Sans Fight & Undertale boss battles playable in your browser.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#05123b] via-[#020821] to-[#010312]">
        {children}
      </body>
    </html>
  );
}
