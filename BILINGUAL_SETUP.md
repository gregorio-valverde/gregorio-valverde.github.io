# Bilingual portfolio structure

The site now uses English as the default language and Spanish under `/es/`.

## URLs

- English home: `/`
- Spanish home: `/es/`
- English projects: `/projects`
- Spanish projects: `/es/projects`
- English project: `/projects/<slug>`
- Spanish project: `/es/projects/<slug>`

The navigation contains an `EN / ES` language switcher. On translated project pages it keeps the same project slug when switching language.

## Interface translations

Edit:

```text
src/i18n/index.ts
```

This file contains navigation labels, homepage copy, project labels, decision labels, journey labels and contact-page copy for both languages.

## Projects

English projects live in:

```text
src/content/projects/en/
```

Spanish projects live in:

```text
src/content/projects/es/
```

For a project to have a direct EN/ES counterpart, use the same filename in both folders:

```text
src/content/projects/en/my-project.mdx
src/content/projects/es/my-project.mdx
```

The public URLs will be:

```text
/projects/my-project
/es/projects/my-project
```

## Decisions

Use the same convention:

```text
src/content/decisions/en/my-decision.mdx
src/content/decisions/es/my-decision.mdx
```

## Journey

Use:

```text
src/content/journey/en/my-entry.mdx
src/content/journey/es/my-entry.mdx
```

## Shared files

Components, CSS and images are shared. You do not need to duplicate them by language.

For images, a recommended structure is:

```text
public/images/projects/my-project/architecture.webp
public/images/projects/my-project/dashboard.webp
```

Both the English and Spanish MDX files can reference the same image.

## Local development

On Windows, from the project folder:

```powershell
npm install
npm run dev
```

Open:

```text
http://localhost:4321/
http://localhost:4321/es/
```

Before pushing:

```powershell
npm run build
git add .
git commit -m "Add bilingual portfolio"
git push origin main
```

GitHub Actions will deploy the updated site to GitHub Pages.
