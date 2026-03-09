import React from 'react'

const Hero = () => {
  return (
    <div className="hero w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] bg-[url('/store.jpg')] bg-cover bg-center flex justify-center items-center px-4 my-auto">

      <div className="innerbox bg-[#F5E6CA] p-6 md:p-8 w-full sm:w-4/5 md:w-2/3 lg:w-1/3 text-center rounded-lg shadow-lg">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          GOODS FOR DAILY LIFE..
          <br />
          Essential. Quality. Local.
        </h1>

        <p className="mt-3 text-sm md:text-base">
          Curated goods for home, wardrobe, and adventure, Est.2023
        </p>

        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
          Shop New Arrivals
        </button>

      </div>

    </div>
  )
}

export default Hero