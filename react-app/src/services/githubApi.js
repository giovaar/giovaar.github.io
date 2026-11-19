const GITHUB_API_URL =
  'https://api.github.com/users/giovaar/repos?per_page=100&sort=updated'

const CACHE_KEY = 'gio_github_repos'
const CACHE_DURATION = 10 * 60 * 1000
const REQUEST_TIMEOUT = 5000
const RATE_LIMIT_DELAY = 60000

let cached
let pendingRequest

function readCache() {
  try {
    return JSON.parse(sessionStorage.getItem(CACHE_KEY))
  } catch {
    return null
  }
}

function saveCache(value) {
  cached = value

  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(value))
  } catch {
    // La caché en memoria sigue disponible.
  }
}

function rateLimitRetryAt(headers) {
  const now = Date.now()
  const retryAfter = headers.get('retry-after')
  const reset = headers.get('x-ratelimit-remaining') === '0'
    ? Number(headers.get('x-ratelimit-reset')) * 1000
    : 0
  const retryAt = retryAfter === null ? 0 : now + Number(retryAfter) * 1000
  const deadline = Math.max(reset || 0, retryAt || 0)

  return deadline > now ? deadline : now + RATE_LIMIT_DELAY
}

async function requestRepos(previous) {
  const fallback = previous?.data ?? []

  try {
    const response = await fetch(GITHUB_API_URL, {
      signal: AbortSignal.timeout(REQUEST_TIMEOUT),
    })

    if (response.status === 403 || response.status === 429) {
      saveCache({ ...previous, retryAt: rateLimitRetryAt(response.headers) })
      return fallback
    }

    if (!response.ok) return fallback

    const repos = await response.json()
    const data = repos.map((repo) => ({
      name: repo.name,
      language: repo.language,
      stars: repo.stargazers_count,
    }))

    saveCache({ data, timestamp: Date.now() })
    return data
  } catch {
    return fallback
  }
}

export async function getGithubRepos() {
  const previous = cached ?? readCache()
  const now = Date.now()
  const data = Array.isArray(previous?.data) ? previous.data : undefined

  if (data && now - previous.timestamp < CACHE_DURATION) return data
  if (previous?.retryAt > now) return data ?? []

  if (!pendingRequest) {
    pendingRequest = requestRepos({ ...previous, data }).finally(() => {
      pendingRequest = null
    })
  }

  return pendingRequest
}
