import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import BootstrapJs from "../components/BootstrapJs";
import AuthGuard from "../components/AuthGuard";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Next App",
  description: "A styled Next.js + Bootstrap demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} d-flex flex-column min-vh-100`}>
        <AuthGuard>
          <Navbar />
          <main className="container flex-grow-1 py-4">{children}</main>
          <Footer />
        </AuthGuard>
        {/* Load Bootstrap’s JS bundle only in the browser */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.5.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
