# Rize Digital Website

A modern, responsive website for Rize Digital, a digital marketing agency, built with React and Tailwind CSS v3.

## Features

- Modern, responsive design
- Built with React and Tailwind CSS v3
- Clean, well-structured code
- Optimized for performance and SEO
- GitHub Pages deployment ready

## Pages

- Home: Showcases services, testimonials, and company overview
- About Us: Detailed information about the company, team, and values

## Tech Stack

- React 19
- Tailwind CSS v3
- Vite
- React Router

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/rizedigital.git
   cd rizedigital
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/rizedigital/`

## Building for Production

To build the project for production, run:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is configured for GitHub Pages deployment. The GitHub Actions workflow will automatically deploy the site when changes are pushed to the main branch.

To deploy manually:

1. Build the project
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages
   ```bash
   npm run deploy
   ```

## Project Structure

```
rizedigital/
├── public/              # Static files
├── src/                 # Source files
│   ├── components/      # Reusable components
│   ├── layouts/         # Layout components
│   ├── pages/           # Page components
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .github/             # GitHub configuration
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md            # Project documentation
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
