import { PageShell, ProjectSummaryCard, RollingGallery } from '../components/UI'
import { projects } from '../data/portfolio'

export default function ProjectsPage({ navigate }: { navigate: (path: string) => void }) {
  return (
    <PageShell eyebrow="Showcase" title="Elige un proyecto y entra en su interfaz">
      <div className="projects-index">
        {projects.map((project) => <ProjectSummaryCard key={project.title} project={project} navigate={navigate} />)}
      </div>
      <RollingGallery projects={projects} />
    </PageShell>
  )
}
