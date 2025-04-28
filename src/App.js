import React, { useState } from 'react';

// Navigation Item Component
const NavItem = ({ active, onClick, text }) => (
  <li>
    <button
      onClick={onClick}
      className={`px-3 py-2 rounded-md text-sm font-medium transition ${
        active 
          ? 'bg-blue-700 dark:bg-blue-900 text-white' 
          : 'text-blue-100 hover:bg-blue-500 dark:hover:bg-blue-700 hover:text-white'
      }`}
    >
      {text}
    </button>
  </li>
);

// Home Page Component
const HomePage = () => (
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
      Create React App + Tailwind CSS Template
    </h2>
    
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-blue-500 text-white p-3 rounded-full">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-white">
          Ready to Deploy
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
          This template is pre-configured for GitHub Pages deployment with Tailwind CSS styling.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <FeatureCard 
            title="React" 
            description="Built with Create React App for a solid foundation" 
            icon={
              <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            } 
          />
          
          <FeatureCard 
            title="Tailwind CSS" 
            description="Utility-first CSS framework for rapid UI development" 
            icon={
              <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            } 
          />
          
          <FeatureCard 
            title="GitHub Pages" 
            description="Easy deployment to GitHub Pages built in" 
            icon={
              <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            } 
          />
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded">
          <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Getting Started</h4>
          <p className="text-blue-700 dark:text-blue-300">
            Navigate to the "Deployment" tab to see instructions for deploying to GitHub Pages.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Feature Card Component
const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
    <div className="flex justify-center mb-3">
      {icon}
    </div>
    <h4 className="text-lg font-medium mb-2 text-gray-800 dark:text-white">{title}</h4>
    <p className="text-gray-500 dark:text-gray-300 text-sm">{description}</p>
  </div>
);

