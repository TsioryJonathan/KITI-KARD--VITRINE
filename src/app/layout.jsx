import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Raleway, Inter, Poppins, Montserrat } from "next/font/google";
import Navbar from "@/components/GlobalComponents/Navbar";
import Footer from "@/components/GlobalComponents/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "KITI'KARD",
  description:
    "KITI'KARD, la carte de fidélité pour les commerces de proximité",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={raleway.className} suppressHydrationWarning>
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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
