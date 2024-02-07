import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './i18n/en.json'
import es from './i18n/es.json'

i18next.use(initReactI18next).use(LanguageDetector)
  .init({
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      }
    }
  })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
