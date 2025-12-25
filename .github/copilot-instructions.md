# Copilot Instructions for sangbinlee.github.io

## Project Overview
A Jekyll-based GitHub Pages portfolio site with a Bootstrap 4 admin dashboard template (SB Admin 2). The project combines a static site generator for content with a modern web dashboard UI using SCSS preprocessing, Gulp task automation, and bundled JavaScript libraries.

**Repository:** GitHub Pages personal portfolio at `https://sangbinlee.github.io/`

---

## Architecture

### Technology Stack
- **Static Site Generation:** Jekyll (configured in `_config.yml`)
- **UI Framework:** Bootstrap 4.3.1 with SB Admin 2 custom theme
- **Styling:** SCSS compiled via Gulp, custom variables override Bootstrap defaults
- **JavaScript:** jQuery 3.4.1, Chart.js 2.8.0, DataTables, OpenLayers 6.1.1
- **Build Tooling:** Gulp 4, Webpack 4, Parcel bundler
- **Package Manager:** npm

### Key Directories
- **`/scss/`** - SCSS source files (main: `sb-admin-2.scss`)
  - Custom variables in `_variables.scss` override Bootstrap defaults
  - Component-specific partials: `_buttons.scss`, `_cards.scss`, `_charts.scss`, etc.
  - Navigation structure: `navs/_sidebar.scss`, `navs/_topbar.scss`
- **`/css/`** - Compiled CSS output (generated, not edited directly)
- **`/js/`** - JavaScript source files including demo code for charts/tables
- **`/vendor/`** - Third-party dependencies (symlinked from `node_modules` via Gulp `modules` task)
- **`/img/`** - Image assets
- **Root HTML files** - Component showcase pages (buttons.html, cards.html, tables.html, charts.html, etc.)

---

## Build & Development Workflow

### Key npm Scripts
- **`npm run build`** → Webpack production build (outputs `bundle.js`)
- **`npm run build2`** → Parcel build for `index.html` with public URL prefix
- **`npm run build3`** → Parcel build for OpenLayers map example
- **`npm start`** → Parcel dev server for `index.html`

### Gulp Tasks (Primary Build System)
Use `npx gulp [task]` to run:
- **`gulp watch`** (default) - Start local development server with browser-sync on port 3000, auto-recompile SCSS/JS, live-reload HTML changes
- **`gulp build`** - Full build: copy vendor dependencies, compile SCSS, minify JS
- **`gulp vendor`** - Copy npm dependencies to `/vendor/` (Bootstrap, jQuery, Chart.js, DataTables, FontAwesome, OpenLayers)
- **`gulp css`** - Compile SCSS → CSS, autoprefixer, add banner header, minify
- **`gulp js`** - Minify JS files in `/js/`, add banner header
- **`gulp clean`** - Delete `/vendor/` directory

### Development Workflow
1. **First setup:** `npm install` → `npx gulp vendor` (copies dependencies)
2. **For editing:** `npx gulp watch` starts browser-sync on localhost:3000
3. **On save:** SCSS files recompile, JS minifies, HTML changes auto-reload browser
4. **For production:** `npx gulp build` or `npm run build` (Webpack)

---

## Code Patterns & Conventions

### SCSS Structure
- **Variable Overrides:** Define custom Bootstrap overrides in `_variables.scss` **before** importing Bootstrap
- **Mixin Usage:** Custom mixins in `_mixins.scss` for consistent styling patterns
- **Import Order:** Always import variables first, then Bootstrap, then custom components
- **Example:** `sb-admin-2.scss` imports variables → Bootstrap → custom components in logical order

### HTML Template Structure
- **Layout Base:** SB Admin 2 template with sidebar navigation, topbar, main content area
- **Component Pages:** Each showcase page (buttons.html, cards.html) follows same layout structure
- **Navigation Pattern:** Sidebar uses Bootstrap collapse component with Font Awesome icons
- **See examples:** [buttons.html](buttons.html#L28) sidebar structure pattern

### JavaScript Conventions
- **jQuery Plugins:** Use jQuery `on()` for event delegation (sb-admin-2.js uses this extensively)
- **Bootstrap Components:** Leverage Bootstrap's data attributes for collapse, dropdowns, etc.
- **Demo Code:** `/js/demo/` contains examples for Chart.js and DataTables integration
- **Main.js:** Entry point for mapping library (OpenLayers), also serves as Webpack entry

### Asset Linking
- **CSS:** Reference minified versions in production (`sb-admin-2.min.css`)
- **Fonts:** Google Fonts and FontAwesome via CDN or vendored copies
- **JS Libraries:** Vendor scripts loaded before custom scripts (Bootstrap deps → jQuery → custom)

---

## Build Output & Deployment

- **`/css/`** - Compiled CSS (*.min.css for production)
- **`/js/`** - Minified JS (*.min.js for production)
- **`/vendor/`** - Third-party dependencies from npm (auto-populated, not committed if using `.gitignore`)
- **`bundle.js`** - Webpack output (root level)

GitHub Pages automatically runs Jekyll to build the site. The SCSS/CSS build is separate—ensure compiled CSS is committed if not auto-built on GitHub.

---

## Common Development Tasks

### Adding a New Component
1. Create SCSS file in `/scss/` (e.g., `_newfeature.scss`)
2. Import it in `sb-admin-2.scss`
3. Run `npx gulp css` to compile
4. Create HTML showcase page following the SB Admin 2 layout pattern

### Updating Bootstrap Theme
1. Edit colors/variables in `_variables.scss`
2. Run `npx gulp css` to recompile
3. Variables propagate to all components via SCSS cascade

### Testing Map Features
- Use `openlayers_1.html` for map testing with OpenLayers library
- Run via `npm start` (Parcel dev server) or build with `npm run build3`

### Updating Dependencies
1. `npm install [package]` to add to package.json
2. `npx gulp vendor` to copy to `/vendor/`
3. Link in HTML and add to import order if needed

---

## Debugging Tips

- **Browser-sync:** Check `http://localhost:3000` during `gulp watch` session
- **CSS Not Updating:** Clear browser cache or check SCSS import order in `sb-admin-2.scss`
- **JS Errors:** Check `/js/` for syntax errors; check demo files if using Chart.js/DataTables
- **Vendor Issues:** Ensure `gulp vendor` ran after `npm install`

---

## File Naming & Standards

- **Partials:** Prefix with underscore (`_component.scss`, `_variables.scss`)
- **Minified Assets:** Suffix with `.min` (e.g., `css/sb-admin-2.min.css`)
- **HTML Files:** Lowercase, hyphens for multi-word names (e.g., `forgot-password.html`)
- **JS Demo Files:** In `/js/demo/` directory (e.g., `chart-area-demo.js`)

---

## Key Dependencies & Versions
- Bootstrap 4.3.1
- jQuery 3.4.1
- Chart.js 2.8.0
- DataTables 1.10.19
- OpenLayers 6.1.1
- FontAwesome Free 5.10.2
