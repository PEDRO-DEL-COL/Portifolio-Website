export default function HomePage() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold tracking-tight">
        Olá, eu sou o <span className="text-blue-600">Pedro Del Col</span>
      </h1>
      <p className="mt-4 max-w-xl text-lg text-gray-600">
        Desenvolvedor Front-end apaixonado por criar interfaces modernas,
        funcionais e de alta performance.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="/projects"
          className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white shadow hover:bg-blue-700"
        >
          Ver Projetos
        </a>
        <a
          href="/contact"
          className="rounded-xl border px-5 py-2 font-semibold hover:bg-gray-100"
        >
          Contato
        </a>
      </div>
    </section>
  );
}
