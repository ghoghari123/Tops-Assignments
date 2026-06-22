import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserGreeting from './Components/UserGreeting'
import UserGreetingClass from './Components/UserGreetingClass'
import MiniProfile from './Components/MiniProfile'

function App() {
  const [count, setCount] = useState(0)
  const fullname = "Hemanshi Ghoghari";
  const username = "HemuCreovix"

  return (
    <>
    <h1>Welcome to My Blog</h1> 
    <MiniProfile fullname={fullname} username={username} />
    <UserGreeting fullname={fullname} />
    <UserGreetingClass username={username} />
    </>
  )
}

export default App
