
const contactLinks = [
  {
    name: 'Correo electrónico',
    description: 'Envíame un mensaje',
    value: 'giovaarpaia13@gmail.com',
    href: 'mailto:giovaarpaia13@gmail.com',
    external: false,
  },
  {
    name: 'GitHub',
    description: 'Explora mis proyectos',
    value: 'github.com/giovaar',
    href: 'https://github.com/giovaar',
    external: true,
  },
  {
    name: 'LinkedIn',
    description: 'Conectemos profesionalmente',
    value: 'Mi perfil de LinkedIn',
    href: 'https://www.linkedin.com/in/giovanny-arpaia-075273328/',
    external: true,
  },
]

function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 bg-white px-6 py-24 transition-colors duration-300 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-6xl">

        {/* Encabezado */}
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Contacto
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            ¿Hablamos?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Estoy interesado en oportunidades para seguir
            aprendiendo y creciendo profesionalmente en
            desarrollo de software y análisis de datos.
            Si deseas conocer mis proyectos o contactar
            conmigo, puedes encontrarme aquí.
          </p>
        </div>

        {/* Tarjetas de contacto */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contactLinks.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noopener noreferrer' : undefined}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-500 dark:hover:shadow-indigo-950/20"
            >
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                {contact.name}
              </span>

              <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                {contact.description}
              </h3>

              <p className="mt-3 break-words text-sm text-slate-600 dark:text-slate-300">
                {contact.value}
              </p>

              <span
                className="mt-6 inline-block font-semibold text-indigo-600 transition-transform group-hover:translate-x-1 dark:text-indigo-400"
                aria-hidden="true"
              >
                {contact.external ? 'Visitar perfil ↗' : 'Enviar correo →'}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Contact
