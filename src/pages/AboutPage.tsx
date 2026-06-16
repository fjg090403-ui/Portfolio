import { BrainCircuit, Code2, Layers3, ServerCog } from 'lucide-react'
import { LaserGrid, Particles } from '../components/Effects'
import { AnimatedContent, PageShell, SpotlightCard, TerminalPanel, TiltedCard } from '../components/UI'
import { GlitchText } from '../components/TextEffects'

const story = [
  'Desarrollador Full Stack con mentalidad de producto: conecto interfaces limpias con lógica backend sólida en Symfony, PHP y APIs.',
  'Me interesa construir herramientas útiles, sistemas medibles y experiencias que transmitan precisión desde el primer gesto.',
  'Mi zona natural mezcla React, TypeScript, Symfony, APIs, bases de datos e IA aplicada con ejecución orientada a usuario final.',
]

export default function AboutPage() {
  return (
    <PageShell eyebrow="Sobre mí" title="Una identidad técnica con narrativa de producto">
      <Particles density={18} />
      <LaserGrid />
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <SpotlightCard className="p-6 sm:p-8">
          <GlitchText className="text-3xl font-black text-white sm:text-4xl">Full Stack con pulso de producto</GlitchText>
          <div className="mt-8 space-y-5">
            {story.map((item, index) => (
              <AnimatedContent key={item} delay={index * 0.08}>
                <p className="text-lg leading-8 text-slate-300">{item}</p>
              </AnimatedContent>
            ))}
          </div>
        </SpotlightCard>
        <TerminalPanel
          lines={[
            '$ whoami',
            'francisco_javier_requena',
            '$ focus --current',
            'react | symfony | backend | ia | producto',
            '$ output',
            'interfaces claras + sistemas mantenibles',
          ]}
        />
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          ['Arquitectura pragmática', 'Decisiones técnicas pensadas para crecer sin sobrediseñar.', Code2, '#7c8cff'],
          ['Backend con Symfony', 'APIs, entidades, servicios y lógica de negocio con estructura mantenible.', ServerCog, '#6fffd2'],
          ['UI con movimiento intencional', 'Animación al servicio de jerarquía, foco y sensación premium.', Layers3, '#b16cff'],
          ['IA aplicada', 'Prototipos donde datos, visión y automatización resuelven problemas reales.', BrainCircuit, '#28d8ff'],
        ].map(([title, copy, Icon, accent]) => (
          <TiltedCard key={title as string} accent={accent as string}>
            <Icon className="text-cyan-200" />
            <h2 className="mt-5 text-2xl font-bold text-white">{title as string}</h2>
            <p className="mt-3 text-slate-300">{copy as string}</p>
          </TiltedCard>
        ))}
      </div>
    </PageShell>
  )
}
