# Tsai Min-Hsuan Porfolio

## Description
This is a personal portfolio website designed to showcase web projects and graphic design, highlighting front-end development skills. Built with React, Vite, and Tailwind CSS, it features a modern, responsive design with fast development and build performance.

## Features
1. CodePen Showcase: Displays CodePen projects with titles, descriptions, images, and direct links.
2. Responsive Design: Adapts seamlessly to desktop, tablet, and mobile devices.
3. Fast Development: Leverages Vite for hot module replacement and optimized builds.
4. Modern Styling: Utilizes Tailwind CSS v4.1.4 for utility-first, customizable styling.

## Technologies
1. React: v19.0.0
2. Vite: v6.3.1
3. Tailwind CSS: v4.1.4
4. Node.js: v18.x or higher (recommended)
5. VSCode: Recommended IDE with Tailwind CSS IntelliSense extension

## Installation
1. Clone the Repository:
```bash
git clone https://github.com/Min-Hsuan/profolio.git
cd profolio
```
2. Install Dependencies: Ensure Node.js is installed, then run:
```bash
npm install
```
3. Set Up Environment Variables: Create a .env file in the project root with the following (adjust as needed):
```env
VITE_API_URL=https://api.example.com
```
4. Run the Development Server:
```bash
npm run dev
```

## Usage
* Development: Run `npm run dev` to start the Vite development server with hot module replacement.
* Production Build: Use `npm run build` to generate optimized static assets in the dist folder.
* Preview Build: Run `npm run preview` to test the production build locally.
* Styling: Apply Tailwind CSS classes in JSX (e.g., `className="bg-blue-500 p-4"`).
* CodePen Integration: Update the `webCards` `graphicCards` array in `src/App.jsx` with your CodePen project details (title description, link, image).

## Environment Variables
Environment variables manage configuration settings (e.g., API URLs). To set them up:
1. Create a .env file in the project root.
2. Define variables with the `VITE_` prefix:
```env
VITE_API_URL=https://api.example.com
```
3. Access variables in code using `import.meta.env`:
```jsx
console.log(import.meta.env.VITE_API_URL);
```
4. Restart the development server (`npm run dev`) after modifying `.env.`

### Notes:
* Only `VITE_-prefixed` variables are exposed to client-side code.
* Add `.env*` to `.gitignore` to prevent committing sensitive data.
* If `import.meta.env.VITE_API_URL` is undefined, ensure the .env file is in the root directory, variables are correctly formatted, and the server is restarted.

## Contact
Author: Min-Hsuan
GitHub: Min-Hsuan

Feel free to reach out for questions, feedback, or collaboration opportunities!