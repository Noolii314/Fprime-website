import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fprime – Applied AI that actually moves the needle",
  description:
    "Fprime hunts down weak points in your operations and replaces them with AI systems that buy you time, margin and market share.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
