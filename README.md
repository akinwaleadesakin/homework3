# Sole Street

Sole Street is a responsive shoe storefront built with HTML, CSS, Sass, and vanilla JavaScript. The site uses client-side navigation to load separate page views for the home page, men's collection, women's collection, new releases, and the about page.

## Features

- Browse home, men's, women's, new releases, and about pages.
- Navigate between views without a full page refresh.
- Use browser back and forward buttons through the History API.
- Load page content dynamically from the `views/` directory.
- Style the site with Sass compiled into CSS.

## Project Structure

```text
.
├── index.html          # Main HTML entry point
├── css/styles.css      # Compiled stylesheet
├── scss/styles.scss    # Sass source stylesheet
├── js/app.js           # Navigation and page loading
├── js/model.js         # View-loading helper
├── views/              # HTML fragments loaded by the app
├── images/             # Image assets
└── package.json        # Project scripts and dependencies
```

## Getting Started

### Prerequisites

- Node.js and npm

### Install dependencies

```bash
npm install
```

### Run the site

Serve the project from a local web server so the JavaScript `fetch()` calls can load the view files:

```bash
npm run serve
```

Then open the local URL shown by the server in your browser.

### Watch Sass changes

In a second terminal, run:

```bash
npm run compile-sass
```

This watches `scss/styles.scss` and updates `css/styles.css` whenever the Sass source changes.

https://in-info-web4.luddy.indianapolis.iu.edu/~aadesaki/n315/homework3/
