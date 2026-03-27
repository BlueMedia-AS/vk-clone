import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaktmester Consult AS – Din lokale vaktmester!",
  description:
    "Vaktmester Consult AS tilbyr profesjonelle vaktmestertjenester, gartnertjenester, vintertjenester, renhold og oppussing i Tomter, Askim, Mysen og omegn.",
  keywords: "vaktmester, vedlikehold, Tomter, Askim, Mysen, Østfold",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${archivo.variable} ${ibmPlexSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
