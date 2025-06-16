
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/Profile'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeContextProvider } from './context/ThemeContext'
import { useEffect, useState } from 'react'
function App() {
  //method diffend xaina bhane afai defined garne
  const [themeMode,setThemeMode]=useState("light")
  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

  //Logic for change darkinto light mode

  useEffect(() => {
    const htmlElement=document.querySelector('html').classList
    htmlElement.remove("light","dark")
    htmlElement.add(themeMode)
  }, [themeMode])
  
  return (
    <ThemeContextProvider value={{themeMode,lightTheme,darkTheme}}>
    <UserContextProvider>
      <h1>Meow Meow Meow</h1>
      <Login/>
      <h1>hello </h1>
      <Profile/>
    </UserContextProvider>
    <div className="flex flex-wrap min-h-screen items-center">
                    <div className="w-full">
                        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                            <ThemeBtn />
                        </div>

                        <div className="w-full max-w-sm mx-auto">
                          <Card/>
                        </div>
                    </div>
      </div>


    </ThemeContextProvider>
  )
}

export default App
