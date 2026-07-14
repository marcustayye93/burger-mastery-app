# Burger Mastery Sprint 7 Integration

This package is a **polish overlay** for the accepted Sprint 6 production build.

It deliberately does not replace application business logic.

## Add these files

- `css/polish.css`
- `js/polish.js`

## Update `index.html`

Immediately after the existing `app.css` stylesheet:

```html
<link rel="stylesheet" href="./css/polish.css">
```

Immediately before the closing `</body>` tag, after the existing app module:

```html
<script defer src="./js/polish.js"></script>
```

## Update the service worker

1. Change the cache version to `burger-mastery-v0.7.0`.
2. Add both files to the application shell:
   - `./css/polish.css`
   - `./js/polish.js`
3. Preserve all existing Sprint 6 shell files and fetch behaviour.

Do not replace or remove any Sprint 1–6 JavaScript, data, recipes, Builder logic, challenges, saved state, or routes.
