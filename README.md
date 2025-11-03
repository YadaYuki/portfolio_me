# Personal Portfolio Website

A modern, responsive personal portfolio website showcasing my professional experience, education, skills, certifications, and projects. Built with Vue.js 2 and Vuetify, featuring a sleek Material Design interface with smooth animations.

**Live Site**: [www.yyada.jp](https://www.yyada.jp/)

## Demo

<div align="center">
<img src="https://user-images.githubusercontent.com/57289763/137631074-6c10d1b6-a93a-4dc0-829d-9c66872c1f18.gif" alt="Portfolio Demo" />
</div>

## Features

- **Responsive Design**: Fully optimized for desktop and mobile devices
- **Animated Navigation**: Custom hamburger menu with full-screen overlay navigation
- **Material Design**: Clean and modern UI using Vuetify components
- **Single Page Application**: Fast and smooth navigation with Vue Router
- **Data-Driven Content**: Easy content updates through JSON configuration files
- **Firebase Hosting**: Fast and reliable deployment with Firebase

## Technology Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Vue.js 2.6.11 |
| **UI Library** | Vuetify 2.2.11 |
| **Router** | Vue Router 3.4.5 |
| **Build Tool** | Vue CLI 5.0.9 |
| **Styling** | SCSS/Sass |
| **Deployment** | Firebase Hosting |
| **Node.js** | v22.21.1 (managed by Volta) |

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v22.21.1 or higher (recommended: use [Volta](https://volta.sh/) for version management)
- **Yarn** or **npm**: Package manager
- **Firebase CLI** (optional, for deployment): `npm install -g firebase-tools`

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YadaYuki/portfolio_me.git
cd portfolio_me
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

### Development

Start the development server:
```bash
yarn start
# or
npm run start
```

The application will be available at `http://localhost:8080/`

### Build for Production

Create an optimized production build:
```bash
yarn build
# or
npm run build
```

The build output will be in the `dist/` directory.

### Linting

Run ESLint to check code quality:
```bash
yarn lint
# or
npm run lint
```

### Deployment

Deploy to Firebase Hosting (builds and deploys in one command):
```bash
yarn deploy
# or
npm run deploy
```

## Project Structure

```
portfolio_me/
├── src/
│   ├── assets/
│   │   ├── data/              # JSON data files for portfolio content
│   │   │   ├── certification.json
│   │   │   ├── education.json
│   │   │   ├── event.json
│   │   │   ├── experience.json
│   │   │   ├── fields_of_study.json
│   │   │   ├── project.json
│   │   │   ├── publication.json
│   │   │   └── skills.json
│   │   ├── language_icons/    # Technology and language SVG icons
│   │   ├── project_images/    # Project thumbnail images
│   │   ├── service-icons/     # Social media and service icons
│   │   └── yadayuki.jpg       # Profile photo
│   ├── components/
│   │   ├── global/            # Global components (Header, Menu)
│   │   ├── page/              # Page components (Profile)
│   │   └── parts/             # Reusable section components
│   │       ├── Education.vue
│   │       ├── Experience.vue
│   │       ├── Skill.vue
│   │       ├── Certification.vue
│   │       └── ...
│   ├── plugins/
│   │   ├── routes.js          # Vue Router configuration
│   │   └── vuetify.js         # Vuetify theme configuration
│   ├── App.vue                # Root component
│   └── main.js                # Application entry point
├── public/
├── firebase.json              # Firebase hosting configuration
├── .firebaserc               # Firebase project configuration
├── package.json              # Dependencies and scripts
├── vue.config.js             # Vue CLI configuration
└── README.md
```

## Component Architecture

The application follows a component-based architecture with three main categories:

### 1. Global Components (`src/components/global/`)
- **Header.vue**: Page header component
- **Menu.vue**: Animated hamburger menu with full-screen overlay navigation

### 2. Page Components (`src/components/page/`)
- **Profile.vue**: Main profile page that composes all profile sections

### 3. Parts Components (`src/components/parts/`)
Reusable section components, typically structured as container + item pairs:
- `Education.vue` + `EducationItem.vue`
- `Experience.vue` + `ExperienceItem.vue`
- `Skill.vue` + `SkillItem.vue`
- `Certification.vue` + `CertificationItem.vue`
- And more...

## Content Management

Portfolio content is managed through JSON files in `src/assets/data/`. To update your portfolio:

1. Edit the relevant JSON file (e.g., `experience.json` for work experience)
2. Follow the existing data structure
3. Save the file and rebuild the application

Example structure for `experience.json`:
```json
{
  "company_name": "Company Name",
  "company_url": "https://example.com",
  "start": "YYYY/MM/DD",
  "end": "present",
  "job_title": "Job Title",
  "description": "Job description"
}
```

## Theming

The application uses a custom Vuetify theme with the following brand colors:

- **Primary**: `#1AF6C2` (cyan/turquoise)
- **Accent**: `#16CFA3`

To modify the theme, edit `src/plugins/vuetify.js`.

## Firebase Configuration

The project is configured for Firebase Hosting with project ID: `portfolio-64d50`

Key configurations in `firebase.json`:
- Build output directory: `dist/`
- Single-page application (SPA) support with URL rewriting
- All routes redirect to `index.html`

## Browser Support

This project supports:
- Browsers with >1% market share
- Last 2 versions of major browsers
- Excludes dead browsers

See `browserslist` in `package.json` for details.

## Development Notes

- Vue.js 2 Options API is used throughout the project
- All components use scoped SCSS styles
- Mobile-responsive design with breakpoint at 500px width
- External links use `target="_blank"` for opening in new tabs
- The hamburger menu uses CSS animations with carefully tuned keyframes

## License

This project is private and not licensed for public use.

## Contact

For questions or inquiries, visit [www.yyada.jp](https://www.yyada.jp/)

---

Built with ❤️ using Vue.js and Vuetify
