# React + Vite

## Videos de los ambientes

En desarrollo, Vite sirve Aventura y After desde `public/videos/`. Esa carpeta y los archivos MP4 quedan excluidos del build.

Para habilitar un ambiente en GitHub Pages, primero confirma la autorización de publicación y redistribución del video completo, incluidos el audio y los demás materiales que incorpore. Aloja la copia autorizada en una URL pública HTTPS directa que sirva el video sin autenticación. Define `VITE_ADVENTURE_VIDEO_URL` para Aventura o `VITE_AFTER_VIDEO_URL` para After en `react-app/.env.production` antes del build. Para el workflow actual, ese archivo debe estar en `main` con las URLs autorizadas. Las variables `VITE_` son públicas y no deben contener credenciales. Con ambas variables ausentes, producción ofrece Original.

## Vista previa al compartir

Después del despliegue, comprueba que la portada y `/images/projects/portfolio-hero.png` respondan por HTTPS. Revisa el título, la descripción y la imagen en una vista previa nueva de WhatsApp y Discord. Si aparece una versión anterior, prueba en una conversación nueva y vuelve a comprobar cuando la plataforma renueve su caché. En LinkedIn puedes solicitar una lectura nueva con [Post Inspector](https://www.linkedin.com/post-inspector/).

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
