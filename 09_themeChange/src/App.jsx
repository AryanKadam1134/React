import React from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import Button from './components/Button';
import Card from './components/Card';

function App() {

  const [themeMode, setThemeMode] = React.useState('light');

  const lightTheme = () => {
    setThemeMode('light');
  }

  const darkTheme = () => {
    setThemeMode('dark');
  }

  React.useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <Button />
            </div>
            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
