import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Quicksand } from "next/font/google";
import Navbar from "@/components/GlobalComponents/Navbar";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});
export const metadata = {
  title: "KITI'KARD",
  description:
    "KITI'KARD, la carte de fidélité pour les commerces de proximité",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={quicksand.className} suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
