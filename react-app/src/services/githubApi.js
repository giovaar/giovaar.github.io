
const GITHUB_API_URL =
  'https://api.github.com/users/giovaar/repos?per_page=100&sort=updated'

const CACHE_KEY = 'gio_github_repos'
const CACHE_DURATION = 10 * 60 * 1000

// Compartir una consulta mientras esté en ejecución
let pendingRequest = null

export async function getGithubRepos() {
  // Revisar si tenemos datos guardados
  try {
    const cached = sessionStorage.getItem(CACHE_KEY)

    if (cached) {
      const { data, timestamp } = JSON.parse(cached)

      if (
        Array.isArray(data) &&
        Date.now() - timestamp < CACHE_DURATION
      ) {
        return data
      }
    }
  } catch (error) {
    console.warn('No se pudo leer la caché:', error)
  }

  // Evitar solicitudes simultáneas duplicadas
  if (pendingRequest) {
    return pendingRequest
  }

  pendingRequest = (async () => {
    try {
      const response = await fetch(GITHUB_API_URL)

      if (!response.ok) {
        throw new Error(`GitHub API: ${response.status}`)
      }

      const repos = await response.json()

      const data = repos.map((repo) => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        url: repo.html_url,
        stars: repo.stargazers_count,
        updatedAt: repo.updated_at,
      }))

      try {
        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            data,
            timestamp: Date.now(),
          })
        )
      } catch (error) {
        console.warn('No se pudo guardar la caché:', error)
      }

      return data
    } catch (error) {
      console.error('Error al consultar GitHub:', error)
      return []
    } finally {
      pendingRequest = null
    }
  })()

  return pendingRequest
}
