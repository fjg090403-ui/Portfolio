import { ArrowLeft, ArrowRight } from 'lucide-react'
import { routes, socials } from '../data/portfolio'

export function AppNav({ path, navigate }: { path: string; navigate: (path: string) => void }) {
  return (
    <nav className="card-nav" aria-label="Navegación">
      <div className="card-nav-brand">
        <span>FJ</span>
      </div>
      {routes.map((route) => (
        <a
          key={route.path}
          href={route.path}
          className={route.path === (path.startsWith('/proyectos/') ? '/proyectos' : path) ? 'active' : ''}
          onClick={(event) => {
            event.preventDefault()
            navigate(route.path)
          }}
        >
          <span className="card-nav-label">{route.label}</span>
          <small>{route.path === '/' ? 'home' : route.path.replace('/', '')}</small>
        </a>
      ))}
    </nav>
  )
}

export function Dock() {
  return (
    <nav className="dock" aria-label="Enlaces principales">
      {socials.map(({ label, href, Icon }) => (
        <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label}>
          <Icon size={19} />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  )
}

export function SystemRail({ previous, next, navigate }: { previous?: string; next?: string; navigate: (path: string) => void }) {
  return (
    <div className="system-rail">
      <button type="button" disabled={!previous} onClick={() => previous && navigate(previous)}>
        <ArrowLeft size={17} /> Anterior
      </button>
      <button type="button" disabled={!next} onClick={() => next && navigate(next)}>
        Siguiente <ArrowRight size={17} />
      </button>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
      Francisco Javier Requena García - Full Stack Developer
    </footer>
  )
}
