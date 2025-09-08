import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cari Kerja - Platform Freelancer Malaysia",
  description: "Platform terbaik untuk mencari dan menawarkan perkhidmatan freelance di Malaysia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
