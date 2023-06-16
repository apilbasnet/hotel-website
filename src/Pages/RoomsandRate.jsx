import React from 'react'
import Overlay from '../Components/Overlay'
import { Button } from 'react-bootstrap'
import img1 from '../assets/bedd.jpg'
import thulobed from '../assets/thulobed.jpg'
import img3 from '../assets/bed.jpg'
import cstandard from '../assets/cstandard.jpg'
import dsuite from "../assets/dsuite.jpg"
import fsuite from "../assets/fsuite.jpg"
import psuite from "../assets/psuite.jpg"

import Cards from '../Components/Card'

const RoomsandRate = () => {
    return (
        <>
            <Overlay image={img1} >
                <h1 className="text-6xl font-bold text-white">OUR ROOMS AND RATE </h1>
            </Overlay>

            <div className="grid grid-cols-2 pl-64 gap-10 my-20">
               

                <Cards image={thulobed} title="Standard Double Room" list="1 bathroom" list1="2 beds" list2="2 people" amount="100,000 per night" />
                <Cards image={cstandard} title="Classic Standard Room" list="1 bathroom" list1="2 beds" list2="2 people" amount="50,000 per night" />
                <Cards image={img3} title="Classic Double Room" list="1 bathroom" list1="2 beds" list2="2 people" amount="150,000 per night" />
                <Cards image={dsuite} title="Deluxe suite with balcony view" list="1 bathroom" list1="2 beds" list2="2 people" amount="50,000 per night" />
                <Cards image={fsuite} title="Family suite with balcony view" list="1 bathroom" list1="2 beds" list2="2 people" amount="150,000 per night" />
                <Cards image={psuite} title="Penthouse suite with balcony view" list="1 bathroom" list1="2 beds" list2="2 people" amount="50,000 per night" />
            </div>



        </>
    )
}

export default RoomsandRate