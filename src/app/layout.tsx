import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StartupLens AI",
  description:
    "AI-powered startup validation and business planning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}