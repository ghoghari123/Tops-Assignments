import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import LikeButton from './Components/LikeButton'
import SearchBar from './Components/SearchBar'
import LoginForm from './Components/LoginForm'
import PlaylistAdder from './Components/PlaylistAdder'

function App() {
  const [count, setCount] = useState(0)
  const product_names = [
    {
      p_name: "Google Pixel 8"
    },
    {
      p_name: "Redmi Note 13 Pro"
    },
    {
      p_name: "Realme GT 6"
    },
    {
      p_name: "Vivo V30"
    },
    {
      p_name: "Wooden Study Tabl"
    },
    {
      p_name: "Football"
    },
    {
      p_name: "Nike Running Shoes"
    },
    {
      p_name: "Badminton Racket"
    }
  ]

  return (
    <>
      <div className='bg-black p-10'>
        <LikeButton />
        <SearchBar productnames={product_names} />
        <LoginForm />
        <PlaylistAdder />
      </div>
    </>
  )
}

export default App
