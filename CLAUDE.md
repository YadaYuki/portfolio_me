# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Vue.js 2, Vuetify, and Vue Router. The site is deployed to Firebase Hosting and showcases personal profile, education, experience, skills, certifications, and fields of study. The application is a single-page application (SPA) with a custom hamburger menu navigation.

Live site: https://www.yyada.jp/

## Technology Stack

- **Framework**: Vue.js 2.6.11
- **UI Library**: Vuetify 2.2.11 (Material Design components)
- **Router**: Vue Router 3.4.5 (History mode)
- **Build Tool**: Vue CLI 4.5.0
- **Styling**: SCSS/Sass
- **Deployment**: Firebase Hosting
- **Node Version**: 14.1.0 (managed by Volta)

## Common Commands

```bash
# Development server
yarn start
# or
npm run start

# Build for production
yarn build
# or
npm run build

# Lint code
yarn lint
# or
npm run lint

# Build and deploy to Firebase
yarn deploy
# or
npm run deploy
```

## Architecture

### Application Structure

The codebase follows a component-based architecture with three main component categories:

1. **Global Components** (`src/components/global/`)
   - `Header.vue`: Page header component
   - `Menu.vue`: Animated hamburger menu with full-screen overlay navigation

2. **Page Components** (`src/components/page/`)
   - `Profile.vue`: Main profile page that composes all profile sections

3. **Parts Components** (`src/components/parts/`)
   - Reusable section components (Education, Experience, Skill, Certification, etc.)
   - Each section typically has a container component and an item component
   - Examples: `Education.vue` + `EducationItem.vue`, `Experience.vue` + `ExperienceItem.vue`

### Routing

Router configuration is in `src/plugins/routes.js`. Currently implements a single route (`/`) that renders the Profile page. The router uses history mode, which requires the Firebase hosting rewrite rule configured in `firebase.json`.

### Theming

Vuetify theme configuration is in `src/plugins/vuetify.js`:
- Primary color: `#1AF6C2` (cyan/turquoise)
- Additional brand color used in Menu: `#16CFA3`

### Data Management

Portfolio data is stored as static JSON files in `src/assets/data/`:
- `certification.json`: Professional certifications
- `education.json`: Educational background
- `event.json`: Events and activities
- `experience.json`: Work experience
- `fields_of_study.json`: Research interests and study areas
- `project.json`: Personal and professional projects
- `publication.json`: Academic publications
- `skills.json`: Technical skills and competencies

Components import and render this JSON data directly. When updating profile content, edit these JSON files.

### Assets Organization

- `src/assets/language_icons/`: Technology and programming language SVG icons
- `src/assets/project_images/`: Project thumbnail images
- `src/assets/service-icons/`: Social media and service SVG icons (Note, Wantedly, Zenn)
- `src/assets/yadayuki.jpg`: Profile photo

### Styling Approach

- SCSS is used throughout the project with scoped styles in single-file components
- The Menu component uses SCSS mixins (`@mixin`) for reusable styles
- Global styles are minimal and defined in `App.vue`
- Mobile-responsive design with breakpoint at 500px width

## Firebase Deployment

The project is configured for Firebase Hosting (project ID: `portfolio-64d50`):
- Build output directory: `dist/`
- All routes rewrite to `/index.html` for SPA support
- Deploy with `yarn deploy` (builds and deploys in one command)

## Development Notes

- When adding new profile sections, follow the existing pattern: create container and item components in `src/components/parts/`, add corresponding JSON data file, and integrate into `Profile.vue`
- The Menu component uses a checkbox-based hamburger menu with CSS animations. Modify with care as the animation keyframes and transforms are tightly coupled
- Vue.js 2 syntax is used throughout (Options API, not Composition API)
- All external links should use `target="_blank"` or `target="_brank"` (note: there's a typo in the codebase using "brank" instead of "blank")
