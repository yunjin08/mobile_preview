import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apple iPhone",
  description: "Apple iPhone 15 Pro",
  icons: {
    icon: "/assets/images/apple.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/svg+xml" href="/public/assets/images/apple.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Apple iPhone</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
