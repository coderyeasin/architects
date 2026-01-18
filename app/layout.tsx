import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const geistWork = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "G3 Architects",
  description: "Skeleton of Buildings",
  icons: {
    icon: "/icons/medal.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistWork.variable} antialiased`}>
        <main className="w-full min-h-screen bg-white">{children}</main>
      </body>
    </html>
  );
}
