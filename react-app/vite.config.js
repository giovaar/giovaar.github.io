
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

function publishablePublicAssets() {
  let publicDir

  return {
    name: 'publishable-public-assets',
    apply: 'build',
    configResolved(config) {
      publicDir = config.publicDir
    },
    async generateBundle() {
      async function emitDirectory(directory) {
        const entries = await readdir(join(publicDir, directory), { withFileTypes: true })
        for (const entry of entries) {
          if (directory === '' && entry.name === 'videos') continue
          const fileName = directory ? `${directory}/${entry.name}` : entry.name
          if (entry.isDirectory()) {
            await emitDirectory.call(this, fileName)
          } else {
            this.emitFile({ type: 'asset', fileName, source: await readFile(join(publicDir, fileName)) })
          }
        }
      }

      await emitDirectory.call(this, '')
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), publishablePublicAssets()],
  base: '/',
  build: { copyPublicDir: false },
})
