import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import LikeButton from './Components/LikeButton'
import CartItem from './Components/CartItem'
import SongVote from './Components/SongVote '
import StarRating from './Components/StarRating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-900 p-8 space-y-8 text-white text-center">
        <LikeButton />
        <CartItem />
        <SongVote />
        <StarRating />
      </div>
    </>
  )
}

export default App
