import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx';
// import App2 from './App2.tsx';
import App3 from './jwt/App3.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App2/> */}
    <App3/>
  </StrictMode>,
)
