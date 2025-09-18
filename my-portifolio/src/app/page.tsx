// src/app/page.tsx
import VideoBackground from "../components/VideoBackground";
// import AnimatedSection from "../components/AnimatedSection";
import AboutSection from "@/components/AboutSection";
import SkillsSphere from "@/components/skillSphere";



export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <VideoBackground />

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-center">
            <span className="text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]">
              Olá, eu sou
            </span>{" "}
            <span className="text-teal-300 drop-shadow-[0_0_3px_rgba(45,212,191,0.9)]">
              Pedro Del Col
            </span>{" "}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/90 text-lg">
            Estudante de Ciência da Computação & Gestão de TI — apaixonado por Data Science, Data Analisys e Data Engineering.
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <a
              href="/CV-Pedro-DelCol-PT.pdf"
              className="bg-teal-700 text-white px-5 py-3 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              Baixar CV
            </a>
            <a href="#projetos" className="border border-white px-5 py-3 rounded-lg text-white/90 hover:scale-105 transition-transform">
              Ver projetos
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <AboutSection />

      {/* HABILIDADES */}
      <section id="habilidades" className="bg-teal-950 py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Minhas Habilidades
          </h2>
          <SkillsSphere /> {/* 👈 aqui ele aparece */}
        </div>
      </section>
    </main>
  );
}
