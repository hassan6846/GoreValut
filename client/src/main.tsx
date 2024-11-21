//styles
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createRoot } from 'react-dom/client'
//Entry
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(

  <App />

)
