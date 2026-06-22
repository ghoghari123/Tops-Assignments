import React, { useState } from 'react'

function CartItem() {
  const [count, setCount] = useState(0)
  const incre = () => {
    setCount(count + 1)
  }
  const decre = () => {
    setCount(count - 1)
  }
  return (
    <div className='mt-10'>
      <p>I created a Flipkart-style cart item quantity manager where users can increase or decrease the quantity of a product using '+' and '-' buttons. The component uses React's useState hook to manage and update the quantity dynamically whenever the user interacts with the buttons</p>
      <div className="mt-5 max-w-lg mx-auto bg-black border rounded-lg p-4 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-gray-200">Quantity: 1</p>
        </div>

        <div className="flex items-center border rounded-md overflow-hidden">
          <button className="px-4 py-2 text-lg font-bold border-r hover:bg-gray-900" onClick={incre}>
            +
          </button>

          <span className="px-6 py-2 font-medium">
            {count}
          </span>

          <button className="px-4 py-2 text-lg font-bold border-l hover:bg-gray-900" onClick={decre}>
            -
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
