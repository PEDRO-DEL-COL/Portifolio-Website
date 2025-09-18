// src/app/layout.tsx
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Portfólio - Pedro Del Col",
  description: "Portfólio pessoal de Pedro Del Col",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen antialiased text-gray-900">
        <Navbar />
        {children}
        <footer className="mt-16 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Pedro Del Col — Desenvolvido com Next.js + Tailwind
        </footer>
      </body>
    </html>
  );
}
