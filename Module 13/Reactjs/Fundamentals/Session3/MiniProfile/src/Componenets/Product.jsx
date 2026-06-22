import React from 'react'
import PropTypes from 'prop-types'

function Product({ products }) {
    return (
        <div>
            <div className='grid grid-cols-3 gap-6 p-6'>
                {
                    products && products.map((item, i) => (
                        <div className="mx-10 mt-10 max-w-sm overflow-hidden rounded-2xl bg-black shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl text-white">
                            <div className="p-5">
                                <h2 className="mt-3 text-2xl font-bold text-gray-400">
                                    {item.p_name}
                                </h2>
                                <p className="mt-2 text-sm text-gray-500">
                                    {item.description}
                                </p>
                                <div className="mt-3 text-yellow-500">
                                    ⭐⭐⭐⭐⭐ <span className="text-gray-500">(4.8)</span>
                                </div>
                                <div className="mt-4 flex items-center gap-3">
                                    <span className="text-2xl font-bold text-green-600">
                                        ₹{item.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
    Product.propTypes = {
        products: PropTypes.arrayOf(
            PropTypes.shape({
                p_name :PropTypes.string.isRequired,
                price : PropTypes.number.isRequired,
                description: PropTypes.string.isRequired,
            })
        ).isRequired,
    }
}

export default Product
