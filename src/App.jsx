
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/Profile'
function App() {
  

  return (
    <UserContextProvider>
      <h1>Meow Meow Meow</h1>
      <Login/>
      <h1>hello </h1>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
