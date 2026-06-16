import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { Dock, Footer, AppNav, SystemRail } from './components/Layout'
import { routes } from './data/portfolio'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const StackPage = lazy(() => import('./pages/StackPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'))
const LabPage = lazy(() => import('./pages/LabPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

const pageMap = {
  '/': HomePage,
  '/sobre-mi': AboutPage,
  '/stack': StackPage,
  '/proyectos': ProjectsPage,
  '/lab': LabPage,
  '/contacto': ContactPage,
}

function normalizePath(path: string) {
  if (path === '') return '/'
  if (path.startsWith('/proyectos/')) return path
  return Object.keys(pageMap).includes(path) ? path : '/'
}

function getCurrentPath() {
  return normalizePath(window.location.pathname)
}

function App() {
  const [path, setPath] = useState(getCurrentPath)
  const routeIndex = routes.findIndex((route) => route.path === (path.startsWith('/proyectos/') ? '/proyectos' : path))
  const Page = useMemo(() => (path.startsWith('/proyectos/') ? ProjectDetailPage : pageMap[path as keyof typeof pageMap] ?? HomePage), [path])

  useEffect(() => {
    const onPopState = () => setPath(getCurrentPath())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  function navigate(nextPath: string) {
    if (nextPath === path) return
    window.history.pushState({}, '', nextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setPath(nextPath)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050712] text-slate-100">
      <AppNav path={path} navigate={navigate} />
      <Suspense fallback={<PageLoader />}>
        <Page navigate={navigate} path={path} />
      </Suspense>
      <SystemRail
        previous={routes[routeIndex - 1]?.path}
        next={routes[routeIndex + 1]?.path}
        navigate={navigate}
      />
      <Dock />
      <Footer />
    </main>
  )
}

function PageLoader() {
  return (
    <div className="page-loader">
      <div className="loader-orb" />
      <span className="loading-label">Cargando modulo visual</span>
    </div>
  )
}

export default App
