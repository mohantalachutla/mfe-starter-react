import React from 'react';
import ReactDOM from 'react-dom/client';

// registering all events
import 'mfe-helpers/events/handlers';
import './index.css';
import Home from './Home';
import ErrorBoundary from 'components/common/ErrorBoundary';

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

// TODO:validate config file

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  </React.StrictMode>
);

// TODO: register to be redis
