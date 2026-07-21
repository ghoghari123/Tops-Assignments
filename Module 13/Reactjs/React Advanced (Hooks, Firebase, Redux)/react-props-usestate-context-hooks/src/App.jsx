import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import PlaylistCard from './Component/Session1/PlaylistCard'
import LikeCounter from './Component/Session1/LikeCounter'
import CurrentTime from './Component/Session2/CurrentTime'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const playlist = [
    {
      s_name: "Die With A Smile",
      artist: "Lady Gaga & Bruno Mars",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbg7WvJW8XKxNqZ7P7spVCc_7sFhwEb0r8K1gcbge1_uJBkUW-f66Vg0&s=10https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/5b/9d/74/5b9d74c2-1c08-dc2d-4c89-1bfb1bb5ef2e/24UMGIM87356.rgb.jpg/600x600bb.jpg"
    },
    {
      s_name: "Beautiful Things",
      artist: "Benson Boone",
      image: "https://i1.sndcdn.com/artworks-yozHWjWpjaFSXbvH-JVqSbg-t500x500.jpg"
    },
    {
      s_name: "Unstoppable",
      artist: "Sia",
      image: "https://i1.sndcdn.com/artworks-BYfsBNW1kagANPyl-aVCYog-t500x500.jpg"
    },
    {
      s_name: "Perfect",
      artist: "Ed Sheeran",
      image: "https://m.media-amazon.com/images/I/7138OwhgdbL._AC_UF1000,1000_QL80_.jpg"
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-500 to-pink-500 p-10">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-10">
        <Routes>
          <Route></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