// Features Page Component
const FeaturesPage = () => (
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Features</h2>
    
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="p-6 bg-blue-500 text-white">
          <h3 className="text-xl font-semibold mb-4">Built with Modern Tools</h3>
          <ul className="space-y-3 list-disc pl-5">
            <li>Create React App</li>
            <li>Tailwind CSS</li>
            <li>GitHub Pages</li>
            <li>Dark Mode Support</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Ready for Production</h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Optimized build process
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Tree-shaking for smaller bundle size
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Simple deployment process
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Cross-browser compatibility
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Accessible components
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Tailwind CSS Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
              <h4 className="font-medium mb-2 text-gray-800 dark:text-white">Utility-First Approach</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Build custom designs without leaving your HTML using small, atomic utility classes.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
              <h4 className="font-medium mb-2 text-gray-800 dark:text-white">Component-Friendly</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Extract components to reduce duplication and improve maintainability.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
              <h4 className="font-medium mb-2 text-gray-800 dark:text-white">Responsive Design</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Built-in responsive modifiers make it easy to build responsive interfaces.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
              <h4 className="font-medium mb-2 text-gray-800 dark:text-white">Dark Mode</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Built-in dark mode support with the 'dark:' variant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Deployment Page Component
const DeploymentPage = () => (
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">GitHub Pages Deployment</h2>
    
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="border-b border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Step-by-Step Deployment Guide</h3>
      </div>
      
      <div className="p-6 space-y-6">
        <div>
          <h4 className="text-lg font-medium mb-2 text-blue-600 dark:text-blue-400">1. Install the gh-pages package</h4>
          <div className="bg-gray-100 dark:bg-gray-900 rounded-md p-4 font-mono text-sm overflow-x-auto">
            <code className="text-gray-800 dark:text-gray-200">npm install gh-pages --save-dev</code>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-2 text-blue-600 dark:text-blue-400">2. Add homepage to package.json</h4>
          <p className="mb-2 text-gray-700 dark:text-gray-300">Add the following line to your package.json file:</p>
          <div className="bg-gray-100 dark:bg-gray-900 rounded-md p-4 font-mono text-sm overflow-x-auto">
            <code className="text-gray-800 dark:text-gray-200">"homepage": "https://yourusername.github.io/your-repo-name"</code>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-2 text-blue-600 dark:text-blue-400">3. Add deployment scripts to package.json</h4>
          <p className="mb-2 text-gray-700 dark:text-gray-300">Add these scripts to your package.json:</p>
          <div className="bg-gray-100 dark:bg-gray-900 rounded-md p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-gray-800 dark:text-gray-200">
{`"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
  ...
}`}
            </pre>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-2 text-blue-600 dark:text-blue-400">4. Deploy to GitHub Pages</h4>
          <div className="bg-gray-100 dark:bg-gray-900 rounded-md p-4 font-mono text-sm overflow-x-auto">
            <code className="text-gray-800 dark:text-gray-200">npm run deploy</code>
          </div>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            This will create a branch called <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-gray-800 dark:text-gray-200">gh-pages</code> that contains your built application.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-2 text-blue-600 dark:text-blue-400">5. Configure GitHub Repository Settings</h4>
          <p className="text-gray-700 dark:text-gray-300">
            Go to your GitHub repository settings, scroll down to the GitHub Pages section, and select the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-gray-800 dark:text-gray-200">gh-pages</code> branch as the source.
          </p>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded">
          <p className="text-blue-800 dark:text-blue-300">
            Your application should now be available at <span className="font-semibold">https://yourusername.github.io/your-repo-name</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);


// Docs Page Component
const DocsPage = () => (
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Documentation</h2>
    
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex overflow-x-auto">
          <button className="px-6 py-3 border-b-2 border-blue-500 font-medium text-blue-600 dark:text-blue-400">
            Getting Started
          </button>
          <button className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium">
            Components
          </button>
          <button className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium">
            Styling
          </button>
          <button className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium">
            Development
          </button>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        <div>
  <h3 className="text-lg font-medium mb-4 text-blue-600 dark:text-blue-400">Project Structure</h3>
  <pre className="bg-gray-100 dark:bg-gray-900 rounded-md p-4 font-mono text-sm overflow-x-auto text-gray-700 dark:text-gray-300 whitespace-pre">
{`my-app/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   └── [Component files]
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── postcss.config.js`}
  </pre>
</div>        
        <div>
          <h3 className="text-lg font-medium mb-4 text-blue-600 dark:text-blue-400">Available Scripts</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2 text-gray-800 dark:text-white">npm start</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Runs the app in development mode. Open http://localhost:3000 to view it in the browser.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2 text-gray-800 dark:text-white">npm test</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Launches the test runner in the interactive watch mode.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2 text-gray-800 dark:text-white">npm run build</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Builds the app for production to the build folder.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2 text-gray-800 dark:text-white">npm run deploy</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Deploys the app to GitHub Pages.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4 text-blue-600 dark:text-blue-400">Using Tailwind CSS</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            This template comes pre-configured with Tailwind CSS. You can use Tailwind's utility classes directly in your JSX:
          </p>
          
          <div className="bg-gray-100 dark:bg-gray-900 rounded-md p-4 font-mono text-sm overflow-x-auto text-gray-700 dark:text-gray-300">
            {`<div className="p-4 bg-blue-500 text-white rounded-lg shadow-md">
  <h2 className="text-xl font-bold mb-2">Hello World</h2>
  <p className="text-blue-100">This is styled with Tailwind CSS</p>
</div>`}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main App Component
const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-blue-600 dark:bg-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <svg className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h1 className="text-2xl font-bold">CRA + Tailwind Template</h1>
          </div>
          
          <nav>
            <ul className="flex space-x-1 sm:space-x-4">
              <NavItem 
                active={activeTab === 'home'} 
                onClick={() => setActiveTab('home')}
                text="Home"
              />
              <NavItem 
                active={activeTab === 'features'} 
                onClick={() => setActiveTab('features')}
                text="Features" 
              />
              <NavItem 
                active={activeTab === 'deployment'} 
                onClick={() => setActiveTab('deployment')}
                text="Deployment" 
              />
              <NavItem 
                active={activeTab === 'docs'} 
                onClick={() => setActiveTab('docs')}
                text="Docs" 
              />
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'features' && <FeaturesPage />}
        {activeTab === 'deployment' && <DeploymentPage />}
        {activeTab === 'docs' && <DocsPage />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-center md:text-left">
                © {new Date().getFullYear()} - CRA + Tailwind Template
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com" className="hover:text-blue-400 transition">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400 transition">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
