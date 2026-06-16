import { ArrowLeft, ArrowRight, Cpu, GraduationCap } from 'lucide-react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { type Project, type TechGroup } from '../data/portfolio'

export function AnimatedContent({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
      transition={{ duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function PageShell({ eyebrow, title, children, compact = false }: { eyebrow: string; title: string; children: ReactNode; compact?: boolean }) {
  return (
    <section className={`page-shell ${compact ? 'page-shell-compact' : ''}`}>
      <div className="mx-auto max-w-7xl">
        <AnimatedContent>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-cyan-200">{eyebrow}</p>
          <h1 className="mb-8 max-w-5xl text-4xl font-black leading-tight text-white sm:text-6xl">{title}</h1>
        </AnimatedContent>
        {children}
      </div>
    </section>
  )
}

export function SpotlightCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  function onMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    ref.current?.style.setProperty('--x', `${event.clientX - rect.left}px`)
    ref.current?.style.setProperty('--y', `${event.clientY - rect.top}px`)
  }

  return <div ref={ref} onMouseMove={onMove} className={`spotlight-card ${className}`}>{children}</div>
}

export function TiltedCard({ children, accent }: { children: ReactNode; accent: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-80, 80], [6, -6]), { stiffness: 160, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-80, 80], [-6, 6]), { stiffness: 160, damping: 20 })

  return (
    <motion.div
      className="tilted-card"
      style={{ rotateX, rotateY, '--accent': accent } as CSSProperties}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        x.set(event.clientX - rect.left - rect.width / 2)
        y.set(event.clientY - rect.top - rect.height / 2)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}

export function MagneticButton({ href, children, variant }: { href: string; children: ReactNode; variant: 'primary' | 'ghost' }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className={`magnetic-btn ${variant}`}
      style={{ x, y }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        x.set((event.clientX - rect.left - rect.width / 2) * 0.12)
        y.set((event.clientY - rect.top - rect.height / 2) * 0.12)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.a>
  )
}

export function CountUp({ to }: { to: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let raf = 0
    const start = performance.now()
    const tick = (time: number) => {
      const progress = Math.min((time - start) / 1200, 1)
      setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, to])

  return <span ref={ref}>{value}</span>
}

export function MagicBento({ items }: { items: TechGroup[] }) {
  return (
    <div className="magic-bento">
      {items.map(({ title, accent, Icon, items: stack }) => (
        <TiltedCard key={title} accent={accent}>
          <div className="flex items-center gap-3 text-white">
            <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-cyan-100"><Icon /></span>
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((item) => <span key={item} className="rounded-full bg-black/20 px-3 py-1 text-sm text-slate-200">{item}</span>)}
          </div>
        </TiltedCard>
      ))}
    </div>
  )
}

export function ChromaGrid({ items }: { items: { item: string; group: string; accent: string }[] }) {
  return (
    <div className="chroma-grid">
      {items.map((tech) => (
        <div key={`${tech.group}-${tech.item}`} className="chroma-tile" style={{ '--accent': tech.accent } as CSSProperties}>
          <span>{tech.item}</span>
          <small>{tech.group}</small>
        </div>
      ))}
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <SpotlightCard className="group overflow-hidden p-0">
      <div className="pixel-transition" style={{ '--accent': project.accent } as CSSProperties} />
      <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-300">{project.tag}</span>
          <ArrowRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-white" size={20} />
        </div>
        <ProjectImageCarousel project={project} />
        <h2 className="mt-6 max-w-lg text-3xl font-black text-white sm:text-4xl">{project.title}</h2>
        <p className="mt-5 max-w-xl leading-7 text-slate-300">{project.description}</p>
        <p className="mt-5 rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-cyan-100">{project.signal}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-8">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full bg-white/[0.07] px-3 py-1 text-sm text-slate-200">{item}</span>
          ))}
        </div>
      </div>
    </SpotlightCard>
  )
}

export function ProjectSummaryCard({ project, navigate }: { project: Project; navigate: (path: string) => void }) {
  return (
    <SpotlightCard className="project-summary group overflow-hidden p-0">
      <div className="pixel-transition" style={{ '--accent': project.accent } as CSSProperties} />
      <div className="relative z-10 grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <ProjectVisual project={project} />
        <div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-300">{project.tag}</span>
          <h2 className="mt-5 max-w-2xl text-3xl font-black text-white sm:text-5xl">{project.title}</h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-300">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full bg-white/[0.07] px-3 py-1 text-sm text-slate-200">{item}</span>
            ))}
          </div>
          <a
            href={`/proyectos/${project.slug}`}
            className="project-access"
            onClick={(event) => {
              event.preventDefault()
              navigate(`/proyectos/${project.slug}`)
            }}
          >
            Ver proyecto <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </SpotlightCard>
  )
}

