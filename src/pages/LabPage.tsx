import { Cpu, Gauge, Orbit, WandSparkles } from 'lucide-react'
import { Threads } from '../components/Effects'
import { CircularGallery, PageShell, SignalMatrix, TiltedCard } from '../components/UI'
import { labItems } from '../data/portfolio'

export default function LabPage() {
  return (
    <PageShell eyebrow="Digital Lab" title="Prototipos, IA, automatización y visualización de sistemas">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 sm:p-8">
        <Threads />
        <CircularGallery items={labItems} />
        <div className="relative z-10 grid gap-4 md:grid-cols-3">
          {labItems.map((item, index) => {
            const Icon = [WandSparkles, Orbit, Cpu, Gauge, Cpu, WandSparkles][index]
            return (
              <TiltedCard key={item} accent={['#7c8cff', '#b16cff', '#28d8ff', '#6fffd2', '#ff70cf', '#ffffff'][index]}>
                <Icon className="text-cyan-200" />
                <h2 className="mt-5 text-2xl font-bold text-white">{item}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">Exploración rápida con criterio de producto, medición y una capa visual diferencial.</p>
              </TiltedCard>
            )
          })}
        </div>
      </div>
      <div className="mt-8">
        <SignalMatrix labels={['API gateway', 'Pipeline de visión', 'Mobile shell', 'Data cockpit', 'Automation runbook', 'AI assistant']} />
      </div>
    </PageShell>
  )
}
