import React, { useState } from 'react'

function OrderStatus() {
    const [isDelivered, setIsDelivered] = useState(false)
    return (
        <div>
            <div className="mt-15 mb-10 max-w-sm mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className={`p-6 text-center ${isDelivered ? "bg-gradient-to-r from-green-500 to-emerald-600" : "bg-gradient-to-r from-orange-500 to-amber-600 "}`}>
                    <div className={`text-6xl mb-2 ${isDelivered ? "🎉" : "🚚"}`}></div>
                    <h2 className="text-2xl font-bold text-white">
                        Order Status
                    </h2>
                </div>

                <div className="p-6 text-center">
                    <h3 className={`text-2xl font-semibold mb-2 ${isDelivered ? "text-green-600" : "text-orange-600"} `}>
                        {isDelivered ? "Order Delivered 🎉" : "On the way 🚚"}
                    </h3>

                    <p className="text-gray-500">
                        {isDelivered ? "Your package has been delivered successfully." : "Your package is currently in transit"}
                    </p>

                    <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        onClick={() => setIsDelivered(!isDelivered)}>
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderStatus
