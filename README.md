# La muestra · proyectos de graduación

Portal para presentar los proyectos web de Adrian, Ian, Max y Oleg. Es una página estática: no requiere instalar dependencias ni compilar.

## Estructura

```text
.
├── index.html                 # Catálogo y página de inicio
├── assets/
│   ├── css/styles.css          # Estilos y diseño adaptable
│   ├── css/brand.css           # Paleta violeta y acabados de marca
│   └── js/main.js              # Búsqueda y filtros
├── Pagina Adrian/              # Proyecto Bear Dash
├── Pagina Ian/                 # Proyecto Minecraft 3D
├── Pagina Max/                 # Football League y ajedrez
├── Pagina Oleg/                # Demonology y sus imágenes
└── .vscode/                    # Recomendaciones para VS Code
```

Las carpetas de alumnos se mantienen separadas para que cada proyecto conserve sus archivos y recursos. El portal de la raíz enlaza a ellos; las páginas de los alumnos no necesitan modificarse.

## Ejecutar en local

1. Abre esta carpeta en VS Code.
2. Instala **Live Server** (recomendado) o usa cualquier servidor estático.
3. Clic derecho en `index.html` → **Open with Live Server**.

También puedes abrir `index.html` directamente en un navegador. Un servidor local es preferible para probar rutas y recursos con el mismo comportamiento que al publicar.

## Añadir o editar proyectos

- Conserva cada proyecto dentro de la carpeta de su alumno y sus rutas relativas a imágenes y scripts.
- Actualiza en `index.html` la tarjeta y el enlace correspondientes. Los atributos `data-student` y `data-search` alimentan los filtros.
- Si agregas una tarjeta, actualiza también el contador de proyectos y la navegación.
- Mantén CSS, JavaScript y contenido en sus archivos/carpetas correspondientes; usa nombres descriptivos y rutas relativas.
- Antes de publicar, prueba los enlaces, la vista móvil, el teclado y los recursos de cada proyecto.

## Publicación

El sitio se puede publicar como sitio estático (por ejemplo, GitHub Pages). Publica la carpeta completa para que los enlaces y las imágenes locales sigan funcionando. Los proyectos de los alumnos cargan bibliotecas externas en algunos casos, así que necesitan conexión a Internet para esas funciones.
