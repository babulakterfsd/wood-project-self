import Script from "next/script";
import 'aos/dist/aos.css';
import "../styles/globals.css";

export const metadata = {
  title: "Hout Totaal | Eiken - Frake - Hardhout – Suar - Steigerhout",
  description:
    "Hout-totaal is een bedrijf dat gespecialiseerd is in het maken van houten vloeren, houten meubels en houten wanden.",
  keywords: "Hout-totaal, Houten vloeren, Houten meubels, Houten wanden ",
};

const ga_id = 'G-K3585VJX7H';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?
      id=${ga_id}`}
        ></Script>
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ga_id}');
        `,
          }}
        ></Script>
        {children}
        <Script
          src="https://kit.fontawesome.com/8330d3dfaf.js"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
