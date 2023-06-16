import React from 'react'

export default function Footer() {
    return (
        <footer className=" flex w-full  p-10 bg-[#3E3C3C] text-white justify-around">
            <div className='flex-col'>
                <div >
                    <h1 className=' font-bold text-2xl'>Hotel Lunar</h1>
                    <p className='mb-2'>will give you comfort you deserve</p>
                </div>

                <ul>

                <li className=' font-semibold'>Address : Road 12, Peace Avenue,Ado,Ekiti</li>
                <li className=' font-semibold'>Phone number : +2349061504648</li>
                <li className=' font-semibold'>Email: oluwadamilolafaj@gmail.com</li>

                </ul>

            </div>

            <div className='font-semibold flex-col  '>
                <ul>            
                    
                <li className=' '>ABOUT US</li>
                <li className=' '>CONTACT US</li>
                <li className=''>ROOMS & RATES</li>
                <li className=''>FACILITIES</li>
                </ul>
            </div>


            <div>
                <ul>


                <li className=" font-semibold">INSTAGRAM</li>
                <li className=" font-semibold">FACEBOOK</li>
                <li className=" font-semibold">TWITTER</li>
                <li className=" font-semibold">SNAP CHAT</li>
                </ul>
            </div>
        </footer>
    )
}