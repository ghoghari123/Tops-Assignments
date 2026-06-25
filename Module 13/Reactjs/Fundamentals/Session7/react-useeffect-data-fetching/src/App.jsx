import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import TrendingSongs from './Components/TrendingSongs'
import IPLScoreFetcher from './Components/IPLScoreFetcher'
import MovieSuggestions from './Components/MovieSuggestions'

function App() {
  const [count, setCount] = useState(0)
  const songs = [
    {
      id: 1,
      title: "Kesariya",
      artist: "Arijit Singh"
    },
    {
      id: 2,
      title: "Blinding Lights",
      artist: "The Weeknd"
    },
    {
      id: 3,
      title: "Vhalam Aavo Ne",
      artist: "Jigardan Gadhavi"
    },
    {
      id: 4,
      title: "Chaand Ne Kaho",
      artist: "Sachin–Jigar"
    }
  ]

  return (
    <>
      <div className='p-4 bg-blue-950'>
        <TrendingSongs songs={songs} />
        <IPLScoreFetcher />
        <MovieSuggestions />
      </div>
    </>
  )
}

export default App
