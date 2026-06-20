import { Archivo } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import { contactInfo } from "./assets/data/libraryData";
import { Toaster } from "react-hot-toast";
import InternateProvider from "./InternateProvider";

const archivo = Archivo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "StudyHub Library | Premium Study Room in Your City",
    template: "%s | StudyHub Library",
  },
  description:
    "Premium AC Study Room with High-Speed WiFi, CCTV Security, Silent Environment & Comfortable Seating. Book your study seat now.",
  keywords: [
    "library near me",
    "study room",
    "reading room",
    "study center",
    "coaching study room",
    "silent library",
    "study hub",
  ],
  authors: [{ name: "StudyHub Library" }],
  creator: "StudyHub Library",
  openGraph: {
    title: "StudyHub Library | Premium Study Room",
    description:
      "Book premium study seats with AC, WiFi, CCTV & silent environment.",
    url: "https://librarypoint.vercel.app",
    siteName: "StudyHub Library",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StudyHub Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StudyHub Library",
    description:
      "Premium study room with AC, WiFi & silent environment.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivo.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-white text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <AntdRegistry>
          <ThemeProvider>
            {children}

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  name: "StudyHub Library",
                  description:
                    "Premium AC Study Room with WiFi, CCTV & silent environment",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: contactInfo.address,
                    addressLocality: "City",
                    addressRegion: "State",
                    postalCode: "000000",
                    addressCountry: "IN",
                  },
                  telephone: contactInfo.phone,
                  openingHours: "Mo-Su 06:00-23:00",
                }),
              }}
            />

            <InternateProvider />
            <Toaster />
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}