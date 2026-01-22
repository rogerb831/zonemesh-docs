# ZoneMesh Documentation

This repository contains the source of truth for ZoneMesh documentation content. The documentation is written in MDX format and is automatically fetched by consuming projects (ZoneMesh-Web and auth0-saas-starter) during their build processes.

## Structure

```
src/
└── content/
    └── docs/
        ├── overview.mdx
        ├── getting-started.mdx
        ├── zones.mdx
        ├── hubs.mdx
        ├── targets.mdx
        ├── integrations.mdx
        ├── editing-deleting.mdx
        ├── billing.mdx
        ├── troubleshooting.mdx
        └── best-practices.mdx
```

## Frontmatter

Each MDX file should include frontmatter with the following fields:

```yaml
---
title: Section Title
order: 1
description: Optional description for the section
---
```

- `title` (required): The section title displayed in the documentation
- `order` (required): Numeric order for sorting sections (lower numbers appear first)
- `description` (optional): A brief description shown below the title

## How It Works

1. Documentation content is maintained in this repository
2. Consuming projects fetch MDX files from this repo during build time via `scripts/fetch-docs-from-github.js`
3. Files are fetched from the `main` branch by default (configurable via `DOCS_GITHUB_BRANCH` env var)
4. Files are written to `shared-docs/content/docs/` in each consuming project
5. The documentation pages render the MDX content using framework-specific loaders

## Making This Repository Public

For the build-time fetching to work, this repository must be:

1. **Public** - So that consuming projects can fetch files without authentication
2. **On GitHub** - The fetch scripts use GitHub's raw content URLs
3. **Accessible** - The default branch should contain the MDX files

## Updating Documentation

1. Edit the MDX files in `src/content/docs/`
2. Commit and push to the repository
3. Consuming projects will automatically fetch the latest version on their next build

## Environment Variables

Consuming projects can configure the source using environment variables:

- `DOCS_GITHUB_REPO` - GitHub repository (default: `your-org/zonemesh-docs`)
- `DOCS_GITHUB_BRANCH` - Branch or tag (default: `main`)
