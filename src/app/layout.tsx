import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import Header from "@/components/header";
import { GetInTouch } from "@/components/get-in-touch";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh Bardhan",
  description: "Personal portfolio of Harsh Bardhan",
  icons: {
    icon: [
      {
        url: "/avatar.png",
        href: "/avatar.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          storageKey="portfolio-theme"
          defaultTheme="dark"
          enableSystem
          attribute="class"
        >
          <div className="mx-auto max-w-5xl px-5 pt-24 pb-12 sm:px-8">
            <Header />
            {children}
            <GetInTouch />
            <Footer />
          </div>
        </ThemeProvider>
        <Image
          width={1512}
          height={550}
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
          src="/images/gradient-background-top.png"
          alt=""
          role="presentation"
          priority
        />
        <Image
          width={1512}
          height={447}
          className="absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2"
          src="/images/gradient-background-bottom.png"
          alt=""
          role="presentation"
          priority
        />
      </body>
    </html>
  );
}
