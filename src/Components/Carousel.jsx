import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/background.jpg'
import img2 from '../assets/bed.jpg'
import img3 from '../assets/tables.jpg'
import img4 from '../assets/thulobed.jpg'
import img5 from '../assets/superior.jpg'

function CarouselExample() {
    return (
        <div className=' flex justify-center items-center my-40 mx-20 w-[90%]  '>


            <Carousel>
                <Carousel.Item>
                    <img
                        className=" w-[700px] "
                        src={img1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="  w-[700px] "
                        src={img2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" w-[700px]  "
                        src={img3}
                        alt="Third slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" w-[700px]  "
                        src={img4}
                        alt="Third slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" w-[700px]  "
                        src={img5}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselExample;