import type { Metadata } from "next"; import { PageShell } from "../site";
export const metadata: Metadata = { title: "About | Tahir Textile", description: "Learn about Tahir Textile's premium Ankara and luxury fabric point of view." };
export default function About() { return <PageShell page="about" />; }
