import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {Header} from "@/components/common/Header";
import {Footer} from "@/components/common/Footer";
import { BackgroundShapes } from "@/components/common/BackgroundShapes";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>sammy2455 - Portafolio personal</title>
        <meta name="description" content="Portafolio personal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.svg" />

        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/fontawsome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/fontawsome/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body className={montserrat.className}>
        <div id="page-content">
          <Header />
            <main>
              {children}
            </main>
            <BackgroundShapes />
          <Footer />
        </div>

        <Script src="/assets/js/vendor/jquery-3.6.0.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/js/ajax-form.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/js/clipboard.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/js/slick.min.js" strategy="beforeInteractive"></Script>
        <Script src="/assets/js/script.js" strategy="beforeInteractive"></Script>
      </body>
    </html>
  );
}
