
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditi Yadav | AI, Data & Software",
  description:
    "The personal portfolio of Aditi Yadav — exploring AI, data science, analytics, and software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
