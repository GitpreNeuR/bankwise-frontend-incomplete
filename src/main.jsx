import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'react-credit-cards/es/styles-compiled.css';

import {BrowserRouter,useNavigate } from 'react-router-dom'
import {CardModalProvider, FdModalProvider, RdModalProvider} from './components/providers/ModalProvider';
import { Toaster } from 'react-hot-toast';

import 'aos/dist/aos.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <Toaster/>
    <CardModalProvider/>
    
    
    <App />
    </BrowserRouter>
  
  </React.StrictMode>
  ,
)
