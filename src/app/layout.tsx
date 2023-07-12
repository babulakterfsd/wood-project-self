import Script from "next/script";
import "../styles/globals.css";

export const metadata = {
  title: "Hout-totaal : Houten vloeren, Houten meubels, Houten wanden",
  description:
    "Hout-totaal is een bedrijf dat gespecialiseerd is in het maken van houten vloeren, houten meubels en houten wanden.",
  keywords: "Hout-totaal, Houten vloeren, Houten meubels, Houten wanden ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://kit.fontawesome.com/8330d3dfaf.js"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
