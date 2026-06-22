import React, { useState } from 'react'

function StarRating() {
    const [rating, setRating] = useState(0);
    const handclick = (star) => {
        setRating(star)
        console.log(star);

    }
    return (
        <div className='mt-15'>
            <p>
                I created a Zomato-style rating selector where users can select a rating by clicking on a star. The component uses React's useState hook to store the selected rating and highlight the corresponding stars.
            </p>
            <div className="mt-5 max-w-sm mx-auto bg-black p-6 rounded-lg shadow-md text-center mb-10">
                <h2 className="text-gary-800 text-lg font-semibold mb-4">Rate Your Experience</h2>

                <div className="flex justify-center gap-2 text-3xl">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} onClick={() => handclick(star) } className={`cursor-pointer ${star <= rating ? "text-yellow-400" : "text-gray-00"}`}>★</span>
                    ))}
                </div>

                <p className="mt-3 text-gray-500">{rating} / 5 stars</p>
            </div>
        </div>
    )
}

export default StarRating
