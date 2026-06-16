import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { personalInfo } from "@/data/portfolio";
import "./globals.css";

const paperlogy = localFont({
  src: "../../public/fonts/Paperlogy-4Regular.ttf",
  variable: "--font-paperlogy",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.role}`,
  description: personalInfo.tagline,
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.role}`,
    description: personalInfo.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${paperlogy.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className={`${paperlogy.className} min-h-screen bg-[#f5f0e8] text-foreground`}>
        <ThemeProvider>
          <div className="min-h-screen w-full">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
