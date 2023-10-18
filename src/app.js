// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';

import FormApp from './FormApp';

const root = createRoot(document.querySelector('#root'));
root.render(<FormApp />);