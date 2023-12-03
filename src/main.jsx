import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { About, Certificates, Contact, Footer, Header, Main, Technologies } from './componentes/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Header />
   <Main />
   <About /> 
   <Technologies />
   <Certificates />
   <Contact />
   <Footer />
  </React.StrictMode>,
)
