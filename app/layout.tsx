import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { metadataBase: new URL("https://tahirtextile.example"), title:{default:"Tahir Textile | Premium Ankara & Luxury Fabrics",template:"%s | Tahir Textile"}, description:"Shop premium Ankara and luxury fabrics from Tahir Textile.", icons:{icon:"/favicon.svg"}, openGraph:{type:"website",siteName:"Tahir Textile",images:[{url:"/images/tahir-hero.png",width:1536,height:1024,alt:"Premium Ankara textile still life"}]}, twitter:{card:"summary_large_image"} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
