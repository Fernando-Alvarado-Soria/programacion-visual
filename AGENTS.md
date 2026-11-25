# Repository Instructions

## Project Shape

- This is a static Spanish portfolio. There is no package manifest, dependency install, build step, test runner, or generated code; do not invent an npm workflow.
- The shared portal is `index.html` with `assets/css/styles.css`, `assets/css/brand.css`, and `assets/js/main.js`. The student pages are separate inline HTML apps under `Pagina Adrian/`, `Pagina Ian/`, `Pagina Max/`, and `Pagina Oleg/`.
- The root portal links five projects. If adding or removing one, update the card, `data-student`/`data-search` values, visible counts, navigation, and `ESTADO_PROYECTO.md` together.
- Keep each student directory self-contained and preserve relative paths. Do not rename or move the student folders or `Pagina Oleg/img/` assets without updating every link and image reference.

## Development And Verification

- Open the repository root with VS Code and use Live Server on `index.html`, or serve the root with another static HTTP server; opening files directly can hide path/resource issues.
- Focused checks are `node --check assets/js/main.js` and `git diff --check`. No automated browser, lint, typecheck, or build command is configured.
- Browser-smoke-test the root links, student filter buttons, search field and `/` shortcut, mobile layout, and all five project pages. Ian and Max Football load Three.js from CDN; Football also loads Tailwind and Font Awesome, so those features need internet access.
- Bear Dash stores coins, skins, and map selection in browser `localStorage`; clear site storage when testing a fresh first-run state. Ian's game uses pointer lock, so test it from the served page.

## Editing Conventions

- `.vscode/settings.json` enables format-on-save, two-space indentation, spaces, and a final newline for HTML, CSS, and JavaScript. Avoid unrelated reformatting of the large embedded student pages.
- Load order matters on the portal: `styles.css` provides the base styles and `brand.css` overrides them with the current violet/pastel identity.
- The root portal’s project artwork is CSS-generated; do not add image dependencies for those previews unless the design explicitly requires it.

## Continuity

- Read `README.md` and `ESTADO_PROYECTO.md` before changing the portal. Update `ESTADO_PROYECTO.md` for every commit and push, add its dated history entry with verification results, and include it in the same commit.
