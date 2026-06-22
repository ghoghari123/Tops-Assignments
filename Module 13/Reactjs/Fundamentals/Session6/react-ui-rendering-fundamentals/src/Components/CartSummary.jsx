import React from 'react'

function CartSummary({ cartitems }) {
    return (
        <div className="mt-10 max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-5">
                <h2 className="text-2xl font-bold text-white">Cart Summary</h2>
                <p className="text-green-100 text-sm">{cartitems.length} Items in Cart</p>
            </div>

            {/* Cart Items */}
            <ul className="divide-y divide-gray-200">
                {cartitems && cartitems.map((items) => (
                    <li className="flex items-center justify-between px-6 py-4 hover:bg-gray-50">
                        <span className="font-medium text-gray-800">
                            {items.name}
                        </span>
                        <span className="font-semibold text-green-600">
                            ₹{items.price}
                        </span>
                    </li>
                ))

                }
            </ul>

            {/* Checkout Button */}
            {cartitems.length == 3 &&
                <div className="p-6">
                    <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
                        Checkout Now
                    </button>
                </div>
            }
        </div>
    )
}

export default CartSummary
