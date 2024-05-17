import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Startup()",
  description: "We'll have to think of something to go here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mono.className}>{children}</body>
    </html>
  );
}
