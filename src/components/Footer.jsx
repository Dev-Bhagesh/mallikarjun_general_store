import React from 'react'

function Footer() {
    return (
        <footer className='bg-[#1F2933]'>

        <div className='Footer w-full bg-[#1F2933] text-white m-auto grid md:grid-cols-3 sm:grid-cols-1 gap-8 p-3'>
            <div className="info">
                <h3>Mallikarjun General Store</h3>
                <p>Your trusted local grocery store providing fresh groceries and daily essentials.</p>
            </div>
            <div className="contact">
                <h4>Contact</h4>
                <phone>Phone: 9148378704</phone> <br />
                Address:
                <address>
                    Siddaganga Nagar, <br />
                    Rukum tola dargha road , Kalaburagi,
                    Karnataka.
                </address>
            </div>
            <div className="storehours">
                <h4>Store Hours</h4>
                <p>Morning: 6:00 AM – 10:00 AM</p>
                <p>Evening: 4:00 PM – 10:00 PM</p>
            </div>
        </div>
        <div className='text-center'>
        <small className='text-white'>© 2026 Mallikarjun General Store. All rights reserved.</small>
        </div>
        </footer>
    )
}

export default Footer
