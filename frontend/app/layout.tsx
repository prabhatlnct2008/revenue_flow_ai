import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revenue Flow AI - Transform Your Marketing Funnel with AI",
  description: "Turn your existing marketing funnel into an AI-powered revenue generation system. Book a free consultation today.",
  keywords: ["AI", "Marketing", "Revenue", "Lead Generation", "Automation"],
  authors: [{ name: "Revenue Flow AI" }],
  openGraph: {
    title: "Revenue Flow AI - Transform Your Marketing Funnel with AI",
    description: "Turn your existing marketing funnel into an AI-powered revenue generation system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
