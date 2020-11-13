import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import App from './app/App';
import { SketchApiClient } from '../src/api/SketchApiClient';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={SketchApiClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
