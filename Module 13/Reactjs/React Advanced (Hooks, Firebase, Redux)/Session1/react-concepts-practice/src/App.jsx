import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import PlaylistCard from './components/PlaylistCard'
import LikeCounter from './components/LikeCounter'
import FlipkartProductList from './components/FlipkartProductList'

function App() {
  const [count, setCount] = useState(0)
  const playlist = [
    {
      name : "Blinding Lights",
      artist : "The Weeknd",
      audio : "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      name : "Shape of You",
      artist : "Ed Sheeran",
      audio : "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
      name : "Kesariya",
      artist : "Arijit Singh",
      audio : "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    }
  ]

  return (
    <>
      <PlaylistCard playlist={playlist}/>
      <LikeCounter />
      <FlipkartProductList />
    </>
  )
}

export default App
