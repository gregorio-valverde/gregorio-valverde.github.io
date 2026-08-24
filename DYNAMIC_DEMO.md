# Dynamic portfolio demo

This version adds four visual/interactive experiments:

1. Animated data pipeline on the home page.
2. Visual project cards (forecast chart or technology flow depending on project).
3. Publications section with client-side filters for decisions, articles and notes.
4. Journey filters plus the existing expandable timeline entries.

## Routes

Spanish is the default:
- `/`
- `/projects`
- `/publications`
- `/journey`

English:
- `/en/`
- `/en/projects`
- `/en/publications`
- `/en/journey`

The sample publications exist in both languages with identical slugs, so EN/ES keeps the same publication open.

## Run

```bash
npm install
npm run dev
```

Then open `http://localhost:4321/`.
