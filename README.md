# ZoneMesh Documentation

## What is ZoneMesh?

ZoneMesh is a DNS synchronization platform that enables you to keep DNS zones synchronized across multiple cloud providers and on-premises infrastructure. You deploy hub containers in your own infrastructure that pull zones from sources and push them to targets, giving you full control over your DNS data.

Key features:
- Multi-provider DNS synchronization (Route 53, AXFR - GCP Cloud DNS and Azure DNS coming soon)
- Real-time status monitoring and sync history
- Secure credential management with encryption
- Automated zone synchronization
- Hub health testing and diagnostics
- Bulk operations for managing multiple resources
- Flexible subscription plans (Free and Pro)

## About This Repository

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

## Available MDX Components

The documentation supports custom MDX components that can be used in your content. These components are automatically available in MDX files - no imports needed.

### Callout

Use callouts to highlight important information, warnings, tips, or danger messages.

**Usage:**

```mdx
<Callout type="info" title="Optional Title">
  Your message here. Supports **markdown** inside.
</Callout>
```

**Types:**

- `info` - General information (blue)
- `tip` - Helpful tips and suggestions (green)
- `warning` - Important warnings (yellow)
- `danger` - Critical warnings or errors (red)

**Examples:**

```mdx
<Callout type="info">
  This is general information.
</Callout>

<Callout type="tip" title="Pro Tip">
  Here's a helpful suggestion!
</Callout>

<Callout type="warning">
  Be careful about this.
</Callout>

<Callout type="danger" title="Security Notice">
  This is critical information!
</Callout>
```

### CodeBlock

Enhanced code blocks with syntax highlighting and copy-to-clipboard functionality.

**Usage:**

```mdx
<CodeBlock filename="example.js">
{`const example = "code here";
console.log(example);`}
</CodeBlock>
```

**Props:**

- `filename` (optional): Display a filename above the code block
- `className` (optional): Additional CSS classes

**Note:** Use template literals with backticks for multi-line code. The code block automatically includes syntax highlighting and a copy button.

### LinkCard

Display rich link previews for internal or external links.

**Usage:**

```mdx
<LinkCard
  href="https://example.com"
  title="Example Link"
  description="Optional description of the link"
/>
```

**Props:**

- `href` (required): The URL to link to
- `title` (required): The link title
- `description` (optional): A brief description
- `className` (optional): Additional CSS classes

### Standard Markdown Elements

All standard Markdown elements are supported and automatically styled:

- **Headings** (`#`, `##`, `###`, etc.) - Automatically get anchor links on hover
- **Links** - Internal links use React Router, external links open in new tabs
- **Code** - Inline code is styled with a background, code blocks use CodeBlock component
- **Images** - Automatically wrapped with captions
- **Tables** - Styled with borders and proper spacing
- **Blockquotes** - Styled with left border
- **Lists** - Both ordered and unordered lists are supported

## Updating Documentation

1. Edit the MDX files in `src/content/docs/`
2. Commit and push to the repository
3. Consuming projects will automatically fetch the latest version on their next build

## Environment Variables

Consuming projects can configure the source using environment variables:

- `DOCS_GITHUB_REPO` - GitHub repository (default: `rogerb831/zonemesh-docs`)
- `DOCS_GITHUB_BRANCH` - Branch or tag (default: `main`)

## Repository

This repository is publicly available at: https://github.com/rogerb831/zonemesh-docs
