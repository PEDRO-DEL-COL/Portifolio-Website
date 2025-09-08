import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b bg-white/50 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          Pedro Del Col
        </Link>
        <ul className="flex gap-6 text-sm font-medium">
          <li><Link href="/about">Sobre</Link></li>
          <li><Link href="/projects">Projetos</Link></li>
          <li><Link href="/contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}
