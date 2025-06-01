import type { Metadata } from "next";
import "@picocss/pico";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Next.js on GitHub Pages",
  description: "Deploy your static Next.js site to GitHub Pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
