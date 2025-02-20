# Portfolio App

A modern personal portfolio application built using React and Tailwind CSS. This application showcases my background, experience, and contact information in a clean, card-based layout.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v12.0.0 or higher)
- npm (v6.0.0 or higher)

## Project Structure

```bash
portfolio-app/
├── public/                 # Static files
│   ├── bg.png             # Profile image
│   ├── favicon.ico        # Site favicon
│   └── index.html         # HTML entry point
│
├── src/                   # Source code
│   ├── components/        # Reusable React components
│   │   ├── About.js      # About section component
│   │   ├── Contact.js    # Contact information component
│   │   ├── Experience.js # Work experience component
│   │   ├── Footer.js     # Page footer component
│   │   ├── Header.js     # Profile header component
│   │   └── Portfolio.js  # Portfolio showcase component
│   │
│   ├── pages/            # Page components
│   │   └── Home.js       # Main page combining all components
│   │
│   ├── App.js            # Main application component
│   ├── index.js          # Application entry point
│   └── index.css         # Global styles and Tailwind imports
│
├── package.json          # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md            # Project documentation
```

## Detailed Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-app.git
```

2. Navigate to project directory:
```bash
cd portfolio-app
```

3. Install dependencies:
```bash
npm install
```

4. Create a .env file in the root directory if you need to add any environment variables (optional)

5. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## Build for Production

To create a production build:

```bash
npm run build
```

This will create a `build` folder with optimized production files.

## Technologies Used

- React 17.0.2
- React Router DOM 5.2.0
- Tailwind CSS 2.2.19
- PostCSS 8.3.6

## Customization

1. To update the profile information:
   - Edit `Header.js` for name and title
   - Edit `About.js` for the about section
   - Edit `Experience.js` for work experience
   - Edit `Contact.js` for contact details

2. To change the profile image:
   - Replace `/public/bg.png` with your image
   - Keep the same filename or update the image path in `Header.js`

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed:
```bash
rm -rf node_modules
npm install
```

2. Clear npm cache if needed:
```bash
npm cache clean --force
```

3. Check if you're using the correct Node.js version:
```bash
node --version
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
