import React, { useState } from 'react'

function LikeButton() {
    const[count, setCount] = useState(0);
    return (
        <div className='mt-10'>
            <p>I used a heart icon because it is a widely recognized symbol for liking or appreciating content, and the button tracks the number of likes using React's useState hook</p>
            <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=> setCount(count + 1)}>
                <i class="fa-regular fa-heart"></i>  
                {count}
            </button>
        </div>
    )
}

export default LikeButton
