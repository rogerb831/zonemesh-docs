# ZoneMesh Shared Documentation

This repository contains the shared documentation content used by both:
- `auth0-saas-starter` (Next.js app)
- `ZoneMesh-Web` (React/Vite app)

## Usage

This repo is used as a git submodule in both consuming repositories.

## Structure

- `src/DocumentationContent.tsx` - The main documentation content component

## Updating Documentation

1. Make changes to the documentation content
2. Commit and push to this repository
3. Update the submodule reference in consuming repos:
   ```bash
   cd ../auth0-saas-starter
   git submodule update --remote shared-docs
   git add shared-docs
   git commit -m "Update documentation submodule"
   ```
