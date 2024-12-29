import React from 'react';
import ReactDOM from 'react-dom/client';

// registering all events
import 'mfe-helpers/events/handlers';
import './index.css';
import MFE from './MFE';
import ErrorBoundary from 'components/common/ErrorBoundary';

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

// TODO:validate config file

const root = ReactDOM.createRoot(rootElement);

function loadDangerously(props = {}) {
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <MFE {...props} />
      </ErrorBoundary>
    </React.StrictMode>
  );
}

loadDangerously();

window.loadDangerously = loadDangerously;
