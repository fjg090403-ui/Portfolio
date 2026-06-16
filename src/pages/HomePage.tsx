import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import { Aurora, Particles, Threads } from '../components/Effects'
import { AnimatedContent, CardSwap, CpuBadge, MagneticButton, SignalMatrix } from '../components/UI'
import { BlurText, GradientText, RotatingText, ShinyText } from '../components/TextEffects'

export default function HomePage({ navigate }: { navigate: (path: string) => void }) {
  return (
    <section className="hero-page">
      <Aurora />
      <Threads />
      <Particles density={10} />
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-8 px-5 pb-28 pt-24 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-12">
        <AnimatedContent>
          <ShinyText className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
            <Sparkles size={15} /> Full Stack Developer
          </ShinyText>
          <h1 className="max-w-5xl text-balance text-5xl font-black leading-[0.94] sm:text-7xl lg:text-[7.2rem]">
            <span className="hero-title-line">Francisco Javier</span>
            <GradientText> Requena García</GradientText>
          </h1>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-xl text-slate-300 sm:text-2xl">
            <BlurText text="Construyo" />
            <RotatingText words={['productos web', 'interfaces IA', 'SaaS escalables', 'sistemas útiles']} />
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Portfolio modular, interactivo y preparado para crecer: frontend, backend, datos e IA aplicados con una capa visual moderna.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button type="button" className="magnetic-btn primary" onClick={() => navigate('/proyectos')}>
              Ver proyectos <ArrowRight size={18} />
            </button>
            <MagneticButton href="mailto:fjg090403@gmail.com" variant="ghost">
              Contactar <Mail size={18} />
            </MagneticButton>
          </div>
        </AnimatedContent>
        <div className="hero-console">
          <CpuBadge>runtime: vite + react + ts</CpuBadge>
          <CardSwap
            items={[
              { title: 'Frontend premium', copy: 'React, TypeScript y Tailwind con movimiento controlado.', accent: '#7c8cff' },
              { title: 'Backend Symfony', copy: 'APIs, entidades y servicios preparados para crecer.', accent: '#6fffd2' },
              { title: 'IA aplicada', copy: 'Python, MediaPipe y Big Data orientados a prototipos útiles.', accent: '#ff70cf' },
            ]}
          />
          <SignalMatrix labels={['React', 'Symfony', 'Python', 'Docker', 'MediaPipe', 'PostgreSQL', 'Tailwind', 'Big Data']} />
        </div>
      </div>
    </section>
  )
}
