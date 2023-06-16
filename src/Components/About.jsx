import React from 'react'
import img from "../assets/bed.jpg"
const About = () => {
    return (
        <>
            <div className='my-40 mx-20 flex'>
                <div className=' w-[50%] font-semibold  '>
                    <h1 className='text-4xl font-bold  mb-20'>
                       About 
                         <span className='text-purple-500'>  Hotel Lunar</span>
                    </h1>
                    <p className='mb-10'>
                    Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change. 
                    </p>
                    <p>
                    Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change. 
                    </p>


                </div>
                <div className='ml-5'>
                    <img src={img} alt="" className='w-[50vw] h-auto'  />
                </div>
            </div>
        </>
    )
}

export default About