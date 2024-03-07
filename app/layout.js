// import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Surya Portfolio",
  description: "Video Editor Portfolio",
};

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body>{children}</body>
    </html>
  );
}
