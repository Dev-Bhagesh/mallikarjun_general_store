import React from 'react'

function About() {
    return (
        <div className='m-5 p-5 flex flex-col gap-4'>
            <div className="introduction">
                <h2 className='md:text-4xl sm:text-4xl underline'>Introduction</h2>
                <p><b>Welcome to Mallikarjun General Store</b>
                    We are a trusted neighborhood grocery store providing daily essentials, fresh groceries, snacks, and household products to our community. Our goal is to make everyday shopping simple, affordable, and convenient for everyone.</p>
            </div>
            <div className="story">
                <h2 className='underline md:text-4xl sm:text-4xl'>Our Story</h2>
                <p>Our store was founded with the idea of serving the local community with quality products at fair prices. Over the years, we have built strong relationships with our customers by providing reliable service and a wide range of daily household items.</p>
            </div>
            <div className="offer">
                <h2 className='underline md:text-4xl sm:text-4xl'>What We Offer</h2>
                <p>We offer a wide variety of products including groceries, pulses, spices, snacks, personal care items, cleaning supplies, dairy products, and beverages. Everything you need for your daily household needs can be found in one place.</p>
            </div>
            <div className="mission">
                <h2 className='underline md:text-4xl sm:text-4xl'>Our Mission</h2>
                <p>Our mission is to provide quality products, friendly service, and a convenient shopping experience for every customer.</p>
            </div>
            <div className="choice">
                <h2 className='underline md:text-4xl sm:text-4xl'>Why Chose Us</h2>
                <ul className='list-disc pl-6 space-y-1'>
                    <li>Quality products</li>
                    <li>Affordable prices</li>
                    <li>Friendly service</li>
                    <li>Convenient neighborhood location</li>
                    <li>Wide range of daily essentials</li>
                </ul>
            </div>
        </div>
    )
}

export default About
