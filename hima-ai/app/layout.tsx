import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "HIMA AI", description: "A little space for big thoughts." };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#fff6fb" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
