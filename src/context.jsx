import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

const getInitialDarkMode = () => {
  if (localStorage.getItem('darkTheme')) {
    const storedDarkTheme = localStorage.getItem('darkTheme') === 'true'
    return storedDarkTheme
  }
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches
  return prefersDarkMode
}

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
  const [searchTerm, setSearchTerm] = useState('cat')

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [])

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme', newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  }
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
