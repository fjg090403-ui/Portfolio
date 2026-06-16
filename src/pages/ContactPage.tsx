import { Mail } from 'lucide-react'
import { MagneticButton, PageShell, SpotlightCard } from '../components/UI'
import { DecryptedText } from '../components/TextEffects'
import { socials } from '../data/portfolio'

const studies = [
  { title: 'Grado Superior DAW', copy: 'Desarrollo de aplicaciones web, arquitectura cliente-servidor y bases de datos.' },
  { title: 'IA y Big Data', copy: 'Análisis, automatización, modelos y tratamiento de información para productos inteligentes.' },
  { title: 'Certificación Python', copy: 'Fundamentos sólidos para scripts, automatizaciones, IA aplicada y visión computacional.' },
]

export default function ContactPage() {
  return (
    <PageShell eyebrow="Contacto" title="Construyamos algo con presencia y propósito" compact>
      <SpotlightCard className="overflow-hidden p-6 sm:p-10">
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <DecryptedText text="Disponible para proyectos web, SaaS, automatización e IA aplicada." className="text-2xl font-bold text-white sm:text-4xl" />
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Si el proyecto necesita verse premium y funcionar con rigor técnico, estoy preparado para llevarlo de idea a interfaz real.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {socials.map(({ label, href, Icon }) => (
              <MagneticButton key={label} href={href} variant={label === 'Email' ? 'primary' : 'ghost'}>
                <Icon size={18} /> {label}
              </MagneticButton>
            ))}
          </div>
        </div>
      </SpotlightCard>
      <div className="contact-direct mt-8">
        <a href="mailto:fjg090403@gmail.com">
          <span>Email</span>
          <strong>fjg090403@gmail.com</strong>
        </a>
        <a href="tel:+34626332012">
          <span>Teléfono</span>
          <strong>626 33 20 12</strong>
        </a>
      </div>
      <div className="contact-studies mt-8">
        {studies.map((study, index) => (
          <SpotlightCard key={study.title} className="study-row p-6 sm:p-7">
            <span className="study-index">0{index + 1}</span>
            <div>
              <h2 className="text-2xl font-bold text-white">{study.title}</h2>
              <p className="mt-2 leading-7 text-slate-300">{study.copy}</p>
            </div>
          </SpotlightCard>
        ))}
      </div>
      <div className="mt-8 text-center">
        <MagneticButton href="mailto:fjg090403@gmail.com" variant="primary">
          <Mail size={18} /> Abrir email
        </MagneticButton>
      </div>
    </PageShell>
  )
}
