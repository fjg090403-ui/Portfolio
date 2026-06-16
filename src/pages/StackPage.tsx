import { CountUp, ChromaGrid, MagicBento, PageShell, SpotlightCard } from '../components/UI'
import { techGroups } from '../data/portfolio'

export default function StackPage() {
  const chromaItems = techGroups.flatMap((group) => group.items.map((item) => ({ item, group: group.title, accent: group.accent })))

  return (
    <PageShell eyebrow="Stack" title="Tecnologías como sistema operativo personal">
      <MagicBento items={techGroups} />
      <ChromaGrid items={chromaItems} />
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          ['Áreas', 5],
          ['Tecnologías', 23],
          ['Modo producto', 100],
        ].map(([label, value]) => (
          <SpotlightCard key={label as string} className="p-6">
            <div className="text-5xl font-black text-white"><CountUp to={value as number} />{label === 'Modo producto' ? '%' : ''}</div>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-slate-400">{label as string}</p>
          </SpotlightCard>
        ))}
      </div>
    </PageShell>
  )
}
