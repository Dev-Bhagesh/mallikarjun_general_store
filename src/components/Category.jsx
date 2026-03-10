"use client"
import React from 'react'
import Image from 'next/image'

function Category() {

    const products = [{
        "title": "Grocery & Staples",
        "src": "/Grocery-PNG-Clipart.png"
    }, {
        "title": "Pulses & Lentils",
        "src": "/Pulses.png"
    }, {
        "title": "Spices & Masalas",
        "src": "/masala.png"
    }, {
        "title": "Snacks & Packaged Food",
        "src": "/snaks.png"
    }, {
        "title": "Personal Care",
        "src": "/Personal.png"
    }, {
        "title": "Cleaning & Household",
        "src": "/Cleaning.png"
    }, {
        "title": "Dairy & Breakfast",
        "src": "/Dairy.png"
    }, {
        "title": "Beverages",
        "src": "/Beverages.png"
    }]

    return (

        <div className='category py-2 text-center my-auto flex flex-col items-center justify-center m-auto '>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>Category</h1>
         
            <div className="options grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 w-3/4 place-itmes-center gap-4 my-2">

                {products.map((item, index) => {
                    return (
                        <div key={index} className="output">
                            <div className="box1  w-2/4 flex  flex-col justify-between items-center h-40">
                                <Image className='hover:scale-120 transition-all duration-300 mt-auto cursor-pointer' src={item.src} alt='Cleaning' width={110} height={110}></Image>
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Category
