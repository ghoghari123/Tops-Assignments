import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Playlist from './Components/Playlist'
import OrderStatus from './Components/OrderStatus'
import FollowerList from './Components/FollowerList'
import CartSummary from './Components/CartSummary'

function App() {
  const [count, setCount] = useState(0)
  const playlist = [
    {
      title: "Kesariya",
      artist: "Arijit Singh"
    },
    {
      title: "Blinding Lights",
      artist: "The Weeknd"
    },
    {
      title: "Vhalam Aavo Ne",
      artist: "Jigardan Gadhavi"
    },
    {
      title: "Chaand Ne Kaho",
      artist: "Sachin–Jigar"
    },
  ]

  const usernames = [
    {
      username: "Riya",
      char: "R"
    },
    {
      username: "Hemanshi",
      char: "H"
    },
    {
      username: "Asha",
      char: "A"
    },
    {
      username: "Megha",
      char: "M"
    },
    {
      username: "Krunal",
      char: "K"
    },
    {
      username: "Sakshi",
      char: "S"
    },
    {
      username: "Mohit",
      char: "M"
    }
  ]

  const cartitems = [
    {
      name: "Laptop",
      price: "45000"
    },
    {
      name: "Personal Dairy",
      price: "500"
    },
    {
      name: "A4 size notbooks",
      price: "120"
    }
  ]

  return (
    <>
      <div className='bg-gray-800 p-10'>
        <Playlist playlist={playlist} />
        <OrderStatus />
        <FollowerList usernames={usernames} />
        <CartSummary cartitems={cartitems} />
      </div>
    </>
  )
}

export default App
