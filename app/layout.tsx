import type { Metadata } from "next";
import "@picocss/pico";
import Header from "./components/header";
import "./global.css";

export const metadata: Metadata = {
  title: "Eiqnepm",
  description: "Hello world!",
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
