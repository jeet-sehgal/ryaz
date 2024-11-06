import './App.css'
import LogIn from './componeents/LogIn'
import Profile from './componeents/Profile'
import JeetContextProvider from './context/JeetContextProvider'


function App() {
  return (
    <JeetContextProvider>
      <h1>hi</h1>
      <LogIn />
      <Profile />
    </JeetContextProvider>
  )
}

export default App
