import React, { useState } from 'react'

function SearchBar({ productnames }) {
    const [search, setSearch] = useState("")
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const filterProdducts = () => {
        return productnames.filter((items) =>
            items.p_name.toLowerCase().includes(search.toLowerCase())
        )
    }

    return (
        <div className="mt-15 w-full max-w-md mx-auto">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search for products, brands and more"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                    value={search}
                    onChange={handleChange}
                />
            </div>

            <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-500">Search Value</p>
                {
                    filterProdducts && filterProdducts().map((items, i) => (
                        <p className="text-ms font-medium text-gray-800" key={i}>
                            <span> {items.p_name} </span>
                        </p>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchBar
