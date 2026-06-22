import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import Home from './Componenets/Home'
import { Route, Routes, } from 'react-router-dom'
import Navbar from './Componenets/Navbar'
import Product from "./Componenets/Product";
import UserProfile from "./Componenets/UserProfile";

function App() {
  const [count, setCount] = useState(0)
  const userprofile = {
    username: "Hemanshi Patel",
    followers:15.4,
    following:10.2,
    posts:100,
    profile_image:"https://randomuser.me/api/portraits/women/79.jpg"
  }
  const products = [
    {
      p_name: "dell laptop",
      price: 45000,
      description: "Powerful laptop with Intel Core i5 processor, 8GB RAM, and 512GB SSD. Perfect for students and office work."
    },
    {
      p_name: "HP Pavilion 14",
      price: 55000,
      description: "Stylish and lightweight laptop featuring Ryzen 5 processor, 16GB RAM, and Full HD display."
    },
    {
      p_name: "Lenovo IdeaPad Slim 3",
      price: 50000,
      description: "Reliable everyday laptop with fast performance, long battery life, and a sleek design."
    }
  ];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product products={products} />}></Route>
        <Route path='/userprofile' element={<UserProfile userprofile={userprofile} />}></Route>
      </Routes>
    </>
  )
}

export default App
