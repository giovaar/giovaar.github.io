# GIO Portfolio 2.0

## Arquitectura y convenciones

- La aplicación vive en `react-app/`. `src/main.jsx` carga los estilos globales y la configuración de i18n. `src/App.jsx` compone la página.
- Mantén las secciones en `src/sections/` y los componentes compartidos en `src/components/`. Reutiliza `Navbar`, `Hero`, `Footer`, `ProjectCard`, `LanguageSwitcher` y `ThemeToggle` según corresponda.
- Usa `src/data/` para datos locales, `src/services/` para integraciones y `src/assets/` para recursos importados. Guarda los archivos públicos en `public/` y usa `import.meta.env.BASE_URL` para construir sus URLs.
- Sigue las convenciones del archivo que edites. El proyecto usa JavaScript con módulos ES, React con componentes funcionales y hooks, Vite, Tailwind CSS 4 integrado mediante `@tailwindcss/vite`, estilos globales en `src/index.css`, iconos de Lucide y animaciones con Motion. Conserva los IDs de sección que usa la navegación.

## Desarrollo y verificación

Usa Node.js 24, como en CI. Desde `react-app/`, con las dependencias disponibles, ejecuta:

- `npm run dev` para iniciar Vite en desarrollo.
- `npm run lint` para ejecutar Oxlint.
- `npm run build` para generar `dist/`.
- `npm run preview` para revisar localmente el build generado.

Para cambios de aplicación, ejecuta lint y build y revisa los flujos afectados. Respeta el alcance autorizado, incluidos los archivos que generen las verificaciones. Reutiliza las dependencias instaladas. Si faltan y se autoriza preparar el entorno, usa `npm ci` con el lockfile existente. Evita instalar paquetes innecesarios e introducir dependencias o servicios de pago.

## Internacionalización

- Mantén español, inglés e italiano (`es`, `en`, `it`). Usa `useTranslation` y `t()` para los textos nuevos o modificados, incluidas las etiquetas accesibles.
- Mantén las mismas claves e interpolaciones en `src/i18n/es.json`, `en.json` e `it.json`. Verifica el selector, el idioma guardado en `gio-language`, el atributo `lang` del documento y el español como idioma predeterminado y de respaldo.

## Accesibilidad, diseño adaptable y rendimiento

- Usa HTML semántico, nombres accesibles, texto alternativo cuando corresponda y foco visible. Comprueba navegación por teclado y contraste en ambos temas. Respeta `prefers-reduced-motion`.
- Comprueba los cambios visuales en móvil, tableta y escritorio. Revisa que la navegación y los textos en los tres idiomas funcionen sin recortes ni desbordamiento horizontal.
- Optimiza imágenes, reserva espacio para los medios y difiere la carga de recursos fuera de la vista inicial. Reutiliza componentes y estilos existentes.

## Cambios locales, archivos y publicación

- Antes de editar, revisa `git status --short --branch` y los diffs pertinentes. Limita los cambios al alcance pedido y preserva los cambios del usuario, incluidos los archivos sin seguimiento. Conserva `i18n-backup/`.
- Requiere autorización explícita para hacer commits, push, desplegar, ejecutar `git reset` o `git clean`, descartar cambios o realizar cualquier otra operación destructiva.
- Conserva `.github/workflows/react-build.yml` y `.github/workflows/deploy-react.yml`. El primero compila con cada push a `main` y admite ejecución manual. El segundo publica en GitHub Pages solo mediante ejecución manual, compilando desde `main` y usando `react-app/dist/`. Conserva la base `/` de Vite salvo que se autorice un cambio de publicación.
- Preserva los PDF de currículums y certificados en `react-app/public/documents/`, incluidos sus nombres, rutas y enlaces.
- Al terminar cada tarea, revisa el estado de Git. Resume los archivos modificados y las verificaciones realizadas, con sus resultados y las comprobaciones pendientes.

## Dirección futura del diseño

La dirección visual es oscura, profesional y artística. Cuando se solicite implementar el fondo, usa cinco visualizers de Rawayana mediante inserciones oficiales de YouTube únicamente si está permitida su reproducción incrustada. Mantén el fondo silenciado, ofrece un control accesible para pausarlo y usa una alternativa estática cuando el video no esté disponible o se prefiera reducir el movimiento. El contenido debe poder usarse sin cargar ni reproducir videos.
