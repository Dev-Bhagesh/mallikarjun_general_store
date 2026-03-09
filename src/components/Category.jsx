import React from 'react'
import Image from 'next/image'

function Category() {
    return (

        <div className='category py-2 text-center my-auto flex flex-col items-center justify-center m-auto '>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>Category</h1>
            <div className="options grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 w-3/4 place-itmes-center gap-4 my-2">
                <div className="box1  w-2/4 flex  flex-col justify-between items-center h-40">
                    <h4>Grocery & Staples</h4>
                    <Image className='mt-auto cursor-pointer' src='/Grocery-PNG-Clipart.png' alt="Grocery" width={150} height={150}></Image>
                </div>
                <div className="box1  w-2/4 flex  flex-col justify-between items-center h-40">
                    <h4>Pulses & Lentils</h4>
                    <Image className='mt-auto cursor-pointer' src='/Pulses.png' alt='Pulses' width={150} height={150}></Image>
                </div>
                <div className="box1  w-2/4 flex  flex-col justify-between items-center h-40">
                    <h4>Spices & Masalas</h4>
                    <Image className='mt-auto cursor-pointer' src='/masala.png' alt='Masalas' width={150} height={150}></Image>
                </div>
                <div className="box1  w-2/4 flex  flex-col justify-between items-center h-40">
                    <h4>Snacks & Packaged Food</h4>
                    <Image className='mt-auto cursor-pointer' src='/snaks.png' alt='Snaks' width={150} height={150}></Image>
                </div>
                <div className="box1  w-2/4 flex  flex-col justify-between items-center h-40">
                    <h4>Personal Care</h4>
                    <Image className='mt-auto cursor-pointer' src='/Personal.png' alt='Personal Care' width={150} height={150}></Image>
                </div>
                <div className="box1  w-2/4 flex  flex-col justify-between items-center h-40">
                    <h4>Cleaning & Household</h4>
                    <Image className='mt-auto cursor-pointer' src='/Cleaning.png' alt='Cleaning' width={110} height={110}></Image>
                </div>
                <div className="box1  w-2/4 flex  flex-col justify-between items-center h-40">
                    <h4>Dairy & Breakfast</h4>
                    <Image className='mt-auto cursor-pointer' src='/Dairy.png' alt='Dairy' width={150} height={150}></Image>
                </div>
                <div className="box1  w-2/4 flex  flex-col justify-between items-center h-40">
                    <h4>Beverages</h4>
                    <Image className='mt-auto cursor-pointer' src='/Beverages.png' alt='Beverages' width={150} height={150}></Image>
                </div>
            </div>
        </div>
    )
}

export default Category
