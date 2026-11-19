
// image opcional: { src: imagen local importada, width, height, altKey }.
// story usa claves i18n y requiere objective y solution para mostrar el detalle.
export const projects = [
  {
    id: 1,
    title: 'Clínica Salud y Bienestar',
    descriptionKey: 'projects.items.clinic.description',
    technologies: ['C#', 'SQL', 'Windows Forms'],
    category: 'Software',
    categoryKey: 'projects.categories.software',
    github:
      'https://github.com/giovaar/ClinicaSaludBienestar-HPA3',
    featured: true,
  },
  {
    id: 2,
    title: 'FirstGame',
    descriptionKey: 'projects.items.firstGame.description',
    technologies: ['C++'],
    category: 'Videojuegos',
    categoryKey: 'projects.categories.games',
    github:
      'https://github.com/giovaar/FirstGame',
    featured: true,
  },
  {
    id: 3,
    title: 'Portafolio Web Personal',
    descriptionKey: 'projects.items.portfolio.description',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Tailwind CSS',
    ],
    category: 'Web',
    categoryKey: 'projects.categories.web',
    github:
      'https://github.com/giovaar/giovaar.github.io',
    featured: true,
    story: {
      objective: 'projects.items.portfolio.story.objective',
      solution: 'projects.items.portfolio.story.solution',
      technologies: 'projects.items.portfolio.story.technologies',
      learning: 'projects.items.portfolio.story.learning',
    },
  },
]