export function ProjectImageCarousel({ project }: { project: Project }) {
  const [active, setActive] = useState(0)
  const captions = project.images?.map((_, index) => project.captions?.[index] ?? `Captura ${index + 1}`) ?? ['Vista general', 'Flujo principal', 'Detalle técnico']

  function move(direction: number) {
    setActive((current) => (current + direction + captions.length) % captions.length)
  }

  return (
    <div className="project-image-carousel">
      <ProjectVisual project={project} variant={active} />
      <div className="project-image-controls">
        <button type="button" onClick={() => move(-1)} aria-label={`Imagen anterior de ${project.title}`}><ArrowLeft size={16} /></button>
        <span>{captions[active]}</span>
        <button type="button" onClick={() => move(1)} aria-label={`Imagen siguiente de ${project.title}`}><ArrowRight size={16} /></button>
      </div>
      <div className="project-image-dots" aria-hidden="true">
        {captions.map((caption, index) => (
          <button key={caption} type="button" className={index === active ? 'active' : ''} onClick={() => setActive(index)} tabIndex={-1} />
        ))}
      </div>
    </div>
  )
}

function ProjectVisual({ project, variant = 0 }: { project: Project; variant?: number }) {
  const image = project.images?.[variant]

  return (
    <div className={`project-visual project-visual-${project.visual} ${image ? 'project-visual-real' : ''} variant-${variant}`} style={{ '--accent': project.accent, '--variant': variant } as CSSProperties}>
      <div className="visual-toolbar">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-screen">
        {image ? (
          <img src={image} alt={`${project.title} - captura ${variant + 1}`} loading="lazy" />
        ) : (
          <>
            <div className="visual-node node-a" />
            <div className="visual-node node-b" />
            <div className="visual-node node-c" />
            <div className="visual-line line-a" />
            <div className="visual-line line-b" />
            <strong>{project.tag}</strong>
          </>
        )}
      </div>
    </div>
  )
}

export function CardSwap({ items }: { items: { title: string; copy: string; accent: string }[] }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => setActive((current) => (current + 1) % items.length), 2600)
    return () => window.clearInterval(interval)
  }, [items.length])

  return (
    <div className="card-swap" aria-label="Capacidades destacadas">
      {items.map((item, index) => {
        const offset = (index - active + items.length) % items.length
        return (
          <article
            key={item.title}
            className={offset === 0 ? 'active' : ''}
            style={{ '--offset': offset, '--accent': item.accent } as CSSProperties}
            aria-hidden={offset !== 0}
          >
            <span>{item.title}</span>
            <p>{item.copy}</p>
          </article>
        )
      })}
      <div className="card-swap-controls" aria-label="Seleccionar capacidad">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={index === active ? 'active' : ''}
            onClick={() => setActive(index)}
            aria-label={item.title}
          />
        ))}
      </div>
    </div>
  )
}

export function Masonry({ items }: { items: { title: string; copy: string }[] }) {
  return (
    <div className="masonry">
      {items.map((item, index) => (
        <SpotlightCard key={item.title} className="p-6">
          <GraduationCap className="text-cyan-200" />
          <h2 className="mt-5 text-2xl font-bold text-white">{item.title}</h2>
          <p className="mt-3 leading-7 text-slate-300">{item.copy}</p>
          <div className="mt-6 h-2 rounded-full bg-white/10">
            <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" style={{ width: `${72 + index * 11}%` }} />
          </div>
        </SpotlightCard>
      ))}
    </div>
  )
}

export function TerminalPanel({ lines }: { lines: string[] }) {
  return (
    <SpotlightCard className="terminal-panel p-5">
      <div className="mb-5 flex gap-2">
        <span />
        <span />
        <span />
      </div>
      <pre>{lines.join('\n')}</pre>
    </SpotlightCard>
  )
}

export function CircularGallery({ items }: { items: string[] }) {
  return (
    <div className="circular-gallery" aria-hidden="true">
      {items.map((item, index) => (
        <span key={item} style={{ '--i': index } as CSSProperties}>{item}</span>
      ))}
    </div>
  )
}

export function RollingGallery({ projects }: { projects: Project[] }) {
  const loop = [...projects, ...projects]

  return (
    <div className="rolling-gallery" aria-hidden="true">
      <div className="rolling-track">
        {loop.map((project, index) => (
          <span key={`${project.title}-${index}`} style={{ '--accent': project.accent } as CSSProperties}>
            {project.title}
          </span>
        ))}
      </div>
    </div>
  )
}

export function SignalMatrix({ labels }: { labels: string[] }) {
  return (
    <div className="signal-matrix">
      {labels.map((label, index) => (
        <span key={label} style={{ '--delay': `${index * 0.08}s` } as CSSProperties}>{label}</span>
      ))}
    </div>
  )
}

export function FloatingChip({ children }: { children: ReactNode }) {
  return <div className="floating-chip">{children}</div>
}

export function CpuBadge({ children }: { children: ReactNode }) {
  return (
    <div className="cpu-badge">
      <Cpu size={18} />
      <span>{children}</span>
    </div>
  )
}
