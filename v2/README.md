# Bench2Bytes V2 — local foundation

Branch: redesign-v2. Baseline: current remote main 706c27ac3a86f1460d46ff114dc81b5b628b5cd1. Original repository files remain unchanged outside this folder. Manifest: ../docs/preservation-manifest.json.

## Local preview
Requires Node >=22.12 and npm >=9.6.5.

```bash
cd /Users/paramitachatterjee/Documents/Bench2Bytes-V2/v2
npm ci
npm run dev -- --host 127.0.0.1 --port 4321
```

Open http://127.0.0.1:4321/Bench2Bytes/.

To inspect generated static output locally:

```bash
npm run build
npm run verify
npm run preview -- --host 127.0.0.1 --port 4321
```

These scripts start loopback servers or build local files. They have no push/deployment steps or GitHub Pages credentials. They cannot deploy the site. No deployment workflow is configured. No remote push has been performed. This development branch has no upstream; do not use a bare git push. Any future push must explicitly target redesign-v2 and first inspect deployment settings.

## Content rules
The homepage positioning is provisional. Current role, introduction, AI/governance cases, RWE evidence, leadership cases, metrics, timeline, MBA details, PMP dates, and CV await verified information. Historical articles are not rewritten. Legacy vendor HTML is retained but not linked or executed by the V2 shell. Original third-party links/claims are not independently verified. Robots noindex is intentional for this preview and requires review before any approved publication.

## Architecture
Astro 7.3.5, static output, /Bench2Bytes base, file-format routes. Shared semantic layout, structured TypeScript/JSON data, preserved historical HTML, future Markdown content. No client framework, backend, external fonts, or analytics. Navigation groups talks and writing while retaining both legacy indexes.
