import { useState } from 'react'
import ApiTest from './api/ApiTest';


import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Profile from './components/Profile'
import ProjectList from './components/ProjectList'
import Footer from './components/Footer'
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from './context/LanguageContext'

function App() {

  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <ApiTest />
          <Header />
          <Skills />
          <Profile />
          <ProjectList
          />
          <Footer />
        </LanguageProvider>
      </ThemeProvider>
    </>
  )
}

export default App
