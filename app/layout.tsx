import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Page Optimisation",
  description:
    "Tech Challenge – Next.js + TypeScript: product list, detail, filters, sorting, and performance optimisations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="topbar">
            <div className="brand-wrap">
              <span className="brand-chip">Tech&nbsp;Challenge&nbsp;#2</span>
              <span className="brand-name">Ferdy&nbsp;Salsabilla</span>
            </div>
            <nav className="topnav">
              <a href="/products" className="topnav-link">
                Products
              </a>
              {/* tambahkan link lain bila perlu */}
            </nav>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
