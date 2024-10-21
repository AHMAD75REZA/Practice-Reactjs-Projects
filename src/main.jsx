import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 import {BrowserRouter}  from 'react-router-dom'
import UserContext from './Context/UserContext.jsx'

const root = createRoot(document.getElementById("root"));

root.render(
 <UserContext>
  <App/>
 </UserContext>
);

