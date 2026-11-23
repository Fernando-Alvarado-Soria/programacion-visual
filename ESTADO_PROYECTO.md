# Estado del proyecto

Documento de continuidad para retomar el trabajo desde otra computadora o sesión. **Mantenerlo actualizado en cada commit y push.**

## Resumen

Sitio estático que reúne los proyectos de graduación de cuatro alumnos. La página principal vive en la raíz; cada proyecto se conserva en la carpeta de su autor y se abre en una pestaña nueva.

## Estado actual

- Portal responsive implementado en `index.html`.
- Cinco tarjetas de proyectos, filtros por alumno y búsqueda por texto.
- La sección de alumnos filtra el catálogo al seleccionar un nombre.
- Los proyectos de los alumnos y sus recursos se mantienen en sus carpetas originales.
- No hay paso de compilación ni dependencias npm para el portal.
- Las referencias visuales locales están en `referencias/` y se excluyen con `.gitignore`.

### Alumnos y proyectos

| Alumno | Proyecto | Archivo |
| --- | --- | --- |
| Adrian | Bear Dash | `Pagina Adrian/osos.html` |
| Ian | Minecraft 3D | `Pagina Ian/index.html` |
| Max | Football League 2026 | `Pagina Max/football_league_2026.html` |
| Max | Casa de Ajedrez | `Pagina Max/ajedres.html` |
| Oleg | Demonology | `Pagina Oleg/index.html` |

## Diseño y decisiones

- La referencia visual es la composición de portfolio educativo: encabezado morado, portada luminosa, tarjetas claras con vista previa y acentos violetas.
- Paleta acordada:
  - Morado principal: `#51259B`
  - Violeta: `#8750E8`
  - Lavanda: `#C5A7F5`
  - Fondo pastel: `#F2E8FF`
  - Blanco rosado: `#FFF9FC`
- Tipografías del portal: Lilita One para titulares y Nunito para texto; DM Mono para pequeños metadatos.
- Las ilustraciones de las tarjetas son CSS; no dependen de archivos de imagen adicionales.
- El estilo general está en `assets/css/styles.css` y los ajustes de identidad visual en `assets/css/brand.css`.
- La búsqueda, filtros y atajo `/` para enfocar búsqueda están en `assets/js/main.js`.
- No mover ni renombrar carpetas de alumnos sin revisar antes los enlaces y rutas de recursos.

## Estructura principal

```text
.
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── css/brand.css
│   └── js/main.js
├── Pagina Adrian/
├── Pagina Ian/
├── Pagina Max/
├── Pagina Oleg/
├── .vscode/
├── .gitignore
├── README.md
└── ESTADO_PROYECTO.md
```

## Retomar en otra computadora

1. Clonar el repositorio y abrir su carpeta raíz en VS Code.
2. No se requiere `npm install` para ejecutar el portal.
3. Abrir `index.html` con la extensión Live Server o un servidor estático equivalente.
4. Revisar este documento y `README.md` antes de cambiar la página.
5. La carpeta `referencias/` es material local ignorado por Git. Si hace falta para consultar las imágenes, transferirla por separado; no se publica en el repositorio.

## Rutina obligatoria para commits y push

**Cada commit y cada push deben dejar este archivo actualizado.** Antes de confirmar cambios:

1. Actualizar `Estado actual`, decisiones o estructura si algo cambió.
2. Añadir una entrada al historial de trabajo inferior con fecha, resumen y verificaciones.
3. Incluir `ESTADO_PROYECTO.md` en el mismo commit que documenta.
4. Antes del push, comprobar que el documento del commit más reciente describe el estado que se está subiendo.

Ejemplo de comprobación:

```bash
git status
git diff --check
git add ESTADO_PROYECTO.md
```

Este recordatorio es una convención del proyecto; no hay un hook automático configurado.

## Historial de trabajo

| Fecha | Resumen | Verificaciones |
| --- | --- | --- |
| 2026-11-22 | Creación del portal de proyectos y rediseño de interfaz con la paleta morada/pastel acordada. Se añadió esta guía de continuidad. | Referencias locales comprobadas; `node --check assets/js/main.js`; `git diff --check`. |
