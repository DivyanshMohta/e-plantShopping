// main.jsx
import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering
import App from './App.jsx'; // Import your main App component
import './index.css'; // Import your global CSS styles
import { Provider } from 'react-redux'; // Import the Provider component from react-redux
import store from './store.js'; // Import the configured Redux store

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your App with the Provider to make the store accessible */}
      <App />
    </Provider>
  </React.StrictMode>,
);
