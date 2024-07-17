import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

import { AppLayout } from "@/components/appLayout";

const inter = Syne({
  subsets: ["latin"],
  weight: "400",
});


const baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "CGPA Calculator - Stephengade",
  description: "Calculate your CGPA with ease! Understand the grading system and track your academic progress.",
  keywords: ['cgpa, oau cgpa, gpa, grading system, academic progress'],
  category: "website",
  creator: 'Stephen Gbolagade',
  generator: 'Next.js',
  openGraph: {
    images: `/cgpathumbnail.jpg`,
    title: 'CGPA Calculator - Your Tool for Success',
    description: 'Effortlessly calculate your CGPA and stay on top of your academic progress.',

  },
  twitter: {
    card: 'summary_large_image', // Recommended card type with image
    images: [`/cgpathumbnail.jpg`], // URL or path to your Twitter image
    title: 'CGPA Calculator: Calculate Your CGPA Now!',
    description: 'A user-friendly tool to calculate your CGPA and stay ahead in your academic journey.',
    creator: "@stephen_olgade"
  },
  authors: {
    name: 'Stephen Gbolagade',
    url: 'https://stephengade.com',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppLayout className={inter.className}>
        {children}
      </AppLayout>
    </html>
  );
}
