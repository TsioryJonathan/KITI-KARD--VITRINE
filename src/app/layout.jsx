import "./globals.css";


export const metadata = {
  title: "KITI'KARD",
  description:
    "KITI'KARD, la carte de fidélité pour les commerces de proximité",
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={quicksand.className}>
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
       
        <main>{children}</main>
        
      </body>
    </html>
  );
}
