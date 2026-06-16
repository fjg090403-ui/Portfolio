import { ArrowLeft } from 'lucide-react'
import { PageShell, ProjectImageCarousel, SpotlightCard } from '../components/UI'
import { projects } from '../data/portfolio'

export default function ProjectDetailPage({ path, navigate }: { path: string; navigate: (path: string) => void }) {
  const slug = path.split('/').pop()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <PageShell eyebrow="Proyecto" title="Proyecto no encontrado" compact>
        <button type="button" className="project-access" onClick={() => navigate('/proyectos')}>
          <ArrowLeft size={18} /> Volver a proyectos
        </button>
      </PageShell>
    )
  }

  return (
    <PageShell eyebrow={project.tag} title={project.title}>
      <button type="button" className="project-back" onClick={() => navigate('/proyectos')}>
        <ArrowLeft size={18} /> Volver al listado
      </button>
      <div className="project-detail-layout">
        <SpotlightCard className="project-detail-main p-6 sm:p-8">
          <ProjectImageCarousel project={project} />
        </SpotlightCard>
        <aside className="project-detail-info">
          <SpotlightCard className="p-6">
            <h2>De qué trata</h2>
            <p>{project.detail}</p>
          </SpotlightCard>
          <SpotlightCard className="p-6">
            <h2>Tecnologías</h2>
            <div className="project-detail-stack">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </SpotlightCard>
          <SpotlightCard className="p-6">
            <h2>Señal técnica</h2>
            <p>{project.signal}</p>
          </SpotlightCard>
        </aside>
      </div>
    </PageShell>
  )
}
