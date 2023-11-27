import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Canal+ inspired",
  description: "Inspired by canal+ landing page",
  icons: {
    icon: "/canal.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
