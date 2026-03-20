import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vikas K | Full Stack Developer",
  description:
    "Vikas K is a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore my projects, skills, and experience.",
  keywords: [
    "Vikas K",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Vikas K" }],
  creator: "Vikas K",
  metadataBase: new URL("https://vikas-k.vercel.app"), // 🔁 Replace with your actual domain
  openGraph: {
    title: "Vikas K | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js. View my projects, experience, and skills.",
    url: "https://vikas-k.vercel.app", // 🔁 Replace with your actual domain
    siteName: "Vikas K Portfolio",
    images: [
      {
        url: "/vikas.JPG",
        width: 800,
        height: 800,
        alt: "Vikas K - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas K | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js. View my projects, experience, and skills.",
    images: ["/vikas.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://vikas-k.vercel.app", // 🔁 Replace with your actual domain
  },
  icons: {
    icon: "/vikas.JPG",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vikas K",
  url: "https://vikas-k.vercel.app", // 🔁 Replace with your actual domain
  image: "https://vikas-k.vercel.app/vikas.JPG",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js and modern web technologies.",
  sameAs: [
    "https://linkedin.com/in/your-linkedin", // 🔁 Replace with your LinkedIn URL
    "https://github.com/your-github",         // 🔁 Replace with your GitHub URL
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Full Stack Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}