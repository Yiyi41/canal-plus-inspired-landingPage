import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Canal+ landing page clone",
  description: "Inspired by canal+ landing page",
  icons: {
    icon: "/canalplus-logo-v2.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
